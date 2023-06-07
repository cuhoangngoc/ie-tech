import connPromise from '../../database/connect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const connection = await connPromise;

      const { user_id, plan_id, duration, total, order_status } = JSON.parse(req.body);

      const query =
        'INSERT INTO ORDERS (USER_ID, PLAN_ID, DURATION, TOTAL, STATUS) VALUE ("' +
        user_id +
        '", "' +
        plan_id +
        '", "' +
        duration +
        '", "' +
        total +
        '", "' +
        order_status +
        '");';

      await connection.execute(query);

      const updateUserBalance =
        'UPDATE USERS SET BALANCE = BALANCE - ' + total + ' WHERE ID = ' + user_id;

      await connection.execute(updateUserBalance);
      res.status(200).json({ status: 'success' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
