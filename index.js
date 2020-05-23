const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
app.use(cors());

const uri = "mongodb+srv://sunnyrk:123456@sunny@programs-aj2kj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || uri, {useNewUrlParser: true});

// mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/programs',{useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes)

app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error:err.message});
});
app.listen(process.env.PORT || 4000, function(){
    console.log(`Ready on localhost ${process.env.PORT}`);
});