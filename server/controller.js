const config = require('./config');
const stripe = require('stripe')(config.secret_key);

module.exports = {
    logout: (req,res) => {
        req.session.destroy();
        res.redirect('/#/')
    },
    userData: (req,res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        }else {
            res.status(401).send('Forbidden')
        }
    },
    getAllProducts: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_products()
            .then(products => {
                dbInstance.get_cartid(req.session.user.id)
                    .then(cart => {
                        if(cart[0]){
                            req.session.user.cart_id = cart[0].id
                            res.status(200).send({cart, products})
                        }else{
                            dbInstance.create_cart(req.session.user.id)
                                .then(cart => { 
                                    req.session.user.cart_id = cart[0].id
                                    res.status(200).send({cart, products})})
                        }
                    })
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    displayAll: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.join_all([req.session.user.cart_id])
            .then(all => {
                 res.status(200).send(all)})
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err)
            })
    },
    addToCart: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.add_to_cart([req.session.user.cart_id, req.body.id, req.body.quantity])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    deleteProduct: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.delete_product([id, req.session.user.cart_id])
            .then(() => {
                dbInstance.join_all([req.session.user.cart_id])
                .then(product => res.status(200).send(product))
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    makePayment: (req,res,next) => {
        const amountArray = req.body.amount.toString().split('');
        const pennies = [];
        for(var i = 0; i < amountArray.length; i++){
            if(amountArray[i] === "."){
                if(typeof amountArray[i + 1] === "string"){
                    pennies.push(amountArray[i +1]);
                }else{
                    pennies.push("0")
                }
                if(typeof amountArray[i + 2]=== "string"){
                    pennies.push(amountArray[i + 2]);
                }else{
                    pennies.push("0")
                }
                break;
            }else{
                pennies.push(amountArray[i])
            }
        }
        const convertedAmt = parseInt(pennies.join(''));

        const charge = stripe.charges.create({
            amount: convertedAmt,
            currency: 'usd',
            source: req.body.token.id,
            description: 'Test Charge'
        }, function(err,charge){
            if(err) return res.sendStatus(500)
            return res.sendStatus(200)
        })
    },
    quantity: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.quantity([req.body.quantity, req.body.id, req.session.user.cart_id])
        .then(() => {
            dbInstance.join_all([req.session.user.cart_id])
            .then(product => res.status(200).send(product))
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong!"})
            console.log(err);
        })
    },
    clearCart: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.clear_cart([req.session.user.id, req.session.user.cart_id])
        .then(() => {
            dbInstance.create_cart(req.session.user.id)
            .then(cart => {
                req.session.user.cart_id = cart[0].id;
                res.status(200).send({cart})})
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    createPost: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.create_post([req.session.user.id, req.body.title, req.body.content])
            .then(() => {
                dbInstance.get_posts()
                    .then(posts => res.status(200).send(posts))
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    getPosts: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_posts()
            .then(posts => res.status(200).send(posts))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    getAllProtein: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_protein()
            .then(proteins => res.status(200).send(proteins))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    getAllPreworkouts: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_preworkout()
            .then(preworkout => res.status(200).send(preworkout))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    getAllBcaa: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_bcaa()
            .then(bcaa => res.status(200).send(bcaa))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    getAllMultivitamins: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_multivitamin()
            .then(multivitamin => res.status(200).send(multivitamin))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    getAllCreatine: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_creatine()
            .then(creatine => res.status(200).send(creatine))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    getAllAccessories: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_accessories()
            .then(accessories => res.status(200).send(accessories))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    },
    getUserPosts: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_user_posts(req.session.user.id)
            .then(posts => res.status(200).send(posts))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    }
}