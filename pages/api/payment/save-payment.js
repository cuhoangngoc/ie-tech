import mysql from 'mysql2/promise';
import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { id, total, user_id, plan_id, duration } = req.body;

      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

      const payment = await stripe.paymentIntents.create({
        // change amout to cent
        amount: total * 100,
        currency: 'usd',
        description: `Thanh toán cho gói ${plan_id} của user ${user_id}`,
        payment_method: id,
        confirm: true,
      });

      // check if payment is successful
      // save payment to database
      const connection = await mysql.createConnection({
        host: 'localhost',
        database: 'ietech',
        user: 'root',
        password: '',
        port: '3306',
      });

      const order_status = payment.status === 'succeeded' ? 'Thành công' : 'Đã hủy';
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
      connection.end();

      res.json({ message: 'Thanh toán thành công', success: true });
    } catch (e) {
      res.status(500).json({ message: e.message, success: false });
    }
  } else res.setHeader('Allow', 'POST');
}
