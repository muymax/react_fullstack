const os = require('os');
const fs = require('fs');
const userData = require('./user.js');

let user = os.userInfo();
let date = new Date();

let message = `User "${user.username}" started APP at ${date}`

if(userData.addLog()){
    fs.appendFile("hello.txt",message,(err)=>{
        if(err){
            console.log('not able to append')
        }
    })
}
