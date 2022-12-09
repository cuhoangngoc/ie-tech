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
        const { id, name, description, price } = JSON.parse(req.body);
        const query =
            "UPDATE PLANS SET NAME = '" +
            name +
            "', DESCRIPTION = '" +
            description +
            "', PRICE = '" +
            price +
            "' WHERE ID = '" +
            id +
            "';";
        await connection.execute(query);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}