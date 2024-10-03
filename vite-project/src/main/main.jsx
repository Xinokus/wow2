import './main.css'
import Machine from '../assets/machine.png'
import Material from '../assets/material.png'

import Sect_One_Link from './sect_one.jsx'
import { links } from './sect_one.js'

import Sect_Four_Main from './sect_four_main.jsx'
import { images } from './sect_four_main.js'
import { titles } from './sect_four_main.js'
import { descs } from './sect_four_main.js'

function Main(){
    function Sect_Four_Button(){
        let sect_four_mainComp = document.getElementById('sect_four_main')
        let sect_four = document.getElementById('sect_four')
        let sect_four_row1 = document.getElementById('sect_four_add_row1')
        let sect_four_row2 = document.getElementById('sect_four_add_row2')

        sect_four_row1.className = 'sect_four_main_row sect_four_display'
        sect_four_row2.className = 'sect_four_main_row sect_four_display'
        sect_four_mainComp.className = 'sect_four_main sect_four_buttonPressed'
        sect_four.className = 'sect_four sect_four_expand'
    }

    return(
        <>
            <main>
                <section className="sect_one">
                    <div className="sect_one_inside">
                        <div className="sect_one_inside_top">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>О компании</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <Sect_One_Link linkText = {links[0].link1}/>
                                        <Sect_One_Link linkText = {links[0].link2}/>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>01</p>
                            </div>
                        </div>
                        <div className="sect_one_inside_bot">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Акционеру и инвестору</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <Sect_One_Link linkText = {links[3].link1}/>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>04</p>
                            </div>
                        </div>
                    </div>
                    <div className="sect_one_inside">
                        <div className="sect_one_inside_top">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Деятельность</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <Sect_One_Link linkText = {links[1].link1}/>
                                        <Sect_One_Link linkText = {links[1].link2}/>
                                        <Sect_One_Link linkText = {links[1].link3}/>
                                        <Sect_One_Link linkText = {links[1].link4}/>
                                        <Sect_One_Link linkText = {links[1].link5}/>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>02</p>
                            </div>
                        </div>
                        <div className="sect_one_inside_bot">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Пресс центр</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <Sect_One_Link linkText = {links[4].link1}/>
                                        <Sect_One_Link linkText = {links[4].link2}/>
                                        <Sect_One_Link linkText = {links[4].link3}/>
                                        <Sect_One_Link linkText = {links[4].link4}/>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>05</p>
                            </div>
                        </div>
                    </div>
                    <div className="sect_one_inside">
                        <div className="sect_one_inside_top">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Персонал</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <Sect_One_Link linkText = {links[2].link1}/>
                                        <Sect_One_Link linkText = {links[2].link2}/>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>03</p>
                            </div>
                        </div>
                        <div className="sect_one_inside_bot">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Контакты</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <Sect_One_Link linkText = {links[5].link1}/>
                                        <Sect_One_Link linkText = {links[5].link2}/>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>06</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sect_two'>
                    <div className='sect_two_left'>
                        <div className='sect_two_left_title'>
                            <p>Lectus nisi sed id dictum. Adipiscing</p>
                        </div>
                        <div className='sect_two_left_desc'>
                            <p>Commodo faucibus justo turpis id lectus ac fringilla scelerisque accumsan. Fames lectus nibh non ultrices id ut sed praesent in. Ac tristique nunc pellentesque odio. Blandit scelerisque dolor molestie egestas nunc nunc sit. Fermentum at pharetra odio risus malesuada diam laoreet eleifend vulputate. Enim molestie lorem nec ipsum nunc sit commodo non. Euismod rhoncus ut amet diam porta nisi tempus. Posuere suspendisse suscipit dolor enim. A lectus convallis quis elementum. Vitae pretium nunc venenatis felis.
                            <br/> <br /> Urna orci blandit imperdiet feugiat scelerisque dui at velit ac. Sollicitudin placerat in viverra amet in praesent vestibulum. Suscipit interdum odio pellentesque diam et.</p>
                        </div>
                        <div className='sect_two_left_buttons'>
                            <button type="button"><p>aaaddd@test.ru</p></button>
                            <button type="button"><p>dvs@test.ru</p></button>
                        </div>
                    </div>
                    <div className='sect_two_right'>

                    </div>
                </section>
                <section className='sect_three'>
                    <div className='sect_three_title'>
                        <p>Vel pretium pellentesque enim morbi</p>
                    </div>
                    <div className='sect_three_desc'>
                        <p>Et aliquam eu feugiat vel egestas semper elementum. Bibendum eget massa .</p>
                    </div>
                    <div className='sect_three_things'>
                        <div className='sect_three_things_left'>
                            <img src={Machine} alt="" />
                            <p>Enim ac sagittis tempus iaculis blandit. Tellus.</p>
                        </div>
                        <div className='sect_three_things_right'>
                            <img src={Material} alt="" />
                            <p>Ultricies erat sagittis est dictum leo est nibh a.</p>
                        </div>
                    </div>
                </section>
                <section className='sect_four' id='sect_four'>
                    <div className='sect_four_title'>
                        <p>Новости компании</p>
                    </div>
                    <div className='sect_four_main' id='sect_four_main'>
                        <div className='sect_four_main_row'>
                            <Sect_Four_Main imageType = {images[0].imageLeft} titleType = {titles[0].title1} descType = {descs[0].desc1}/>
                            <Sect_Four_Main imageType = {images[0].imageMiddle} titleType = {titles[0].title2} descType = {descs[0].desc2}/>
                            <Sect_Four_Main imageType = {images[0].imageRight} titleType = {titles[0].title3} descType = {descs[0].desc3}/>
                        </div>
                        <div className='sect_four_main_row' id='sect_four_add_row1'>
                            <Sect_Four_Main imageType = {images[0].imageLeft} titleType = {titles[0].title1} descType = {descs[0].desc1}/>
                            <Sect_Four_Main imageType = {images[0].imageMiddle} titleType = {titles[0].title2} descType = {descs[0].desc2}/>
                            <Sect_Four_Main imageType = {images[0].imageRight} titleType = {titles[0].title3} descType = {descs[0].desc3}/>
                        </div>
                        <div className='sect_four_main_row' id='sect_four_add_row2'>
                            <Sect_Four_Main imageType = {images[0].imageLeft} titleType = {titles[0].title1} descType = {descs[0].desc1}/>
                            <Sect_Four_Main imageType = {images[0].imageMiddle} titleType = {titles[0].title2} descType = {descs[0].desc2}/>
                            <Sect_Four_Main imageType = {images[0].imageRight} titleType = {titles[0].title3} descType = {descs[0].desc3}/>
                        </div>
                    </div>
                    <div className='sect_four_button'>
                        <button type="button" onClick={Sect_Four_Button}><p>Все новости</p></button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main