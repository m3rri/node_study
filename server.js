const http = require('http');
http.createServer((req, res)=>{
    return req
    .on('error', err=>{
        console.error(err);
    })
    .on('data', data=>{
        console.log(data);
    })
    .on('end', ()=>{
        res.on('error', err=>{
            console.error(err);
        });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('hi~\n');
        res.end('the end');
    });
}).listen(8080);