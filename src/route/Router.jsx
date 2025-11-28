import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Category from '../pages/Category'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'

import ProductDetails from '../pages/ProductDetails'


 function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/contact" element={<Contact/>}/>
     
      <Route path="productdetails" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default Router