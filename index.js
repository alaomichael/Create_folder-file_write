const fs = require('fs')
const path = require('path')
const content = 'Some content just created!'

// Make a new directory
fs.mkdir('results/names',{recursive:true},(err) => {
  if(err){
throw err;
  }
  });

// Create and write to new file
fs.writeFile(path.join(__dirname,'results/names','names.json'), content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
  console.log('File created successfully.')
});