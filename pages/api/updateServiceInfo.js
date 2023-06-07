import connPromise from '../../database/connect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const connection = await connPromise;
      const { name, id } = JSON.parse(req.body);
      const query = "UPDATE services SET name ='" + name + "' WHERE id = '" + id + "';";
      await connection.execute(query);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
