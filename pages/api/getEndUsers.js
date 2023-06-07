import connPromise from '../../database/connect';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const connection = await connPromise;
      const query = 'SELECT * FROM users WHERE is_admin = ?';
      const values = [0];
      const [rows] = await connection.execute(query, values);
      res.status(200).json(rows);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  } else if (req.method === 'POST') {
    try {
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
