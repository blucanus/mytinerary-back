const express = require('express')
const router = require('./router/router')
require("./config/db") //usa la configuraicón de la base de datos para conectarse
const cors = require('cors')



const app = express()
app.use(cors())
app.use(express.json())
/* app.use(cors())  */                        //para permitir orígenes cruzados (fron/back)
app.use("/api", router)

app.listen(3000, ()=> {
    console.log("listening on port 3000");
});

