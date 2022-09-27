import React from "react";
// import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import Link from '@mui/material/Link';
import  Stack  from "@mui/material/Stack";

function Header() {
  return(
    <AppBar sx={{ height: '10%' }}>
      <Stack direction='row' justifyContent="center" maxWidth={400} margin="auto">
        <Link color="white" sx={
          {
            ":hover": { color: '#FFDE00'}
          }
        }  href="/" underline="hover" margin={2}>Explorar</Link>
        <Link href="/mypokemons" sx={
          {
            ":hover": { color: '#FFDE00'}
          }
        } color="white" underline="hover" margin={2}> Meus Pokémons</Link>
      </Stack>
    </AppBar>
  )
}

export default Header;
