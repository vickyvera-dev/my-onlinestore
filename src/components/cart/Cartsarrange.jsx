import React from 'react'
import Navbar from '../home/Navbar'
import CartsSection from './CartsSection'
import Emailsectn from '../home/Emailsectn'
import Infosec from '../home/Infosec'
import Footer from '../home/Footer'

 function Carts() {
  return (
    <div>
      <Navbar/>
      <CartsSection/>
      <Emailsectn/>
      <Infosec/>
      <Footer/>
    </div>
  )
}
export default Carts