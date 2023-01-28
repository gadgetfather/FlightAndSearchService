const express = require('express')
const {PORT} =  require('./config/serverConfig')
const setupAndStartServer= async ()=> {
// create express object
const app = express()
app.listen(PORT,()=>{
    console.log(`running on ${PORT}`);
    console.log(process.env.PORT)
})
}

setupAndStartServer()