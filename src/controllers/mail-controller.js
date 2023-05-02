const pageView=(req,res)=>{
    console.log("id",req.params)
    const items = {
        name :"dfgdfg",
        age:2366,
    }
    res.render('index',{items,id:req.params.id})

}
const sendMail = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        message: "Mail sent"
    })
}

const postMail = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        message: req.body
    })
}

const putMail = (req, res) => {
    res.status(200).json({
        message: `Mail put ${req.params.id}`
    })
}

const getMailById = (req, res) => {
    res.status(200).json({
        message: `Get mail id ${req.params.id}`
    })
}

module.exports = { sendMail, postMail, putMail, getMailById,pageView }