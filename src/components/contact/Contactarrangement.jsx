import React from 'react'
import Contactaddress from './Contactaddress'
import Contactmap from './Contactmap'
import Emailsectn from '../home/Emailsectn'
import Infosec from '../home/Infosec'
import Footer from '../home/Footer'
import Navbar from '../home/Navbar'

function Contactarrangement() {
  return (
    <div>
      <Navbar/>
      <Contactaddress/>
      <Contactmap/>
      <Emailsectn/>
      <Infosec/>
      <Footer/>
    </div>
  )
}
export default Contactarrangement