import express from 'express';
import { obtenerNombresAnimales1 } from '../controllers/NombreAnimal1.js';

const router = express.Router();

// Endpoint para obtener detalles de un animal por nombre
router.get('/nombre1', obtenerNombresAnimales1);




export default router;
