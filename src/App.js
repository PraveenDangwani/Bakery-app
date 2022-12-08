import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header'
import CakeGrid from './components/cakes/CakeGrid'
import PageTitle from './components/ui/PageTitle'
import './App.css'
import {products} from './Products'
import cart from './img/trolley.png'
import souffle from './img/souffle.png'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [cartValue, setCartValue] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      setItems(products)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])
  
  const queryFunction = (q) =>{
    setQuery(q)
  }

  const checkoutVal = ()=>{
    console.log('cart value',cartValue)
    var finalVal = 0
    cartValue.map((cart)=>{
      finalVal = finalVal + parseInt(cart.price) 
    })
    console.log('CheckOut value is ',finalVal);
  }
  


  useEffect(()=>{
    console.log('cart value',cartValue);
  },[cartValue])

  return (
    <div className='container'>
      <div className='title-Bar'>
      <img className='souffle' src={souffle} alt="souffle" />
      <h1 className='website-title'>Cake Bake</h1>
      <div onClick={checkoutVal} className="cart-icon">
        <img src={cart} alt="cart" />
          <p>{cartCount}</p>
      </div>
      </div>
      
      <Header />
      <PageTitle getQuery={queryFunction} />
      <CakeGrid setCartValue={setCartValue} setCartCount={setCartCount} isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
