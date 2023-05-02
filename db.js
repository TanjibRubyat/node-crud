const mysql = require('mysql')

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"employees"
})

conn.connect((err)=>{
    if(!err){
        console.log('connected')
    }else
    console.log(err)
})

module.exports = conn