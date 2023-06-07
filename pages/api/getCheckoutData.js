import connPromise from '../../database/connect';

export default async function handler(req, res) {
  const id = req.body.id;
  const connection = await connPromise;

  if (req.method === 'POST') {
    try {
      const query =
        'SELECT plans.id plan_id, services.id service_id, plans.name plan_name, services.name service_name, price FROM plans, services WHERE plans.service_id = services.id AND plans.id = ?';
      const values = [id];
      const [rows] = await connection.execute(query, values);
      res.status(200).json(rows);
    } catch (e) {
      res.status(500).json({ message: e.message });
      console.log(e.message);
    }
  } else {
    res.status(500).json({ message: 'Method not allowed' });
  }
}
