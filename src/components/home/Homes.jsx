import React from 'react'
import Navbar from './Navbar'
import Serviceweoffer from './Serviceweoffer'
import Fashionsection from './Fashionsection'
import Productdisplay from './Productdisplay'
import Hotdeals from './Hotdeals'
import AvailableProducts from './AvailableProducts'
import Emailsectn from './Emailsectn'
import Footer from './Footer'
import Infosec from './Infosec'


function Homes() {
  return (
    <div>
      <Navbar/>
      <Fashionsection/>
      <Serviceweoffer/>
      <Productdisplay/>
      <Hotdeals/>
      <AvailableProducts/>
      <Emailsectn/>
      <Infosec/>
      <Footer/>
    </div>
  )
}

export default Homes