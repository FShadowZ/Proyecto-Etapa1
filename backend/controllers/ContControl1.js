// Importa la función contarFilasAnimal del modelo
import { contarFilasAnimal1 } from '../models/AnimalModel1.js';

const obtenerConteoFilasAnimal1 = async (req, res) => {
  try {
    // Llama a la función contarFilasAnimal del modelo para obtener el conteo total
    const totalFilas = await contarFilasAnimal1();

    // Si se obtiene un conteo, envía la respuesta
    if (totalFilas !== undefined) {
      res.json({ total: totalFilas });
    } else {
      // Si no hay filas o hay un problema, envía un estado 404 (No encontrado)
      res.status(404).json({ message: 'No se encontraron filas' });
    }
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener el conteo de filas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export { obtenerConteoFilasAnimal1 };
