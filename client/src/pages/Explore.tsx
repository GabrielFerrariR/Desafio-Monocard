import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getRandomPokemon } from "../services/pokeApiRequests";
import Container from "@mui/material/Container";
import PokeCard from "../components/PokeCard";
import CaptureModal from "../components/CaptureModal";

function Explore() {
  const [pokemon, setPokemon] = useState({
    id: 0,
    name:'',
    image: '',
    types: [{name: '', url: ''}],
  })
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData =async () => {
      const  data  = await getRandomPokemon();
      setPokemon(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const changePokemon = async () => {
    const newPokemon = await getRandomPokemon()
    setPokemon(newPokemon);
  }
  return (
    <Container>
      <Header />
      { !isLoading && <PokeCard { ...pokemon } /> }
      <CaptureModal randomize={ changePokemon } pokemonId={pokemon.id}/>
    </Container>
  );
}

export default Explore;
