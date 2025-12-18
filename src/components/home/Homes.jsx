import React from 'react'
import Navbar from './Navbar'
import Serviceweoffer from './Serviceweoffer'
import Fashionsection from './Fashionsection'

import Hotdeals from './Hotdeals'
import AvailableProducts from './AvailableProducts'
import Emailsectn from './Emailsectn'
import Footer from './Footer'
import Infosec from './Infosec'
import CategorySlider from './CategorySlide'


function Homes() {
  return (
    <div>
      <Navbar/>
      <Fashionsection/>
      <Serviceweoffer/>
     <CategorySlider/>
      <Hotdeals/>
      <AvailableProducts/>
      <Emailsectn/>
      <Infosec/>
      <Footer/>
    </div>
  )
}

export default Homes