import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "ietech",
    user: "root",
    password: "",
    port: "3306",
  });

  if (req.method === "POST") {
    try {
      const { user_id, plan_id, duration, total, order_date, order_status } =
        JSON.parse(req.body);

      const biggestIdQuery =
        "SELECT ID AS id FROM ORDERS ORDER BY ID DESC LIMIT 1";
      const [biggestId] = await connection.execute(biggestIdQuery);
      const biggest_id = biggestId[0].id + 1;

      // format date
      const date = new Date(order_date);
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
      const seconds =
        date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
      const minutes =
        date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
      const hour =
        date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
      const formattedDate = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;

      const query =
        'INSERT INTO ORDERS (ID, USER_ID, PLAN_ID, DURATION, TOTAL, ORDER_DATE, STATUS) VALUE ("' +
        biggest_id +
        '", "' +
        user_id +
        '", "' +
        plan_id +
        '", "' +
        duration +
        '", "' +
        total +
        '", "' +
        formattedDate +
        '", "' +
        order_status +
        '");';
      await connection.execute(query);

      const updateUserBalance =
        "UPDATE USERS SET BALANCE = BALANCE - " +
        total +
        " WHERE ID = " +
        user_id;

      await connection.execute(updateUserBalance);

      connection.end();
      res.status(200).json({ status: "success" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
