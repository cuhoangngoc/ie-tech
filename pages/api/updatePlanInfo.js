import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const { id, name, description, price } = JSON.parse(req.body);
    const query =
      "UPDATE PLANS SET NAME = '" +
      name +
      "', DESCRIPTION = '" +
      description +
      "', PRICE = '" +
      price +
      "' WHERE ID = '" +
      id +
      "';";
    await connection.execute(query);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
