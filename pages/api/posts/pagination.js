import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "ietech",
    user: "root",
    password: "",
    port: "3306",
  });

  try {
    const perPage = 2; // số mục trên mỗi trang
    const currentPage = req.query.page || 1; // trang hiện tại
    const offset = (currentPage - 1) * perPage; // số mục được bỏ qua

    const [rows, fields] = await connection.execute(
      `SELECT * FROM plans LIMIT ?, ?`,
      [offset, perPage]
    );
    res.status(200).json({ plants: rows });

    //http://localhost:3000/api/get_pagination_api?page=2
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
