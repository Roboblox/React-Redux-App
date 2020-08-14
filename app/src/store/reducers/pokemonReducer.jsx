import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAIL,
} from "../actions";

const initialState = {
  pokemon: [],
  isLoading: false,
  error: "",
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemon: action.payload,
      };
    case FETCH_POKEMON_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
