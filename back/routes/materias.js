import express from 'express';
const route = express.Router();
import materiaController from '../controllers/materia.js';

route.post('/', materiaController.create);
route.get('/', materiaController.getAll);
route.get('/:id', materiaController.getOne);
route.put('/:id', materiaController.update);
route.delete('/:id', materiaController.delete);

export default route;