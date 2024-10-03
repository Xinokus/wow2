import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import Nav from './nav/nav.jsx'
import MainThree from './main_third/main_third.jsx'

export default function Main_Three(){
    return(
        <>
            <Nav/>
            <MainThree/>
        </>
    )
}