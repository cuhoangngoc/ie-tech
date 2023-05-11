import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    database: 'ietech',
    user: 'root',
    password: '',
    port: '3306',
  });

  try {
    const query =
      'SELECT orders.id id, user_id, users.name username, plans.name plan, services.name service, orders.created_at, duration, total, status FROM orders, users, plans, services WHERE orders.user_id = users.id AND orders.plan_id = plans.id AND plans.service_id = services.id';
    const values = [];
    const [rows] = await connection.execute(query, values);
    connection.end();
    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
