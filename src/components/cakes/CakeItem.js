import React, {useState } from 'react'


const CakeItem = ({ item,setCartCount, setCartValue, cartValue  }) => {
  const [count, setCount] = useState(0)
  
  

  

  const addItem = () =>{
    setCount(prev => prev +1)
    setCartCount(prev=>prev+1)
    setCartValue(prev=>[...prev,item]);
  }

  const deleteItem = () =>{
    setCount(prev => prev - 1)
    setCartCount(prev=>prev-1)
    setCartValue(prev =>{
      let seenItem = false;
      const filtered = prev.filter((a) => {
        if (seenItem) {
            return true;
        }
        seenItem = a === item;
        return !seenItem;
      })
      return filtered
      })
    }

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.title}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
            <li>
              <strong>Price:</strong> {item.price}
            </li>
            {/* <li>
              <strong>Status:</strong> {item.status}
            </li> */}
          </ul>
          {count> 0 ?
          <>
          <div className='Cart'>
          <button className='insideCart' onClick={deleteItem} > - </button>
            
           <input
              className='textControl'
              readOnly value={count}
              // onChange={(e) => onChange(e.target.value)}
              autoFocus
            />
             <button className='insideCart' onClick={addItem} > + </button>
            </div>
           </>
           :<div class="center-btn">
           <button className='AddToCart' onClick={addItem}> Add to card</button>
         </div>}
        </div>
      </div>
    </div>
  )
}

export default CakeItem
