import { fetchFunc } from "../api/fetch";

const URL = "https://pokeapi.co/api/v2/pokemon/";

const numeroRandom = () => {
  return Math.floor(Math.random() * 151) + 1;
};

const obtenerPokemonesFalse = async (idTrue) => {
  let continuar = true;
  let arrayId = [];

  while (continuar) {
    let responseId = await fetchFunc(`${URL}${numeroRandom(151)}`);
    //Validar que el id no se repita
    if (arrayId.includes(responseId.data.id)) {
      console.log("id ya establecido");
      return;
    }
    //Validar que la opcion correcta no se repita
    if (idTrue == responseId) {
      console.log("id igual al correcto");
      return;
    }
    //Limitar el ingreso de id a 3
    if (arrayId.length == 3) {
      break;
    }
    //Agregar el id
    //arrayId.push(responseId.data.id);
    arrayId.push(
      {
        id: responseId.data.id,
        name: responseId.data.name
      }
    )
  }
  return arrayId;
};

export const cargarPokemones = async () => {
  const pokemonTrue = {
    img: "",
    id: 0,
    name : ""
  };

  const response = await fetchFunc(`${URL}${numeroRandom(151)}`); //Consultar el primer pokemon

  if (response.error) {
    console.log(response.error);
    return {
      error: "Error al cargar los datos",
    };
  }
  //Asignacion de datos para el pokemon a adivinar
  pokemonTrue.img =
    response.data.sprites.other["official-artwork"].front_default;
  pokemonTrue.id = response.data.id;
  pokemonTrue.name = response.data.name

  const arrayId = await obtenerPokemonesFalse(pokemonTrue.id);
  arrayId.push(pokemonTrue); //Agregar el ultimo id al array con los id falsos
  arrayId.sort(() => Math.random() - 0.5); //Desordenamos los id

  return { pokemonTrue, arrayId }; //Retornar datos
};
