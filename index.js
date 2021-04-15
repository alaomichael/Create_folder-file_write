const fs = require('fs')
const path = require('path')

const url = 'http://jsonplaceholder.typicode.com/posts';
  

let posts =[ {
  "name": "Michael Alao",
  "age": 35,
  "gender": "male"
},
 {
  "name": "Esther Alao",
  "age": 35,
  "gender": "female"
}
]
console.log(posts);

// Make a new directory
fs.mkdir('result',{recursive:true},(err) => {
  if(err){
throw err;
  }
  });

// Create and write to new file
fs.writeFile(path.join(__dirname,'result','posts.json'), posts, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
  console.log('File created successfully.')
});