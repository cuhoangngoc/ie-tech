import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const { name, email, phone, address } = JSON.parse(req.body);
    const query =
      "UPDATE USERS SET NAME = '" +
      name +
      "', EMAIL = '" +
      email +
      "', PHONE = '" +
      phone +
      "', ADDRESS = '" +
      address +
      "' WHERE EMAIL = '" +
      email +
      "';";
    await connection.execute(query);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
