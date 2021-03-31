const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
//const bodyParser = require('body-parser');
const app = express();
const testFolder = "./test_folder/";
const fs = require('fs');

const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.get("/get", function (req, res) {

    fs.readdir(testFolder, (err, files) => {
        res.send(files);

        files.forEach(file => {
            console.log(file);
        });
    })
});
app.get("/get-all", function (req, res) {
    res.send({name: "get-all"});
});
