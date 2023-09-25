import React, { useEffect, useState } from "react";

function ListarMascotas() {
  const [listadoMascotas, setListadoMascotas] = useState([]);
  const [banderaCarga, setBanderaCarga] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const responses = await Promise.all([
          fetch("https://api.thecatapi.com/v1/images/search"),
          fetch("https://api.thedogapi.com/v1/images/search"),
        ]);

        const data = await Promise.all(responses.map((response) => response.json()));
        // Combina los resultados de gatos y perros en una sola lista
        const mascotas = [...data[0], ...data[1]];
        setListadoMascotas(mascotas);
        setBanderaCarga(false);
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {banderaCarga ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {listadoMascotas.map((mascota, index) => (
            <div key={index}>
              <img
                src={mascota.url}
                alt={mascota.breeds ? mascota.breeds[0].name : "Mascota"}
                style={{ maxWidth: "100%" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListarMascotas;