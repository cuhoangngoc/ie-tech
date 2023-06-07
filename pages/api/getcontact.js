import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const query = 'SELECT * FROM contacts';
    const values = [];
    const [rows] = await connection.execute(query, values);
    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
