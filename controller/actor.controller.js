const { error } = require('console');
const db = require('../models');
const send = require('send');
const Actor = db.Actor

class ActorController {
    static getAllActors = async (req, res) => {
        const actor = await Actor.findAll();
        return res.json({ data: actor });
    };

    static getActorById = async (req, res) => {
        const actor = await Actor.findByPk(req.params.id)

        if(!actor) return res.status(404).json({message: 'Not found'});

        return res.json({ data: actor });
    }
    static createActor = async (req, res) => {
        try{
            const actor = await Actor.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                role: req.body.role
            });
            res.status(201).json(actor);
        }
        catch(err){
            res.status(500).send(err.message);
        }
    }
    static updateActor = async (req, res) => {
        try{
            const actor = await Actor.findByPk(req.params.id);
            if(!actor) return res.status(404).send('Actor Not Found');

            actor.firstName = req.body.firstName;
            actor.lastName = req.body.lastName;
            actor.email = req.body.email;
            actor.role = req.body.role;
            await actor.save();

            res.json(actor);

        }catch (err){
            res.status(500),send(err.message);
        }
    
    };
    static deleteActor = async (req, res) => {
        try{
            const actor = await Actor.findByPk(req.params.id);
            if(!actor) return res.status(404).send('Actor Not Found');

            await actor.destroy();
            res.json(actor);

        }catch (err){
            res.status(500),send(err.message);
        }
    
    };
}

module.exports = ActorController;