import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// import Header from './header/header.jsx'
// import Main from './main/main.jsx'
// import Footer from './footer/footer.jsx'

import Nav from './nav/nav.jsx'
import MainTwo from './main_second/main.jsx'

export default function Main_Two(){
    return(
        <>
            <Nav/>
            <MainTwo/>
        </>
    )
}
