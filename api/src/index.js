const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test123',
    database: 'definitions',
    port: 3306
});

//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected');
});

const port = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to my api')
})

app.listen(port, () => console.log("App is running on port " + port))


/*app.get('/api/dashboards', (req, res) => {
    
});*/
