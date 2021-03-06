const exp = require('express');
const path = require('path');
const app = exp();
const route = require('./route.js');

app.set('view engine', 'pug'); //엔진을 pug로 설정
app.set('views', path.join(__dirname, 'html')); //pug file이 있는 폴더를 정의

app.use('/pseudo', exp.static(path.join(__dirname, 'html')));
app.use('/', route);
app.use((req, res, next)=>{
    console.info('request url :: '+req.url);

    if(req.url.indexOf('bomb')>=0){
        console.info('error'+error);
    }else{
        next();
    }
});
app.use((req, res, next)=>{
    res.status(404).send('not found url');
});
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('server error');
});

app.listen(8080, ()=>{
    console.log('Express App on port 8080');
});