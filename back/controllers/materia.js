import materiaModel from '../models/materia.js'

class materiaController {
    constructor() {
    }

    async create(req, res) {
        try {
            const data = await materiaModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await materiaModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await materiaModel.delete(id);
            res.status(206).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await materiaModel.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            res.status(201).json({ status: 'GO - OK' });
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new materiaController();