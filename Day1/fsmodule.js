const fs = require('fs');
fs.readFile('file.txt','utf8', (err, data)=>{
    console.log(err,data);
});

fs.writeFile('file2.txt','This is the data to be written in file2.txt',()=>{
    console.log('Write the data');
})