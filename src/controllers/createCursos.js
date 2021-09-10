const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Curso=require('../models/cursos')
const cors=require('cors')

const createCurso = async (req, res) => {

    const curso = new Curso({
      _id: new mongoose.Types.ObjectId(),
      titulo: req.body.titulo,
        categoria: req.body.categoria,
        tempo: req.body.tempo,
        publico: req.body.publico,
        observacao: req.body.observacao,
        empregabilidade: req.body.empregabilidade,
        valor: req.body.valor,
      inscricoes: req.body.inscricoes,
    })
    const cursoJaExiste = await Curso.findOne({titulo: req.body.titulo})
    if (cursoJaExiste) {
      return res.status(409).json({error: 'Bootcamp ja cadastrado.'})
    }
    try{
      const novoCurso = await curso.save()
      res.status(201).json(novoCurso)
    } catch(err) {
      res.status(400).json({ message: err.message})
    }
  }
module.exports={
    createCurso
}