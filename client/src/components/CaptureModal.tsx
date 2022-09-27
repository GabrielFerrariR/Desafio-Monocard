import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import './pokeBall.css'
import { requestCreate } from '../services/apiRequests';

interface ModalProps {
  randomize(): void,
  pokemonId: number,
}

export default function CaptureModal(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const [name, setNome] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function addToList() {
    await requestCreate('/pokemons', {
      name,
      pokemonId: props.pokemonId,
    });
  }

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <button type="button" className="nes-btn is-success" onClick={ props.randomize }>Explorar</button>
        <button type="button" className="nes-btn is-error" onClick={ handleOpen } >Capturar</button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box>
        <h1 className="capture-text">Capturado!!</h1>
        <div className="center-on-page">
          <div className="pokeball">
            <div className="pokeball__button"></div>
          </div>
        </div>
        <div className="nes-field name-box">
          <label htmlFor="name_field name-label" style={ { color:'#fff'} }>Nomeie seu pokémon</label>
          <Stack direction="row" spacing={2}>
            <input
              type="text"
              id="name_field"
              className="nes-input" 
              width="50%"
              value={ name }
              onChange={({ target }) => setNome(target.value)}
            />
            <button type="button" className="nes-btn is-success" onClick={ addToList }>Adicionar</button>
          </Stack>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
