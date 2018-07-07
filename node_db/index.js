const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./node_data/sqlite3.db',
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the sample database: sqlite3');
        }
    });

if (db) {
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS users (id number, email text, pwd text)');
        try {
            db.run('DELETE FROM users');
            for (var i = 1; i <= 5; i++) {
                var str = 'INSERT INTO users (id,email,pwd) VALUES (' + i + ', "' + i + '@abc.com", "pwd' + i + '")';
                db.run(str);
            }
        } catch (err) {

        }

        db.each('SELECT * FROM users', (err, row) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(row);
            }
        });
    });

    db.close();
}