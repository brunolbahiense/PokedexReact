import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Pokemons from './components/Pokemons'



ReactDOM.render(
  <div>
    <Header />
    <Pokemons />
    <Footer />
  </div>,
  document.getElementById('root')
)

