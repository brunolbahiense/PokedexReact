import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Pokemons from './components/Pokemons'



ReactDOM.render(
  <div>
    <Header />
    <Pokemons />
    <Footer />
  </div>,
  document.getElementById('root')
)

