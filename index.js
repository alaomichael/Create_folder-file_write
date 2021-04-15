const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);
})


const url = 'http://jsonplaceholder.typicode.com/posts';
  

// let posts =[ {
//   "name": "Michael Alao",
//   "age": 35,
//   "gender": "male"
// },
//  {
//   "name": "Esther Alao",
//   "age": 35,
//   "gender": "female"
// }
// ]
// console.log(posts);

// api url
// const api_url = 
//       "https://employeedetails.free.beeceptor.com/my/api/path";
  
// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//   }
// // Calling that async function
// getapi(api_url);

const newPosts = fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let posts = data.results;
  return posts
})
.catch(function(error) {
  console.log(error);
});

// Make a new directory
fs.mkdir('result',{recursive:true},(err) => {
  if(err){
throw err;
  }
  });

// Create and write to new file
fs.writeFile(path.join(__dirname,'result','posts.json'), newPosts, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
  console.log('File created successfully.')
});