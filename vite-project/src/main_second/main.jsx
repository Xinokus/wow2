import './main.css'
import Square from '../assets/square_black.png'

import Stuff from '../assets/stuff.png'
import Activity from '../assets/activity.png'
import Auction from '../assets/auction.png'
import Invest from '../assets/invest.png'
import Contact from '../assets/contact.png'

import Cook from '../assets/cook.png'
import TopIMG from '../assets/topimg.png'
import BotIMG from '../assets/botimg.png'

export default function MainTwo(){
    return(
        <>
            <main className='main_page_two'>
                <section className='sect_page_two'>
                    <div className='sect_page_two_top'>
                        <div className='main_page_two_top_space'>

                        </div>
                        <div className='main_page_two_top_forward'>
                            <a href="">Главная</a>
                            <img src={Square} alt="" />
                            <a href="">Персонал</a>
                            <img src={Square} alt="" />
                            <a href="">Подготовка и обучение персонала</a>
                        </div>
                    </div>
                    <div className='main_page_two_bot'>
                        <div className='main_page_two_bot_buttons'>
                            <button type="button" className='main_page_two_button_active'><p>Персонал</p><img src={Stuff} alt="" /></button>
                            <button type="button"><p>Деятельность</p><img src={Activity} alt="" /></button>
                            <button type="button"><p>Акционерам</p><img src={Auction} alt="" /></button>
                            <button type="button"><p>Инвесторам</p><img src={Invest} alt="" /></button>
                            <button type="button"><p>Контакты</p><img src={Contact} alt="" /></button>
                        </div>
                        <div className='main_page_two_bot_main'>
                            <div className='main_page_two_bot_main_top'>
                                <div className='main_page_two_bot_main_top_imgtext'>
                                    <div className='main_page_two_bot_main_top_img'>
                                        <img src={Cook} alt="" />
                                    </div>
                                    <div className='main_page_two_bot_main_text'>
                                        <p>Sit nisl nunc consequat magna consequat</p>
                                        <p>A amet lectus lorem nisi aenean enim consequat adipiscing. Donec cursus scelerisque at aliquet iaculis mollis mi morbi enim. Sed et consectetur nec tempor nam auctor in at. Purus varius feugiat elit sed enim nisl sit a fermentum. Amet suscipit quam et adipiscing faucibus mollis non. Pellentesque dui in cursus quam diam eget. Odio nunc facilisis orci feugiat lorem. Orci malesuada et diam feugiat ornare neque nulla pellentesque venenatis.</p>
                                    </div>
                                </div>
                                <div className='main_page_two_bot_main_mid_mid'>
                                    <p>Donec nisl non tortor semper. Fusce neque turpis nibh vestibulum eu morbi tristique curabitur. Laoreet volutpat sodales nibh tincidunt urna. Cras proin nibh.</p>
                                </div>
                                <div className='main_page_two_bot_main_bot_bot'>
                                    <div className='main_page_two_bot_main_bot_insta'>
                                        <div className='main_page_two_bot_main_bot_insta_top'>
                                            <p>1</p>
                                        </div>
                                        <div className='main_page_two_bot_main_bot_insta_bot'>
                                            <p>Aliquam dolor facilisi tortor amet interdum tristique suspendisse magnis.</p>
                                        </div>
                                    </div>
                                    <div className='main_page_two_bot_main_bot_insta'>
                                        <div className='main_page_two_bot_main_bot_insta_top'>
                                            <p>2</p>
                                        </div>
                                        <div className='main_page_two_bot_main_bot_insta_bot'>
                                            <p>Aliquam dolor facilisi tortor amet interdum tristique suspendisse magnis.</p>
                                        </div>
                                    </div>
                                    <div className='main_page_two_bot_main_bot_insta'>
                                        <div className='main_page_two_bot_main_bot_insta_top'>
                                            <p>3</p>
                                        </div>
                                        <div className='main_page_two_bot_main_bot_insta_bot'>
                                            <p>Aliquam dolor facilisi tortor amet interdum tristique suspendisse magnis.</p>
                                        </div>
                                    </div>
                                    <div className='main_page_two_bot_main_bot_insta'>
                                        <div className='main_page_two_bot_main_bot_insta_top'>
                                            <p>4</p>
                                        </div>
                                        <div className='main_page_two_bot_main_bot_insta_bot'>
                                            <p>Aliquam dolor facilisi tortor amet interdum tristique suspendisse magnis.</p>
                                        </div>
                                    </div>
                                    <div className='main_page_two_bot_main_bot_insta'>
                                        <div className='main_page_two_bot_main_bot_insta_top'>
                                            <p>5</p>
                                        </div>
                                        <div className='main_page_two_bot_main_bot_insta_bot'>
                                            <p>Aliquam dolor facilisi tortor amet interdum tristique suspendisse magnis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='main_page_two_bot_main_mid'>
                                <div className='main_page_two_bot_main_mid_left'>
                                    <p>Hendrerit fringilla aliquet lacus urna faucibus cursus bibendum cras. Ultrices eu diam elementum tortor cursus. Ipsum rutrum id accumsan porttitor. Accumsan aliquet sed ut tortor pretium quis vitae dui. Scelerisque sit quam in viverra sit blandit nisi augue ut. Posuere at enim eget semper commodo.
                                    <br /><br /> Aenean varius porttitor risus sed morbi. A nisl etiam tincidunt aliquam dui leo tellus ut. Sapien turpis accumsan ornare cursus diam nisl. Enim sapien non mauris ultricies. Netus proin a aliquet placerat et. Risus sapien in pharetra faucibus. Et nunc morbi eu sollicitudin facilisi.</p>
                                </div>
                                <div className='main_page_two_bot_main_mid_right'>
                                    <img src={TopIMG} alt="" />
                                </div>
                            </div>
                            <div className='main_page_two_bot_main_bot'>
                                <div className='main_page_two_bot_main_bot_left'>
                                    <img src={BotIMG} alt="" />
                                </div>
                                <div className='main_page_two_bot_main_bot_right'>
                                    <p>Amet ac justo sem quisque non aliquam condimentum lectus. Malesuada viverra cras fames ornare quis. Commodo sapien amet nascetur porttitor dictum in sagittis cursus. Faucibus enim nec purus neque. Egestas donec semper duis lectus egestas blandit. Massa nisl ullamcorper platea ultrices auctor scelerisque sollicitudin nulla auctor. Quisque quis sed quisque enim velit nec praesent. Vitae nunc vulputate praesent risus scelerisque adipiscing faucibus. Nec pellentesque pulvinar urna ut rhoncus risus sit. Vulputate viverra ac lacus elit sed venenatis. Pellentesque odio in malesuada enim interdum arcu ut cursus tellus.
                                    <br /><br /> Vitae pretium sit tempus quisque tincidunt diam in. Faucibus tortor nec felis malesuada in arcu. Sollicitudin odio turpis tincidunt cursus. Tortor tempor nisi orci at sed et condimentum nunc ut. Porta etiam nulla nibh pretium eu aliquam vel integer blandit. Eleifend nisl platea orci aliquam etiam sed. Facilisis tortor ultrices nisi congue malesuada a quis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}