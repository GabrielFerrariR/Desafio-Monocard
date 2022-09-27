import { ThemeProvider } from '@emotion/react';
import React, { useState }  from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Explore from './pages/Explore';
import MyPokemons from './pages/MyPokemons';
import theme from './theme';
function App() {

  return (
      <ThemeProvider theme={theme}>
        <Routes>
            <Route path='/' element={ <Explore /> } />
            <Route path='/mypokemons' element={ <MyPokemons /> }/>
        </Routes> 
      </ThemeProvider>
  )
}

export default App
