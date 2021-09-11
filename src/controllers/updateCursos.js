const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Curso=require('../models/cursos')

const update =async(req,res)=>{

    try{
        //tenta encontrar receita pelo id 
        const curso= await Curso.findById(req.params.id)

        if (curso==null){
            return res.status(404).json({ message: "Bootcamp não encontrado"})
        }

        if(req.body.titulo !=null){
            curso.titulo=req.body.titulo,
            curso.categoria=req.body.categoria,
            curso.tempo=req.body.tempo,
            curso.publico=req.body.publico,
            curso.observacao=req.body.observacao,
            curso.empregabilidade=req.body.empregabilidade,
            curso.valor=req.body.valor,
            curso.inscricoes=req.body.inscricoes
        }

        const cursoAtualizado= await curso.save()
        res.status(200).json(cursoAtualizado)

    }catch(err){
        res.status(500).json({ message:err.message })
    }

}
module.exports={
    update 
}