const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller.js');

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance);
  
    //  dbInstance.new_products()
    //    .then( products => console.log( products ) )
    //    .catch( err => console.log( err ) );

    // dbInstance.get_products()
    // .then( products => console.log ( products ) )
    // .catch( err => console.log( err ) );
  });
app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/products', controller.getProducts);

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server listening on port ${port}`) } );