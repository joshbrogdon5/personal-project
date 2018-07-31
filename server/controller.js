module.exports = {
    logout: (req,res) => {
        req.session.destroy();
        res.redirect('http://localhost:3000/')
    }
}