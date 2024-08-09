const https = require('http')

const server = https.createServer((request, response)=>{
    let path = request.url;
    
    if(path ==='/' || path.toLocaleLowerCase() ==='/home'){
        response.end("Welcome to home page");
    }else if(path.toLocaleLowerCase() === '/about'){
        response.end("Welcome to about page");
    }else if(path.toLocaleLowerCase() === '/contact'){
        response.end("Welcome to about contact");
    }else {
        response.end("Error 404 : Page not found");
    }
});



server.listen(5000, '127.0.0.1',()=>{
    console.log('server has started')
})
