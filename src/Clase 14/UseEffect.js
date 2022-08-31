import { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const urlDog = "https://dog.ceo/api/breeds/image/random";
  const urlCat = "https://api.thecatapi.com/v1/images/search";

  const [imagen, setImagen] = useState("");
  const [cambio, setCambio] = useState("");

  useEffect(() => {
    fetch(urlDog)
      .then((response) => response.json())
      .then((data) => setImagen(data.message));
  }, [cambio]);

  //  Con dog: data.message
  // con Cat data[0].url

  return (
    <div>
      <img
        src={imagen}
        alt="Una Imagen de un perrito"
        style={{ width: 300, height: 200 }}
      />
      <button onClick={() => setCambio(!cambio)}> Nueva imagen </button>
    </div>
  );
};

export default UseEffect;
