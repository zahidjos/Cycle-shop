import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    
    
    const [cards,setCard]=useState([]);
    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    const[item,setItem]=useState([])
    console.log(item)
    const addToCard=(product)=>{
        setItem([...item,product]);
            }

    const chooseElement=()=>{
          let chooseItem=Math.random();
          let chooseProduct=Math.floor(chooseItem*item.length);

          setItem([item[chooseProduct]]);
    }
    const resetElement=()=>{
       setItem([])
    }
    console.log(item)
    const removeElement=(itemRemove)=>{
        
       let removePosition= item.indexOf(itemRemove);
       item.splice(removePosition,1);
       console.log(item)
       setItem([...item]);
      
       
    }

    return (
        <div className='shop_part'>
            <div className="product_part">
                <div className="product_container">
                {cards.map((card)=>
             <Product product={card} handelCard={addToCard} key={card.id}></Product>
            )}
            </div>
           
            </div>
            <div className="order_part">
            <Order item={item} key={item.id} chooseElement={chooseElement} resetElement={resetElement} removeElement={removeElement}></Order>

            </div>
           
           
        </div>
    );
};

export default Shop;