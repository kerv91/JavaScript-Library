require('dotenv').config();

let express = require ('express');
let app = express();
let test = require('./controllers/testcontroller')
let sequelize = require('./db');

sequelize.sync(); //tip pass in {force:true} for resetting table

app.use(express.json());

app.use('/test', test)

app.use('/api/user', require('./controllers/usercontroller')
);

app.listen(3000, function(){
    console.log('App is listening on 3000')
});

