import connPromise from '../../database/connect';
// import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    // const query = "SELECT plans.name  FROM plans, services WHERE plans.id = services.plan_id";
    const query =
      'SELECT plans.id id, plans.name plan, description, price, services.name service FROM plans, services WHERE plans.service_id = services.id';
    const values = [];
    const [rows] = await connection.execute(query, values);
    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({ message: e.message });
    console.log(e.message);
  }
}
