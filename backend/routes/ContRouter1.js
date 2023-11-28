import express from 'express';
import { obtenerConteoFilasAnimal1 } from '../controllers/ContControl1.js';

const router = express.Router();

// Endpoint
router.get('/count1', obtenerConteoFilasAnimal1);




export default router;