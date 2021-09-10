const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Curso=require('../models/cursos')

const deleteCurso= (req, res) => {

    const requiredId = req.params.id;
    Curso.find({ id: requiredId }, function (err, curso) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            if (curso) {
                
                Curso.deleteOne({ id: requiredId }, function (err) {
                    if (err) {
                        res.status(500).send({
                            message: err.message,
                            status: "FAIL"
                            
                        })
                    } else {
                        res.status(200).send({
                            message: 'Excluído com sucesso',
                            
                            status: "SUCCESS"
                        })
                    }
                })
            } else {
                res.status(404).send({ message: 'Não pode ser removido com esse id' })
            }
        }
    })
};



module.exports={
    deleteCurso
}