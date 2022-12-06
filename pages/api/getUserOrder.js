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
        "SELECT ORDERS.id, PLANS.name plan, SERVICES.name service, duration, total, order_date, status FROM ORDERS, USERS, PLANS, SERVICES WHERE ORDERS.user_id = USERS.id AND ORDERS.plan_id = PLANS.id AND PLANS.service_id = SERVICES.id AND USERS.id = ?";
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
