const mongoose=require('mongoose')

const MONGO_URL=process.env.MONGODB_URI || 'mongodb://localhost:27017/Projet0'   


const connect=()=>
    {mongoose.connect(MONGO_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

        .then(console.log('Database conectado com sucesso'))
        .catch(err=>console.err)
    }

module.exports={connect}