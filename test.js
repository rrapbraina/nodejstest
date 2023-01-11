const fs = require('fs');
const files = ['./app.js', './test2.js'];

files.forEach(file => {
    try {
        const data = fs.readFileSync(file);
        console.log('data of files are: ' + data);
    }
    catch (e){
        if( e.code ==='ENOENT'){
            console.log('File is not found...');
        }
        else{
            throw e;
        }

    }
});