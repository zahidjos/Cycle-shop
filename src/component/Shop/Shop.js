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
    // console.log(item)

    const addToCard=(product)=>{
       if(item.length>0){
           for(const singleItem of item){
               if(singleItem.id==product.id){
                   alert("This item already added");
                   setItem([...item])
               }
               else{
                setItem([...item,product]);
               }
           }
       }
       else{
        setItem([...item,product]);
       }
          }

    const chooseElement=()=>{
          let chooseItem=Math.random();
          let chooseProduct=Math.floor(chooseItem*item.length);

          setItem([item[chooseProduct]]);
    }
    const resetElement=()=>{
       setItem([])
    }
    // console.log(item)
    const removeElement=(itemRemove)=>{
        
       let removePosition= item.indexOf(itemRemove);
       item.splice(removePosition,1);
    //    console.log(item)
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
            <h3>Selected Cycle</h3>
            {item.map((oneItem)=>
                <Order item={oneItem} key={oneItem.id}   removeElement={removeElement}></Order>
            )}
            

            <button type="button" onClick={chooseElement} className="btn btn-success">CHOOSE ONE FOR ME</button>
            <button type="button" onClick={resetElement} className="btn btn-secondary">CHOOSE AGIN</button>
            </div>
           
           
        </div>
    );
};

export default Shop;