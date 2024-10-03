import './header.css'

import Nav from '../nav/nav'

function Header() {



  function headerButtonOne(){
    let button1 = document.getElementById('slider_button_1')
    let button2 = document.getElementById('slider_button_2')
    let button3 = document.getElementById('slider_button_3')

    let slider = document.getElementById('slider')
    slider.className = 'slider_line'

    button1.className = 'button_active'
    button2.className = ''
    button3.className = ''
    
  }
  function headerButtonTwo(){
    let button1 = document.getElementById('slider_button_1')
    let button2 = document.getElementById('slider_button_2')
    let button3 = document.getElementById('slider_button_3')
    
    let slider = document.getElementById('slider')
    slider.className = 'slider_line left_once'

    button1.className = ''
    button2.className = 'button_active'
    button3.className = ''
  }
  function headerButtonThree(){
    let button1 = document.getElementById('slider_button_1')
    let button2 = document.getElementById('slider_button_2')
    let button3 = document.getElementById('slider_button_3')

    let slider = document.getElementById('slider')
    slider.className = 'slider_line left_twice'

    button1.className = ''
    button2.className = ''
    button3.className = 'button_active'
  }

  return (
    <>
      <header>
        <Nav/>
        <div className='header_inside'>
            <div className='header_left'>
              <div className="slider_line" id='slider'>
                <div className="slider">
                  <div className='header_left_text'>
                      <p>Quis et quam quam sem scelerisque odio. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Nunc leo.</p>
                  </div>
                  <div className='header_left_more'>
                      <button type="button"><p>Подробнее</p></button>
                  </div>
                </div>
                <div className="slider">
                  <div className='header_left_text'>
                      <p>Quis et quam quam sem scelerisque odio. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Nunc leo.</p>
                  </div>
                  <div className='header_left_more'>
                      <button type="button"><p>Подробнее</p></button>
                  </div>
                </div>
                <div className="slider">
                  <div className='header_left_text'>
                      <p>Quis et quam quam sem scelerisque odio. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Nunc leo.</p>
                  </div>
                  <div className='header_left_more'>
                      <button type="button"><p>Подробнее</p></button>
                  </div>
                </div>
              </div>
                <div className='header_left_buttons'>
                    <button type="button" id='slider_button_1' className='button_active' onClick={headerButtonOne}></button>
                    <button type="button" id='slider_button_2' onClick={headerButtonTwo}></button>
                    <button type="button" id='slider_button_3' onClick={headerButtonThree}></button>
                </div>
            </div>
            <div className='header_right'>
                <div className='header_right_percent'>
                    <div className='ball_con'>
                      <div className="ball"></div>
                    </div>
                    <div className='header_right_percent_inside'>
                        <p>99,995%</p>
                    </div>
                </div>
                <div className='header_right_percent_under'><p>Nisi nulla ultrices amet cras tincidunt nec. Dolor magna.</p></div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header