import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    let [rows] = await connection.execute(
      'SELECT count(*) as total FROM users WHERE is_admin = ?',
      [0]
    );
    const users = rows[0].total;

    [rows] = await connection.execute('SELECT count(*) as total FROM orders');
    const orders = rows[0].total;

    [rows] = await connection.execute('SELECT sum(total) as total FROM orders');
    const income = rows[0].total;

    [rows] = await connection.execute('SELECT count(*) as total FROM payments WHERE test = ?', [0]);
    const payments = rows[0].total;

    res.status(200).json({ users, orders, income, payments });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
