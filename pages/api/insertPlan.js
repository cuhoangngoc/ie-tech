import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const { name, description, price, service_id } = JSON.parse(req.body);

    const check = 'SELECT * FROM services WHERE id = ?';
    const [res] = await connection.execute(check, [service_id]);
    if (res.length === 0) {
      res.status(500).json({ message: 'Service not found' });
      return;
    }

    const query =
      "INSERT INTO plans(name, description, price, service_id) VALUES ( '" +
      name +
      "', '" +
      description +
      "','" +
      price +
      "', '" +
      service_id +
      "');";
    await connection.execute(query);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
