class SiteController {
    
    // [GET] /
    index(req, res) {
        res.render('search');
    } 

    // [GET] /search
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

