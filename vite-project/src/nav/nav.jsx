import './nav.css'
import { Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import Search from '../assets/search.png'
import Main_Two from '../main_two.jsx'

function Nav() {
  return (
    <>
      <nav>
        <div className='nav_top'>
          <div className='nav_logo'>
            <img src={Logo} alt="" />
          </div>
          <div className='nav_search'>
            <label htmlFor="search"><p>Быстрый поиск по сайту</p></label>
            <input type="text" name="" id="search" />
            <button type="button"><img src={Search} alt="" /></button>
          </div>
          <div className='nav_language'>
            <button type="button"><p>Ru</p></button>
            <button type="button"><p>En</p></button>
          </div>
        </div>
        <div className='nav_bot'>
          <Link to='/' className="nav_link">О компании</Link>
          <Link to='/main_two' className="nav_link">Деятельность</Link>
          <Link to='/main_three' className="nav_link">Персонал</Link>
          <Link href="" className="nav_link">Клиенту</Link>
          <Link href="" className="nav_link">Акционеру и инвестору</Link>
          <Link href="" className="nav_link">Пресс-центр</Link>
          <Link href="" className="nav_link">Торги</Link>
          <Link href="" className="nav_link">Контакты</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
