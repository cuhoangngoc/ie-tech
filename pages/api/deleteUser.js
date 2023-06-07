import connPromise from '../../database/connect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const connection = await connPromise;
    try {
      // Lấy các order của user
      const check =
        'SELECT orders.id order_id FROM users, orders WHERE users.id = orders.user_id AND users.id = ?';
      const val = [req.body.id];
      const [res] = await connection.execute(check, val);

      // Xóa các order của user
      res.forEach(async (order) => {
        const query = 'DELETE FROM orders WHERE id = ?';
        const values = [order.order_id];
        await connection.execute(query, values);
      });

      // Xóa payment của user
      let query = 'DELETE FROM payments WHERE user_id = ?';
      await connection.execute(query, [req.body.id]);

      // Xóa user
      query = 'DELETE FROM users WHERE id = ?';
      await connection.execute(query, [req.body.id]);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
