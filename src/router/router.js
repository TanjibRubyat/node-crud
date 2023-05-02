const express = require('express')
const router = express.Router()
const { sendMail,postMail,putMail,getMailById,pageView } = require('../controllers/mail-controller')
const {create,getData,getById,update_record,delete_record} = require("../controllers/crud-controller")

router.route('/home/:id').get(pageView)
router.route("/").post(sendMail)
router.route("/mail-post").post(postMail)
router.route('/mail-put/:id').put(putMail)
router.route('/mail-get/:id').get(getMailById)

router.post('/create-crud',create)
router.get('/read',getData)
router.get('/read/:id',getById)
router.put('/update/:id',update_record)
router.get('/delete-record/:id',delete_record)

module.exports = router 