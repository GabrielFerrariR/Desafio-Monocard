import React from "react";
// import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import Link from '@mui/material/Link';
import  Box  from "@mui/material/Box";

function Header() {
  return(
    <AppBar sx={{ height: '7%' }}>
      <Box sx={{ display: { sm: 'block' }, p: 2 }}>
        <Link color="white" href="/" underline="none" margin="10">Explorar</Link>
        <Link href="/mypokemons" color="white" underline="none"> Meus Pokémons</Link>
      </Box>
    </AppBar>
  )
}

export default Header;
