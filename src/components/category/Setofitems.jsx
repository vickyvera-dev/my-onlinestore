import React from 'react'
import Categorynav from './Categorynav'
import Classofitems from './Classofitems'
import Emailsectn from '../home/Emailsectn'
import Infosec from '../home/Infosec'
import Footer from '../home/Footer'

 function Setofitems() {
  return (
    <div><Categorynav/>
    <Classofitems/>
    <Emailsectn/>
    <Infosec/>
    <Footer/>
    </div>
  )
}


export default Setofitems