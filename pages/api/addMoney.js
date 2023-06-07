import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const val = [req.body.id];
    const query = 'UPDATE payments SET test = 1 WHERE id = ?';
    await connection.execute(query, val);

    const query2 = 'SELECT * FROM payments WHERE id = ?';
    const [rows2] = await connection.execute(query2, val);
    let money_add = rows2[0].amount;
    let userid = rows2[0].user_id;
    const value1 = [userid];

    const query1 = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await connection.execute(query1, value1);
    let money = rows[0].balance;
    money = money + money_add;

    const query3 = 'UPDATE users SET balance = ? WHERE id = ?';
    const value2 = [money, userid];
    await connection.execute(query3, value2);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
