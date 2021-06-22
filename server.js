const exp = require('express');
const path = require('path');
const app = exp();

app.use('/pseudo', exp.static(path.join(__dirname, 'html')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'html', 'main.html'));
});

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

app.listen(8080, ()=>{
    console.log('Express App on port 8080');
});