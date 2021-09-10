const express = require("express");
const router = express.Router();

const controller = require("../controllers/listaCursos")
const controllerCreate = require("../controllers/createCursos")
const controllerDelete = require("../controllers/deletarCursos")
const controllerUpdate = require("../controllers/updateCursos")

router.get("/cursos",controller.getAll);
router.get("/cursos/:id", controller.getById);

router.post("/cursos",controllerCreate.createCurso);

router.delete("/cursos/:id/delete",controllerDelete.deleteCurso);

router.put("/cursos/:id/update",controllerUpdate.update );

module.exports = router;