import express from 'express';
import { obtenerDetallesAnimal } from '../controllers/AnimalController.js';

const router = express.Router();

// Endpoint para obtener detalles de un animal por nombre
router.get('/animal/:nombre', obtenerDetallesAnimal);




export default router;
