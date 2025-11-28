import React from 'react'

import OurHistory from './OurHistory'
import Ourdetails from './Ourdetails'
import Testimonials from './Testimonials'
import Ourgoal from './Ourgoal'
import Ourvideo from './ourvideo'
import Emailsectn from '../home/Emailsectn'
import Infosec from '../home/Infosec'
import Footer from '../home/Footer'
import Navbar from '../home/Navbar'




function Abouts() {
  return (
    <div><Navbar/>
    <OurHistory/>
    <Ourgoal/>    
    <Ourvideo/>
    <Ourdetails/>
    <Testimonials/>
    <Emailsectn/>
    <Infosec/>
    <Footer/>
    </div>
  )
}


export default Abouts