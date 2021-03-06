import React from 'react';
import {
  BLog, Features, Footer, Header, Possibility, WhatGPT3
} from './containers';
import {
  Article, Brand, Cta, Feature, Navbar
} from './components'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <BLog />
        <Footer />
      </div>
    </div>
  )
}
export default App
