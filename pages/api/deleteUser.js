import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "ietech",
    user: "root",
    password: "",
    port: "3306",
  });

  if (req.method === "POST") {
    try {
      // Lấy các order của user
      const check =
        "SELECT orders.id order_id FROM users, orders WHERE users.id = orders.user_id AND users.id = ?";
      const val = [req.body.id];
      const [res] = await connection.execute(check, val);

      // Xóa các order của user
      res.forEach(async (order) => {
        const query = "DELETE FROM orders WHERE id = ?";
        const values = [order.order_id];
        const [rows] = await connection.execute(query, values);
      });

      // Xóa user
      const query = "DELETE FROM users WHERE id = ?";
      const values = [req.body.id];
      const [rows] = await connection.execute(query, values);
      connection.end();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
