import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const id = req.body.id;
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "ietech",
    user: "root",
    password: "",
    port: "3306",
  });

  if (req.method === "POST") {
    try {
      const query =
        "SELECT PLANS.id plan_id, SERVICES.id service_id, PLANS.name plan_name, SERVICES.name service_name, price FROM PLANS, SERVICES WHERE PLANS.service_id = SERVICES.id AND PLANS.id = ?";
      const values = [id];
      const [rows] = await connection.execute(query, values);
      connection.end();
      res.status(200).json(rows);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(500).json({ message: "Method not allowed" });
  }
}
