import { obtenerNombresAnimales as obtenerNombresAnimalesModel } from '../models/AnimalModel.js';

const obtenerNombresAnimales = async (req, res) => {
  try {
    const nombresAnimales = await obtenerNombresAnimalesModel();
    if (nombresAnimales.length > 0) {
      res.json(nombresAnimales);
    } else {
      res.status(404).json({ message: 'No se encontraron nombres de animales' });
    }
  } catch (error) {
    console.error('Error al obtener nombres de animales:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export { obtenerNombresAnimales };
