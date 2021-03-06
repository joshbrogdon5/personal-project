const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const config = require('./config');
const stripe = require('stripe')(config.secret_key);
const controller = require('../server/controller');
const authBypass = require('auth-bypass');
const path = require('path');

const app = express();

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());

app.use(cors());

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET, REACT_APP_LOCALHOST_STORE} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(authBypass.withObject(
    {
        id:5,
        name: 'Sap Sucking Savage',
        email: 'sapsucker@savage.com'
    },
    {
    env: 'MODE'
    }
))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
});

app.get('/auth/callback', async (req,res) => {
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.PROTOCOL}://${req.headers.host}/auth/callback`
    }

    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);

    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`);

    const db = req.app.get('db');
    let {sub, email, name, picture} = resWithUserData.data;
    let foundUser = await db.find_user([sub]);
    if(foundUser[0]){
        req.session.user = foundUser[0]
        res.redirect(REACT_APP_LOCALHOST_STORE)
    }else {
        let createdUser = await db.create_user([name, email, sub, picture])
        res.redirect(REACT_APP_LOCALHOST_STORE)
    }
});

//store and cart endpoints:
app.get('/api/logout', controller.logout);
app.get('/api/user-data', controller.userData);
app.get('/api/products', controller.getAllProducts);
app.get('/api/display-all', controller.displayAll);
app.post('/api/add-to-cart', controller.addToCart);
app.delete('/api/product/:id', controller.deleteProduct);
app.put('/api/quantity', controller.quantity);
app.put('/api/clear-cart', controller.clearCart)
app.get('/api/proteins', controller.getAllProtein)
app.get('/api/preworkouts', controller.getAllPreworkouts)
app.get('/api/bcaas', controller.getAllBcaa)
app.get('/api/multivitamins', controller.getAllMultivitamins)
app.get('/api/creatine', controller.getAllCreatine)
app.get('/api/accessories', controller.getAllAccessories)
app.get('/api/getUserPosts', controller.getUserPosts)

//community endpoints:
app.get('/api/getposts', controller.getPosts)
app.post('/api/createpost', controller.createPost)

//STRIPE:
app.post('/api/payment', controller.makePayment);


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(SERVER_PORT, () => {
    console.log(`Its poppin off on port ${SERVER_PORT}`)
});