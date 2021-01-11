const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const axios = require("axios");

// Update your DB credentials

let db;
const db_config = {
    host: "",
    user: "",
    password: "",
    port: "",
    database: "",
};

//  Persistent connection
//  https://stackoverflow.com/questions/19357539/node-js-server-closed-the-connection
function persistentConnection() {
    db = mysql.createConnection(db_config);


    db.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(persistentConnection, 2000);
        }
    });

    db.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            persistentConnection();
        } else {
            throw err;
        }
    });
}

persistentConnection();


/* GET home page. */
router.get('/getAllProducts', function (req, res, next) {
    let sql = `SELECT * from listing`;
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err["sqlMessage"]);
            const response = {
                statusCode: 400,
                body: JSON.stringify('Error'),
            };
            return response;
        }
        const response = {
            statusCode: 200,
            body: JSON.stringify(results),
        };
        res.send(response);
    });
});

router.get('/getMockProducts', function (req, res, next) {
    results = {Items: [{"jobName": "job1", "partID": "part1"}, {"jobName": "job2", "partID": "part2"}]};
    const response = {
        statusCode: 200,
        body: results,
    };
    res.send(response);
});


module.exports = router;
