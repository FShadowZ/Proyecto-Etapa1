import { obtenerNombresAnimales1 as obtenerNombresAnimalesModel1 } from '../models/AnimalModel1.js';

const obtenerNombresAnimales1 = async (req, res) => {
  try {
    const nombresAnimales = await obtenerNombresAnimalesModel1();
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

export { obtenerNombresAnimales1 };
