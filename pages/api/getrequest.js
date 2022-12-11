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
      const { id } = JSON.parse(req.body);
      const query = "SELECT * FROM payments WHERE user_id = ?";
      const [rows] = await connection.execute(query, [id]);
      connection.end();
      res.status(200).json(rows);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  } else {
    try {
      const query = "SELECT * FROM payments";
      const values = [];
      const [rows] = await connection.execute(query, values);
      connection.end();
      res.status(200).json(rows);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
