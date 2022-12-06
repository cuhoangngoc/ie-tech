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
    const { name, email, content } = JSON.parse(req.body);
    const query =
      "INSERT INTO CONTACTS (NAME, EMAIL, CONTENT) VALUE ('" +
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
