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
        const { name, description, price, service_id } = JSON.parse(req.body);
        const query =
            "INSERT INTO PLANS(name, description, price, service_id) VALUES ( '" +
            name +
            "', '" +
            description +
            "','" +
            price +
            "', '" +
            service_id +
            "');";
        await connection.execute(query);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}