const exp = require('express');
const router = exp.Router();

router.get('/', (req, res)=>{
    res.render('main');
});

router.get('/about', (req, res)=>{
    res.render('about');
});

module.exports = router;