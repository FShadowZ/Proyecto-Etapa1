import { db } from "../db.js";

const obtenerDetallesAnimalPorNombre = async (nombre) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT nombre, raza, genero FROM animal WHERE nombre = ? AND especie = "gato"', [nombre], (error, resultados) => {
            if (error) {
                console.error('Error al obtener detalles del animal:', error);
                return reject(error);
            }

            if (resultados.length === 0) {
                return resolve([]);
            }

            const detallesFormateados = resultados.map(animal => ({
                
                nombre: animal.nombre,
                raza: animal.raza,
                genero: animal.genero
            }));
            console.log(detallesFormateados)
            resolve(detallesFormateados);
        });
    });
};

const contarFilasAnimal = async () => {
    return new Promise((resolve, reject) => {
        console.log("Ejecutando consulta SQL para contar filas...");
        db.query('SELECT COUNT(*) AS total FROM animal WHERE especie = "gato"', (error, resultados) => {
            if (error) {
                console.error('Error al contar filas en la tabla animal:', error);
                return reject(error);
            }
            const totalFilas = resultados[0].total;
            resolve(totalFilas);
        });
    });
};
const obtenerNombresAnimales = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT nombre FROM animal WHERE especie = "gato"', (error, resultados) => {
            if (error) {
                console.error('Error al obtener nombres de animales:', error);
                return reject(error);
            }

            if (resultados.length === 0) {
                return resolve([]);
            }

            const nombresAnimales = resultados.map(animal => animal.nombre);
            console.log(nombresAnimales);
            resolve(nombresAnimales);
        });
    });
};

export { obtenerDetallesAnimalPorNombre, contarFilasAnimal,obtenerNombresAnimales };