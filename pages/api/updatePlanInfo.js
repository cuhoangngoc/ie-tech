import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const { id, name, description, price } = JSON.parse(req.body);
    const query =
      "UPDATE plans SET NAME = '" +
      name +
      "', description = '" +
      description +
      "', price = '" +
      price +
      "' WHERE id = '" +
      id +
      "';";
    await connection.execute(query);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
