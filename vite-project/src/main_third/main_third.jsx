import './main_third.css'

import Square from '../assets/square_black.png'

import Stuff from '../assets/stuff.png'
import Activity from '../assets/activity.png'
import Auction from '../assets/auction.png'
import Invest from '../assets/invest.png'
import Contact from '../assets/contact.png'

import LineTop from '../assets/linetop.png'
import LineBot from '../assets/linebot.png'

export default function MainThree(){
    return(
        <>
            <main className='main_page_three'>
                <section className='sect_page_three'>
                    <div className='sect_page_three_top'>
                        <div className='main_page_three_top_space'>

                        </div>
                        <div className='main_page_three_top_forward'>
                            <a href="">Главная</a>
                            <img src={Square} alt="" />
                            <a href="">Персонал</a>
                            <img src={Square} alt="" />
                            <a href="">Подготовка и обучение персонала</a>
                        </div>
                    </div>
                    <div className='main_page_three_bot'>
                        <div className='main_page_three_bot_buttons'>
                            <button type="button" className='main_page_three_button_active'><p>Персонал</p><img src={Stuff} alt="" /></button>
                            <button type="button"><p>Деятельность</p><img src={Activity} alt="" /></button>
                            <button type="button"><p>Акционерам</p><img src={Auction} alt="" /></button>
                            <button type="button"><p>Инвесторам</p><img src={Invest} alt="" /></button>
                            <button type="button"><p>Контакты</p><img src={Contact} alt="" /></button>
                        </div>
                        <div className="main_page_three_bot_main">
                            <div className='main_page_three_bot_main_numbers'>
                                <div className='main_page_three_bot_main_number_box'>
                                    <p>1</p>
                                </div>
                                <div className='main_page_three_bot_main_number_line'>
                                    <img src={LineTop} alt="" />
                                </div>
                                <div className='main_page_three_bot_main_number_box'>
                                    <p>2</p>
                                </div>
                                <div className='main_page_three_bot_main_number_line'>
                                    <img src={LineBot} alt="" />
                                </div>
                                <div className='main_page_three_bot_main_number_box'>
                                    <p>3</p>
                                </div>
                            </div>
                            <div className='main_page_three_bot_main_texts'>
                                <div className='main_page_three_bot_main_text_top'>
                                    <p>Nisl justo etiam gravida platea iaculis pellentesque quis malesuada. Quam.</p>
                                    <p>Tellus nisl ut auctor odio integer. Duis gravida magnis turpis proin duis pharetra arcu velit elit. Adipiscing felis phasellus commodo ac ridiculus. Egestas dis massa nisi tempor pellentesque enim. Nec fames ut enim feugiat morbi. Accumsan suspendisse a congue morbi nisi posuere ante condimentum lacus. Arcu orci imperdiet tortor vel hendrerit sollicitudin at fermentum curabitur.</p>
                                </div>
                                <div className='main_page_three_bot_main_text_mid'>
                                    <p>Euismod sed adipiscing ut iaculis sed lectus ac eu. Viverra faucibus sed mi.</p>
                                    <p>Purus neque risus semper eu. Hac eu nulla tincidunt ullamcorper vitae tincidunt sed vulputate. Amet ac dapibus nunc neque faucibus urna velit sed sed. Purus enim viverra tortor maecenas. Diam rhoncus sed eu turpis sed in laoreet lobortis ac. Dui pellentesque congue ut molestie amet turpis vitae tellus vitae. Nec morbi eget lacus dui urna. Nibh ac arcu.</p>
                                </div>
                                <div className='main_page_three_bot_main_text_bot'>
                                    <p>Non neque pellentesque augue amet pulvinar. Aenean cras vivamus molestie.</p>
                                    <p>Sit leo diam vitae scelerisque senectus bibendum urna. Sed amet fusce fermentum sed lacus aliquet nisl. Amet enim mauris tempor justo id odio pharetra. Sapien laoreet arcu et molestie et. Eleifend lectus nulla sit viverra tempus bibendum purus tristique diam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </main>
        </>
    )
}