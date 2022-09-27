import React from "react";
import Box from '@mui/material/Box';
import { Pokemon } from "../interfaces/Pokemon";
import Typography  from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import { colours, plainsBg} from "../assets";



function PokeCard(props: Pokemon) {
  function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return(
    <Box 
      display="flex"
      margin={2}
      flexDirection="column"
      alignItems="center"
    >
      <Box
        sx={{
          backgroundImage: plainsBg,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          justifyContent: "flex-end",
          alignItems: "center"}} 
        width="300px"
        height="220px"
        display="flex"
        flexDirection="column"
      >
        <img src={props.image} alt="pokemon" width="100px" />
      </Box>
        <Typography margin={2} variant="h6" position="absolute" className="pokemon-name">
          { capitalizeFirstLetter(props.name) }
        </Typography>
        <Stack direction="row">
          { props.types.map((type) => {
            return (
              <Chip key={ type.name } sx={ {
                color: 'white', 
                backgroundColor: colours[type.name],
                margin: 1,
              } } label={ type.name } />)
          })}
        </Stack>
    </Box> 
  );
}

export default PokeCard;