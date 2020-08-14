import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./pokemon.css";

import { fetchPokemon } from "../store";

const Pokemon = (props) => {
  useEffect(() => {
    // call an action creator that will be in charge of fetching data
    props.fetchPokemon();
  }, []);

  return (
    <div>
      <nav>
        <h1 id="title">Play Pokemon 🚀 🪐 </h1>
      </nav>
      <section>
        {props.isLoading ? <h4>Loading Pokemon now...</h4> : null}
        {props.error ? (
          <p style={{ color: "red" }}>
            Uh oh... something happened 😟 {props.error}
          </p>
        ) : null}
        {props.pokemon.length > 0 ? (
          <div className="box">
            {props.pokemon.map((pokemon) => (
              <h2 key={pokemon.name}>{pokemon.name}</h2>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchPokemon })(Pokemon);
