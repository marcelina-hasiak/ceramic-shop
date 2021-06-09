import React from 'react';

const HomePage = () => (
  <main className='homepage'> 
    <div>
      <header>
        <div>
          <a>J&P</a>
          <h1>Ceramic Boat</h1>
        </div>
        <nav>
          <a>
            <img></img>
            Contact
          </a>
          <a>
            <img></img>
            Sign in
          </a>
          <a>
            <img></img>
            My cart
          </a>
        </nav>
      </header>
      <article>
        {/* <!-- Slider main container --> */}
        <div class="swiper-container">
          {/* <!-- Additional required wrapper --> */}
          <div class="swiper-wrapper">
            {/* <!-- Slides --> */}
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
          {/* <!-- If we need pagination --> */}
          <div class="swiper-pagination"></div>

          {/* <!-- If we need navigation buttons --> */}
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          {/* <!-- If we need scrollbar --> */}
          <div class="swiper-scrollbar"></div>
        </div>
        <nav className='shop-navigation'>
          <a className='shop-navigation__item' href="#">
            <h2 className='shop-navigation__title'>Glina</h2>
          </a>
          <a className='shop-navigation__item' href="#">
            <h2 className='shop-navigation__title'>Szkliwa</h2>
          </a>
          <a className='shop-navigation__item' href="#">
            <h2 className='shop-navigation__title'>Warsztaty</h2>
          </a>
          <a className='shop-navigation__item' href="#">
            <h2 className='shop-navigation__title'>Narzędzia</h2>
          </a>
          <a className='shop-navigation__item' href="#">
            <h2 className='shop-navigation__title'>Urządzenia</h2>
          </a>
        </nav>
      </article>
    </div>
    <footer>
      <ul>
        <li>
          <a>
            <img></img>
            Paweł Kleszcz <br/> ul. Wieńcowa 5/32 <br/> 93-390, Łódź
          </a>
        </li>
        <li>
          <a>
            <img></img>
            600-500-400
          </a>
        </li>
        <li>
          <a>
            J&P
          </a>
        </li>
        <li>
          <a>
            <img></img>
            p.kleszcz@gmail.com
          </a>
        </li>
        <li>
          <a>
            <img></img>
            facebook.com/j&p
          </a>
        </li>
      </ul>
    </footer>
  </main>
)

export default HomePage