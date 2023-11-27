import express from 'express';
import { obtenerDetallesAnimal, contarFilasAnimal } from '../controllers/AnimalController.js';

const router = express.Router();

// Endpoint para obtener detalles de un animal por nombre
router.get('/animal/:nombre', obtenerDetallesAnimal);



router.get('/api/animal/', async (req, res) => {
    try {
      const totalFilas = await getTotalAnimalCount();
      res.json({ total: totalFilas });
    } catch (error) {
      console.error('Error al obtener el contador:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });
  
  const getTotalAnimalCount = async () => {
    // Llama a la función del controlador aquí
    return await contarFilasAnimal();
  };
export default router;
