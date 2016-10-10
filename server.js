/**
 * Created by mansikhemka on 03/10/16.
 */


const express = require('express');
const path = require ('path');
const app=express();

const dtufood = require('./routes/dtufood');
const mexy = require('./routes/mexy');
const micmac = require('./routes/micmac');
const nescafe = require('./routes/nescafe');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', dtufood);
app.use('/mexy', mexy);
app.use('/nescafe', nescafe);
app.use('/micmac', micmac);

app.listen(4040, () => {
    console.log('http://localhost:4040/');
});

