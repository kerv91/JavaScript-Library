let express = require('express')
let router = express.Router()
let sequelize = require('../db');
let TestModel = sequelize.import('../models/test');


/**************************************
* Controller Method #1: Simple Response
/ **************************************/
//1             //2
router.post('/one', function(req, res){
//3
res.send("Test 1 went through!")
});


/**************************************
* Controller Method #2: Persistant Data
**************************************/
router.post('/two', function (req,res) {
    let testData = "Test data for endpoint two"; //2

    TestModel //3
        .create({ //4 
            //6
        testdata: testData //5
        }).then(dataFromDatabase => {
            res.send("Test two went through!")
        })
});

/**************************************
* Controller Method #3: req. body
**************************************/
router.post('/three', function (req, res) {
    let testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test three went through!")
})

//STEP 4 use this with postman
router.post('/four', function (req, res){
    let testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message() {
        res.send("Test 4 went through!");
        }
    );
});

/**************************************
* Route #5: Return data in a Promise
**************************************/
router.post('/five', function (req, res){
    let testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(data){
            res.send(data);
        }
    );
});

/**************************************
* Route #6: Return response as JSON
**************************************/
router.post ('/six', function (req, res) {
    let testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(testdata) {
        res.json({
            testdata: testData
        });
        }
    );
});


/**************************************
* Route 7: Handle errors
**************************************/
router.post('/seven', function (req, res){
    let testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSucess(testdata){
            res.json({
                testdata: testdata
            });
        },
        function createError(err){
            res.send(500, err.message);
        }
    );
});

module.exports = router;

