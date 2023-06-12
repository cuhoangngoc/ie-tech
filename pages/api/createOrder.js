import connPromise from '../../database/connect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const connection = await connPromise;

      const { user_id, plan_id, duration, total, status } = JSON.parse(req.body);

      const query =
        'INSERT INTO orders (user_id, plan_id, duration, total, status) VALUE ("' +
        user_id +
        '", "' +
        plan_id +
        '", "' +
        duration +
        '", "' +
        total +
        '", "' +
        status +
        '");';

      await connection.execute(query);

      // const updateUserBalance =
      //   'UPDATE users SET balance = balance - ' + total + ' WHERE id = ' + user_id;

      // await connection.execute(updateUserBalance);
      res.status(200).json({ status: 'success' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
