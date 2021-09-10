const express=require('express')
const app=express()
const cors=require('cors')

const swaggerUi=require('swagger-ui-express')
const swaggerFile=require('./swagger_output.json')

const db = require('../src/database/database')
db.connect()
app.use(express.json())
app.use(cors())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const index=require("./routes/index")
app.use("/",index)

const routes=require("./routes/cursosRoutes")
app.use("/",routes)


module.exports=app