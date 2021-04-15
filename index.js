const fs = require('fs')
const path = require('path')
const content = 'Some content just created!'

fs.writeFile(path.join(__dirname,'/holder',names.json), content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
  console.log('File created successfully.')
})