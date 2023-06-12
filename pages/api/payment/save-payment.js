import Stripe from 'stripe';
import connPromise from '../../../database/connect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const connection = await connPromise;
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
      const order_status = payment.status === 'succeeded' ? 'Thành công' : 'Đã hủy';
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
        order_status +
        '");';

      await connection.execute(query);
      res.status(200).json({ message: 'Thanh toán thành công', success: true });
    } catch (e) {
      res.status(500).json({ message: e.message, success: false });
    }
  } else res.setHeader('Allow', 'POST');
}
