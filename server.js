const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
//const bodyParser = require('body-parser');
const app = express();
const testFolder = "./test_folder/";
const fs = require('fs');
const createTestCafe = require('testcafe');

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

app.get("/run", async function(req, res) {
    const testCafe = await createTestCafe();

    try {
        const runner = testCafe.createRunner();

        await runner
            .src('./testcafe/test/example.ts')
            .browsers('chrome')
            .run();
    }
    finally {
        await testCafe.close();
    }
});
