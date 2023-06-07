import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const query =
      'SELECT orders.id id, user_id, users.name username, plans.name plan, services.name service, orders.created_at, duration, total, status FROM orders, users, plans, services WHERE orders.user_id = users.id AND orders.plan_id = plans.id AND plans.service_id = services.id';
    const values = [];
    const [rows] = await connection.execute(query, values);
    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
