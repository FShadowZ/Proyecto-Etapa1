import { db } from "../db.js";

const obtenerDetallesAnimalPorNombre = async (nombre) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT nombre, raza, genero FROM animal WHERE nombre = ?', [nombre], (error, resultados) => {
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
        db.query('SELECT COUNT(*) AS total FROM animal', (error, resultados) => {
            if (error) {
                console.error('Error al contar filas en la tabla animal:', error);
                return reject(error);
            }
            const totalFilas = resultados[0].total;
            resolve(totalFilas);
        });
    });
};

export { obtenerDetallesAnimalPorNombre, contarFilasAnimal };