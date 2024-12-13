import React from 'react'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Footer from './components/Footer'
import Usercontext from './context/Usercontext'

const App = () => {
    const logo = "Context api"
  return (
    <div>
        <Usercontext.Provider value={logo}>
        <Header />
        <Herosection />
        <Footer  />
        </Usercontext.Provider>
    </div>
  )
}

export default App