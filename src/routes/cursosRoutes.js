const express = require("express");
const router = express.Router();

const controller = require("../controllers/listaCursos")
const controllerCreate = require("../controllers/createCursos")
const controllerDelete = require("../controllers/deletarCursos")
const controllerUpdate = require("../controllers/updateCursos")

router.get("/curso",controller.getAll);
router.get("/curso/:id", controller.getById);

router.post("/curso",controllerCreate.createCurso);

router.delete("/curso/:id/delete",controllerDelete.deleteCurso);

router.put("/curso/:id/update",controllerUpdate.update);

module.exports = router;