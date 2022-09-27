import React, { useState } from "react";
import Header from "../components/Header";
import { PokeMongo } from "../interfaces/Pokemon";
import { requestData } from "../services/apiRequests";
import MyPokemonCard from "../components/MyPokemonCard";
import { Stack } from "@mui/material";

function MyPokemons() {
  const [myPokemons, setMyPokemons] = useState([] as PokeMongo[]);
  React.useEffect(() => {
    async function fetchData() {
      const data = await requestData('/pokemons') as PokeMongo[];
      setMyPokemons(data)
    }
    fetchData();
  }, [])
  return (
    <section>
      <Header />
      <Stack direction="row" flexWrap="wrap" maxWidth={ 800 }>
      { myPokemons
        .map((e) => ( 
          <MyPokemonCard
            key={ e._id }
            idMongo={ e._id }
            pokemonId={ e.pokemonId.toString() }
            name={ e.name }/> 
        )) 
      }
      </Stack>
    </section>  
  );
}

export default MyPokemons;
