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
    // const query = "SELECT plans.name  FROM plans, services WHERE plans.id = services.plan_id";
    // const query =
    //   "SELECT plans.id id, plans.name plan, description, price, services.name service FROM plans, services WHERE plans.service_id = services.id";
    const query =
      "SELECT plans.id id, plans.name plan, description, price, services.name service FROM plans, services WHERE plans.service_id = services.id AND service_id = 3";
    const values = [];
    const [rows] = await connection.execute(query, values);
    connection.end();
    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
