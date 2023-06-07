import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const { name, email, phone, address } = JSON.parse(req.body);
    const query =
      "UPDATE users SET name = '" +
      name +
      "', email = '" +
      email +
      "', phone = '" +
      phone +
      "', address = '" +
      address +
      "' WHERE email = '" +
      email +
      "';";
    await connection.execute(query);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
