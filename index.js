const fs = require('fs');
const https = require('https');
const http = require('http');

var request = https.get('https://jsonplaceholder.typicode.com/posts', function(response) {
    if (response.statusCode === 200) {
        var file = fs.createWriteStream("result/posts.json");
        response.pipe(file);
    }
    // Add timeout.
    request.setTimeout(12000, function () {
        request.abort();
    });
});


const HOST = 'localhost';
const PORT = process.env.PORT || 5050;


// Create a server with the HTTP library
http.createServer((req,res) =>{
fs.readFile('result/posts.json', (err,data) =>{
  if(err) throw err;
  res.writeHead(200,{'Content-Type': 'application/json'});
  data = JSON.parse(data);
  data = JSON.stringify(data,null,2);
  res.end(`${data}`);
})
}).listen(PORT);

console.log(`Server running at ${HOST} on port ${PORT} 🔥`);
