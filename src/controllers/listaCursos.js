const mongoose = require('mongoose')
const Curso = require('../models/cursos')
const express = require('express')
const app = express()
const cors = require('cors')


/*
const getAll = (req, res) => {
    Curso.find(function (err, cursoFound) {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        } else {
            if (cursoFound && cursoFound.length > 0) {
                res.status(200).send(cursoFound);
            } else {
                res.status(204).send();
            }
        }
    })
};
*/
const getAll = async (req, res) => {

    const cursos= await Curso.find()
    res.status(200).json(cursos)
}

const getById = async (req, res) => {
    try {
        const cursoId = await Curso.findById(req.params.id)
        console.log(cursoId);
        if (cursoId == null) {
            return res.status(404).json({
                message: "Ops, bootcamp não encontrado"
            })
        }
        if (cursoId != null) {
            return res.status(200).json(cursoId)
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
module.exports = {
    getAll,
    getById
}