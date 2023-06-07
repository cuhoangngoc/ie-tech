import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const { user_id, account_number, amount, date } = JSON.parse(req.body);
    const test = 0;
    const query =
      "INSERT INTO payments (user_id, amount, date, account_number, test) VALUE ('" +
      user_id +
      "', '" +
      amount +
      "', '" +
      date +
      "', '" +
      account_number +
      "', '0');";
    await connection.execute(query);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
