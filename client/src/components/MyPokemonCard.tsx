import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Pokemon } from '../interfaces/Pokemon';
import { requestDelete } from '../services/apiRequests';
import { getPokemonById } from '../services/pokeApiRequests';
import Modal from '@mui/material/Modal';

interface IProps {
  idMongo: string
  name: string,
  pokemonId: string,
}

const boxSx = {
  position: 'absolute',
  border: '10px solid #000',
  width: 400,
  height: 400,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  bgcolor: '#999999',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: 'inset -10px 10px 0 10px #333333',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

function MyPokemonCard({name, pokemonId, idMongo}: IProps) {
  const [pokemonInfo, setPokemonInfo] = useState({} as Pokemon);
  const [wasRemoved, setWasRemoved] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonById(pokemonId);
      setPokemonInfo(data);
    }
    fetchData();
  },[])

  async function remove() {
    try {
      await requestDelete('/pokemons/', idMongo);
      setWasRemoved(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (wasRemoved) return <></>;

  return (
    <Box margin={2} onClick={ handleOpen }>
      <img src={ pokemonInfo.image } alt={ pokemonInfo.name } />
      <h3>{ name }</h3>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
        <Box sx={boxSx} >
          <img src={ pokemonInfo.image } alt={ pokemonInfo.name } />
          <h3>{ name }</h3>
          <h4>{`(${pokemonInfo.name})`}</h4>
          <button className="nes-btn is-success" onClick={ remove }>Libertar</button>
        </Box> 
      </Modal>
    </Box>
  )
}

export default MyPokemonCard;