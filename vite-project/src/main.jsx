import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
// import Header from './header/header.jsx'
// import Main from './main/main.jsx'
// import Footer from './footer/footer.jsx'

import Nav from './nav/nav.jsx'
import Header from './header/header.jsx'
import Main from './main/main.jsx'
import Footer from './footer/footer.jsx'
import Main_One from './main_one.jsx'
import Main_Two from './main_two.jsx'
import Main_Three from './main_three.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Main_One/>}/>
        <Route path='/main_two' element={<Main_Two/>}/>
        <Route path='/main_three' element={<Main_Three/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  </StrictMode>,
)
