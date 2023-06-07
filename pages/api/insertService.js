import connPromise from '../../database/connect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const connection = await connPromise;
    const nameService = 'SELECT name FROM services WHERE name = ?';
    const val = [req.body.name];
    const [rows] = await connection.execute(nameService, val);
    if (rows.length > 0) {
      res.status(400).json({ message: 'Tên dịch vụ đã tồn tại' });
      return;
    }
    try {
      const query = 'INSERT INTO services (name) VALUES (?)';
      const values = [req.body.name];
      const [rows] = await connection.execute(query, values);
      res.status(200).json({ message: 'Success' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
