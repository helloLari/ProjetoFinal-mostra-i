const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{

    response.status(200).json({
        "titulo": "API Mostra-í Bootcamps",
        "version": "1.0.0",
        "mensagem": "Tudo certo!"
    })
})
module.exports = router