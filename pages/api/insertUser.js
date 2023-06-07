import connPromise from '../../database/connect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const connection = await connPromise;
    const email = 'SELECT email FROM users WHERE email = ?';
    const val = [req.body.email];
    const [rows] = await connection.execute(email, val);
    if (rows.length > 0) {
      res.status(400).json({ message: 'Email đã tồn tại' });
      return;
    }
    try {
      const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
      const values = [req.body.name, req.body.email, req.body.password];
      const [rows] = await connection.execute(query, values);
      res.status(200).json({ message: 'Success' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
