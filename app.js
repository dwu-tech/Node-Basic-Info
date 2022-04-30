const http = require('http')
const port = 8080
const fs = require('fs')
var url = require('url')

const server = http.createServer(createServer)

function createServer(req, res){
    var path = url.parse(req.url).pathname
    var fsCallback = function(error,data){
        if(error) throw error;

        res.writeHead(200);
        res.write(data)
        res.end();
    }

    switch(path){
        case '/':
            doc = fs.readFile('files/index.html',fsCallback);
            break;
        case '/about':
            doc = fs.readFile('files/about.html',fsCallback);
            break;
        case '/contact-me':
            doc = fs.readFile('files/contact-me.html',fsCallback);
            break;
        default:
            
            doc = fs.readFile('files/404.html', fsCallback);
    }
}

server.listen(port,function(error){
    if(error){
        console.log('Something Went Wrong', error)
    }
    else{
        console.log('Server is listening on port ' + port)

    }
})