const fs = require('fs');
const http = require('http');
const path = require('path');
const fetch = require('node-fetch');

// Api
const url = 'http://jsonplaceholder.typicode.com/posts';
  
const posts = fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let posts = data.results;
  return posts
})
.catch(function(error) {
  console.log(error);
});

console.log(`Result from placeholder: ${posts}`);


// Make a new directory
fs.mkdir('result',{recursive:true},(err) => {
  if(err){
throw err;
  }
  });

// Create and write to new file
const jsonString = JSON.stringify(posts,null,2);
fs.writeFile(path.join(__dirname,'result','posts.json'), jsonString, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
  console.log('File created successfully.')
});

 const HOST = 'localhost';
const PORT = process.env.PORT || 5001;

// Helper function
function jsonReader(filepath,cb) {
  fs.readFile(filepath,(err,fileData)=> {
    if(err){
      return cb && cb(null,object);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null,object); 
    } catch (err) {
      return cb && cb(err);
    }
  });
}

// Calling the helper function
// jsonReader('result/posts.json',(err,posts)=> {
//   if (err){
//     console.log(err);
//     return;
//   }
//   console.log(posts[0].name);
// });


// Create a server with the HTTP library
const server = http.createServer((req,res) =>{
// fs.readFile('result/posts.json', (err,data) =>{
//   if(err) throw err;
//   res.writeHead(200,{'Content-Type': 'application/json'});
//   res.write(data);
//   res.end();
// })

// Calling the helper function
jsonReader('result/posts.json',(err,posts)=> {
  if (err){
    console.log(err);
    return;
  }
  res.writeHead(200,{'Content-Type': 'application/json'});
  posts= JSON.stringify(posts,null,2);
  res.write(posts);
  res.end();
  console.log(`Result served to host ${posts}`);
});


}).listen(PORT);


// server.listen(PORT,HOST);
console.log(`Server running at ${HOST} on port ${PORT} 🔥`);
