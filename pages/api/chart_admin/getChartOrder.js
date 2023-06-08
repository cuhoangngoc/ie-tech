import connPromise from '../../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const { month, year} = req.query;
    const query =
      `SELECT YEAR(date_list.month_year) AS year, MONTH(date_list.month_year) AS month, COUNT(CASE WHEN orders.status = 'Thành công' THEN orders.id ELSE NULL END) AS order_count, COUNT(CASE WHEN orders.status = 'Đã hủy' THEN orders.id ELSE NULL END) AS cancelorder_count, IFNULL(SUM(CASE WHEN orders.status = 'Thành công' THEN orders.total ELSE 0 END), 0) AS revenue FROM (SELECT DATE_FORMAT('${year}-${month}-01' - INTERVAL n MONTH, '%Y-%m-01') AS month_year FROM (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 UNION ALL SELECT 10 UNION ALL SELECT 11) nums ) date_list LEFT JOIN orders ON YEAR(orders.created_at) = YEAR(date_list.month_year) AND MONTH(orders.created_at) = MONTH(date_list.month_year) WHERE date_list.month_year >= DATE_FORMAT('${year}-${month}-01' - INTERVAL 11 MONTH, '%Y-%m-01') GROUP BY YEAR(date_list.month_year), MONTH(date_list.month_year) ORDER BY YEAR(date_list.month_year) ASC, MONTH(date_list.month_year) ASC;`;
    const [rows] = await connection.execute(query);
    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
