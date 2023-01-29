const express = require('express')
const bodyParser = require('body-parser')
const {PORT} =  require('./config/serverConfig')
const ApiRoutes = require('./routes/index')
const db = require('./models')
const setupAndStartServer= async ()=> {
// create express object
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',ApiRoutes)
app.listen(PORT,()=>{
    // add a key in .env to sync this
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true})
    }
    console.log(`running on ${PORT}`);
    
    console.log(process.env.PORT)
})
}

setupAndStartServer()