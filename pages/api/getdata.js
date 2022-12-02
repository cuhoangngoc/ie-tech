import mysql from 'mysql2/promise';
export default async function handler(req, res) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        database: 'ietech',
        user: 'root',
        password: '',
        port: '3306',
    });

    try {
        const query = 'SELECT * FROM clients';
        const [rows, fields] = await connection.execute(query);
        res.status(200).json({ clients: rows });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}