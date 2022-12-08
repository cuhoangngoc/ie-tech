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
    const email = "SELECT email FROM users WHERE email = ?";
    const val = [req.body.email];
    const [rows] = await connection.execute(email, val);
    if (rows.length > 0) {
      res.status(400).json({ message: "Email đã tồn tại" });
      connection.end();
      return;
    }
    try {
      const query =
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
      const values = [req.body.name, req.body.email, req.body.password];
      const [rows] = await connection.execute(query, values);
      connection.end();
      res.status(200).json({ message: "Success" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
