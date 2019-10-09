require ('dotenv').config();

const express = require('express');
const app = express();

const pies = require('./controllers/piecontrollers');
const user = require('./controllers/usercontrollers');

const sequelize = require('./db');

sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

app.use('/pies', pies);
app.use('/auth', user);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

// app.use(express.static(__dirname + '/public'));  //STATIC FILES
// console.log(__dirname);

// app.get('/',(reg, res) => res.render('index'));


