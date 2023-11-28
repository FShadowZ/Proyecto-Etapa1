import { obtenerDetallesAnimalPorNombre } from '../models/AnimalModel.js';

const obtenerDetallesAnimal = async (req, res) => {
  const nombreAnimal = req.params.nombre;
  try {
    const detallesAnimal = await obtenerDetallesAnimalPorNombre(nombreAnimal);
    if (detallesAnimal.length > 0) {
      res.json(detallesAnimal);
    } else {
      res.status(404).json({ message: 'Animal no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener detalles del animal:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};



export { obtenerDetallesAnimal };
