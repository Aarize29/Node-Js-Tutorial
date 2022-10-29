const http=require('http');


const server=http.createServer((req,res)=>{ //req is request and res is response8
    // console.log(req);
    // res.write("Welcome to our home page");
    // res.end();
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    if(req.url === '/about'){
        res.end("Welcome to our About page")
    }
    
   res.end("404Error: Not Found")
        
    
})

server.listen(5000);