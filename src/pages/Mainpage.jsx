
import React, {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenCollection from '../components/MenCollection'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import {Gents,Ladies} from '../data'
import LadiesCollecetion from '../components/LadiesCollecetion'

const Mainpage = () => {

    const[gentsFashion, setGentsFashion] = useState(Gents)

    const[ladiesFashion, setLadiesFashion] = useState(Ladies)

  return (
    <div>
        <Header />
        <Banner />
      
        <MenCollection gentsFashion = {gentsFashion} />
        <LadiesCollecetion ladiesFashion ={ladiesFashion} />
        {/* <Navbar /> */}
        <Footer />
        
    </div>
  )
}

export default Mainpage