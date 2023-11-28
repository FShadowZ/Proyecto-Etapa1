import express from 'express';
import { obtenerNombresAnimales } from '../controllers/NombreAnimal.js';

const router = express.Router();

// Endpoint para obtener detalles de un animal por nombre
router.get('/nombre', obtenerNombresAnimales);




export default router;
