import React from 'react'
import CakeItem from './CakeItem'
import Spinner from '../ui/Spinner'

const CakeGrid = ({ items, isLoading,setCartCount, setCartValue, cartValue}) => {
  
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CakeItem setCartValue={setCartValue} cartValue={cartValue} setCartCount={setCartCount} key={item.id} item={item}></CakeItem>
      ))}
    </section>
  )
}

export default CakeGrid
