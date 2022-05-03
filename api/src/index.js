const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { GetDashboards, AddDashboard } = require('./helper');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test123',
    database: 'definitions',
    port: 3306
});

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

app.get('/api/dashboards', GetDashboards, (req, res, next) => {
    let query = db.query(res.locals.sql, (err, results) => {
        if(err) {
            res.status(500);
            res.send(err);
        }
        res.status(200);
        res.send(results);
    }); 
});

app.post('/api/add-dashboard', AddDashboard, (req, res, next) => {
    let query = db.query(res.locals.sql, res.locals.dashboard, (err, results) => {
        if(err) {
            res.status(500);
            res.send(err);
        }
        res.status(200);
        res.send('success');
    }); 
});
