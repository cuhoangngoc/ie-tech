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
    const nameService = "SELECT name FROM services WHERE name = ?";
    const val = [req.body.name];
    const [rows] = await connection.execute(nameService, val);
    if (rows.length > 0) {
      res.status(400).json({ message: "Tên dịch vụ đã tồn tại" });
      connection.end();
      return;
    } 
    try {
        const query = "INSERT INTO services (name) VALUES (?)";
        const values = [req.body.name];
        const [rows] = await connection.execute(query, values);
        connection.end();
        res.status(200).json({ message: "Success" });
        } catch(e){
            res.status(500).json({ message: e.message });
        }
    }
} 
