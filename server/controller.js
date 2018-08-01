module.exports = {
    logout: (req,res) => {
        req.session.destroy();
        res.redirect('http://localhost:3000/')
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
                            res.status(200).send({cart, products})
                        }else{
                            dbInstance.create_cart(req.session.user.id)
                                .then(cart => { res.status(200).send({cart, products})})
                        }
                    })
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            })
    }
}