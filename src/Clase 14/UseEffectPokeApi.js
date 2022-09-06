import { useState } from "react";
import { useEffect } from "react";

export const POKEMON_TYPE_COLORS = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#FA6C6C",
  water: "#6890F0",
  grass: "#48CFB2",
  electric: "#FFCE4B",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

const PokeApi = () => {
  const [pokemon, setPokemon] = useState({ name: "", imagen: "", color: " " });
  const [numero, setNumero] = useState(1);

  const randomNumber = () => {
    setNumero(Math.floor(Math.random() * 100 + 1));
  };

  const pokeApi = `https://pokeapi.co/api/v2/pokemon/${numero}`;

  useEffect(() => {
    fetch(pokeApi)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon({
          name: data.species.name,
          imagen: data.sprites.front_default,
          color: POKEMON_TYPE_COLORS[data.types[0].type.name],
        });
      });
  }, [numero]);
	
  return (
    <div style={{ background: pokemon.color }}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imagen} alt="" />
      <button onClick={randomNumber}>Random</button>
    </div>
  );
};

export default PokeApi;
