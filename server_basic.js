const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{'Content-type':'text/html'});
        let HTML = fs.readFileSync('./index.html');
        res.end(HTML)
    } else if (req.url === "/api/user"){
        res.writeHead(200,{'Content-type':'application/json'});
        const json = JSON.stringify({
            name:'Francis',
            cars:['Ford','Nissan']
        })
        res.end(json)
    } else {
        res.writeHead(404);
        res.end();
    }
})


server.listen(8181,'127.0.0.1');
console.log('server is running on port 8181')