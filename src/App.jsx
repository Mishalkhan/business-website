import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import Giftcard from './pages/Giftcard'
import BlogDetail from './pages/BlogDetail'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/works' element={<HowItWorks/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/:id' element={<BlogDetail/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/gift' element={<Giftcard/>}></Route>
      </Routes>
    </div>
  )
}

export default App
