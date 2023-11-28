import express from 'express';
import { obtenerDetallesAnimal1 } from '../controllers/AnimalController1.js';

const router = express.Router();

// Endpoint para obtener detalles de un animal por nombre
router.get('/animal1/:nombre', obtenerDetallesAnimal1);




export default router;
