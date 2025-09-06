import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class materiaModel {
    async create(materia) {
        const colMaterias = dbClient.db.collection('materias');
        return await colMaterias.insertOne(materia);
    }

    async update(id, materia) {
        const colMaterias = dbClient.db.collection('materias');
        return await colMaterias.updateOne({ _id: new ObjectId(id)}, {$set: materia});
    }

    async delete(id) {
        const colMaterias = dbClient.db.collection('materias');
        return await colMaterias.deleteOne({ _id: new ObjectId(id)});
    }

    async getAll() {
        const colMaterias = dbClient.db.collection('materias');
        return await colMaterias.find({}).toArray();
    }
}

export default new materiaModel;