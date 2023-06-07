import connPromise from '../../../database/connect';
export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const query = 'SELECT plan_id, COUNT(*) AS num_orders FROM orders GROUP BY plan_id;';
    const [rows] = await connection.execute(query);
    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
