import connPromise from '../../database/connect';

export default async function handler(req, res) {
  try {
    const connection = await connPromise;
    const { id } = JSON.parse(req.body);

    // Xóa các khóa ngoại liên kết đến plan
    const query = 'DELETE FROM orders WHERE plan_id = ?';
    const values = [id];
    await connection.execute(query, values);
    // Xóa plan
    const query1 = "DELETE FROM plans WHERE ID = '" + id + "';";
    await connection.execute(query1);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
