import React from 'react'

import cupcake from '../../img/cupcake.png'
import cake from '../../img/cake.png'
import baker from '../../img/baker.png'

const Header = () => {
  return (
    <header className='center'>
      <div className='header-item'>
      <img className='header-image' src={cupcake} alt='' />
      <div className='header-details'>
      <p className='header-title'>
        Products
      </p>
      <p className='header-description'>
          View our wide range of Products
        </p>
        </div>
      </div>
      <div className='header-item'>
      <img className='header-image' src={cake} alt='' />
      <div className='header-details'>
      <p className='header-title'>
        Cake Class
      </p>
      <p className='header-description'>
          View our wide range of Cakes
        </p>
        </div>
      </div>
      <div className='header-item'>
      <img className='header-image' src={baker} alt='' />
      <div className='header-details'>
      <p className='header-title'>
        Recipes
      </p>
      <p className='header-description'>
          View our wide range of Recipes
        </p>
        </div>
      </div>
      {/* <div className='header-item'>item2</div>
      <div className='header-item'>item3</div> */}
      {/* <img src={logo} alt='' /> */}
    </header>
  )
}

export default Header
