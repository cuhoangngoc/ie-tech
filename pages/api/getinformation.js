import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const { name, email, content } = JSON.parse(req.body);
    const query =
      "INSERT INTO contacts (name, email, content) VALUE ('" +
      name +
      "', '" +
      email +
      "', '" +
      content +
      "');";
    await connection.execute(query);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
