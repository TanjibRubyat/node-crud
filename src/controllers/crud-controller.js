const connection = require('../../db')

const create = (req,res)=>{
    const data = req.body
    console.log(data)
    // exit()
    var sql = "insert into countries(country_code,name) values (?,?)";
    console.log(sql)
    connection.query(sql,[data.country_code,data.name],(err)=>{
        if(err){
            res.status(500).json({
                message:"failed"
        })
        }else{
            res.status(200).json({
                message:"success",
                data:data
        })
        }
    })
}

const getData = (req,res)=>{
    const sql = "select * from countries";
    connection.query(sql,(err,results)=>{
        if(err){
            res.status(500).json({
                message:"failed"
            })
        }else{
            res.status(200).json({
                message:200,
                data:results
            })
        }
    })
}

const getById=(req,res)=>{
    // console.log(req.params.id)
    const sql = `select * from countries where id = ${req.params.id}`
    connection.query(sql,(err,results)=>{
        if(err){
            res.status(500).json({
                message:"failed"
            })
        }else{
            if(results==""){
                res.status(404).json({
                    message:"not found",
                })
            }else{
                res.status(200).json({
                    message:"success",
                    data:results
                })
            }
            
        }
    })
}

const update_record = (req,res)=>{
    const data = req.body
    const sql = `update countries set country_code =?, name=? where id=${req.params.id}`
    connection.query(sql,[data.country_code,data.name],(err,results)=>{
        if(err){
            res.status(500).json({
                message:"failed"
            })
        }else{
            if(results==""){
                res.status(404).json({
                    message:"id not found"
                })
            }else if(results.affectedRows==0){
                res.status(500).json({
                    message:"not updated"
                })
            }else{
                res.status(200).json({
                    message:"updated",
                    data:data
                })
            }
        }
    })
}

const delete_record = (req,res)=>{
    const id = req.params.id
    const sql = `delete from countries where id = ${req.params.id}`
    connection.query(sql,(err,results)=>{
        if(err){
            res.status(500).json({
                message:"failed"
            })
        }else if(results.affectedRows==0){
            res.status(404).json({
                message:"Not found"
            })
        }else{
            res.status(200).json({
                message:"Deleted",                
            })
        }
    })
}

module.exports = {create,getData,getById,update_record,delete_record}