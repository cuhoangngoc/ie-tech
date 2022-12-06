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
        const {user_id, account_number, amount, date } = JSON.parse(req.body);
        const test = 0;
        const query = "INSERT INTO payments (user_id, amount, date, account_number, test) VALUE ('"+user_id+"', '"+amount+"', '"+date+"', '"+account_number+"', '0');"
        await connection.execute(query);
    } catch (e) {
        res.status(500).json({message: e.message });
    }
  }