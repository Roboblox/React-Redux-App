import axios from "axios";

export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAIL = "FETCH_POKEMON_FAIL";

export const fetchPokemon = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POKEMON_START });
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        dispatch({
          type: FETCH_POKEMON_SUCCESS,
          payload: response.data.results,
        });
        console.log(response.data.results);
      })
      .catch((error) => {
        dispatch({ type: FETCH_POKEMON_FAIL, payload: error.message });
      });
  };
};
