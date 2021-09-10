const mongoose = require('mongoose')

const cursoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  tempo: {
    type: String,
    required: true
  },
  publico: {
    type: String,
    required: true
  },
  observacao: {
    type: String,
    required: true
  },
  empregabilidade: {
    type: String,
    required: true
  },
  valor: {
    type: String,
    required: true
  },
  inscricao: {
    type: Date,
    required: true,
    default: new Date
  }
})

const cursos=mongoose.model('cursos', cursoSchema)

module.exports=cursos
