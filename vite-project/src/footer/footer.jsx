import './footer.css'
import Logo from '../assets/logo.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div className='footer_inside'>
                    <div className='footer_top'>
                        <div className='footer_logo'>
                            <img src={Logo} alt="" />
                        </div>
                        <div className='footer_links'>
                            <ul>
                                <li><a href="">О компании</a></li>
                                <li><a href="">Деятельность</a></li>
                                <li><a href="">Персонал</a></li>
                                <li><a href="">Клиенту</a></li>
                            </ul>
                        </div>
                        <div className='footer_links'>
                            <ul>
                                <li><a href="">Акционеру и инвестору</a></li>
                                <li><a href="">Пресс-центр</a></li>
                                <li><a href="">Торги</a></li>
                                <li><a href="">Контакты</a></li>
                            </ul>
                        </div>
                        <div className='footer_place'>
                            <p>Местонахождение</p>
                            <br />
                            <p>Ante quam egestas tristique a malesuada massa aliquam ultrices. Et tellus nec.</p>
                        </div>
                    </div>
                    <div className='footer_bot'>
                        <div className='footer_thing'>
                            <p>Dictum praesent dignissim pellentesque amet diam velit faucibus sed. Nec mattis posuere habitasse porta feugiat mattis enim. Quam interdum at penatibus amet elementum luctus.</p>
                            <br />
                            <a href=""><p>Политика обработки персональных данных</p></a>
                        </div>
                        <div className='footer_madeby'>
                            <p>Разработано: Xinokus </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}