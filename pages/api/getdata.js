import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const query = 'SELECT * FROM clients';
    const [rows, fields] = await connection.execute(query);
    res.status(200).json({ clients: rows });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
