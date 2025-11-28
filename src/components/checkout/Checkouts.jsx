import React from 'react'

import Emailsectn from '../home/Emailsectn'
import Infosec from '../home/Infosec'
import Footer from '../home/Footer'
import Checkoutsection from './Checkoutsection'
import Navbar from '../home/Navbar'

 function Checkouts() {
  return (
    <div>
      <Navbar/>
      <Checkoutsection/>
      <Emailsectn/>
    <Infosec/>
    <Footer/>
  
    </div>
  )
}
export default Checkouts