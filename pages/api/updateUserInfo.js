import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "ietech",
    user: "root",
    password: "",
    port: "3306",
  });

  try {
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
