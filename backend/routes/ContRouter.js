import express from 'express';
import { obtenerConteoFilasAnimal } from '../controllers/ContControl.js';

const router = express.Router();

// Endpoint
router.get('/count', obtenerConteoFilasAnimal);




export default router;