var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var productCtrl = require('./dbController');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    var ret = {
        msg: 'hello from nodejs express api'
    };

    res.json(ret);
})

app.use('/request', productCtrl);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on PORT ${PORT}`);
});