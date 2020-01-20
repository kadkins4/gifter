const   express       = require('express'),
        app           = express(),
        bodyParser    = require('body-parser'),
        cors          = require ('cors'),
        mongoose      = require('mongoose'),
        dbConnection  = require('./config'),
        Users         = require('./routes/api/users'),
        port          = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = require('bluebird');
mongoose.connect(dbConnection.database, dbConnection.dbOptions);

app.use('/api/users', Users);

app.listen(port, () => console.log(`Listening on ${port}`));