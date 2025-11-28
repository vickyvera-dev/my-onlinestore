import React from 'react'
import Navbar from '../home/Navbar'
import ProductPage from './ProductPage'
import Emailsectn from '../home/Emailsectn'
import Infosec from '../home/Infosec'
import Footer from '../home/Footer'

 function Productview() {
  return (
    <div>
      <Navbar/>
      <ProductPage/>
      <Emailsectn/>
      <Infosec/>
      <Footer/>
    </div>
  )
}
export default Productview