const express = require('express');
const router = express.Router();
const actorController = require('./../controller/actor.controller');

router.get('/actors', actorController.getAllActors);
router.put('/actors/edit/:id', actorController.updateActor);
router.get('/actors/:id', actorController.getActorById);
router.post('/actors/add', actorController.createActor);
router.delete('/actors/delete/:id', actorController.deleteActor);

module.exports = router;
