import connPromise from '../../database/connect';

export default async function handler(req, res) {
  const id = req.body.id;

  if (req.method === 'POST') {
    try {
      const connection = await connPromise;
      const { id } = JSON.parse(req.body);
      const query =
        'SELECT orders.id, plans.name plan, services.name service, duration, total, orders.created_at, status FROM orders, users, plans, services WHERE orders.user_id = users.id AND orders.plan_id = plans.id AND plans.service_id = services.id AND users.id = ?';
      const values = [id];
      const [rows] = await connection.execute(query, values);
      res.status(200).json(rows);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(500).json({ message: 'Method not allowed' });
  }
}
