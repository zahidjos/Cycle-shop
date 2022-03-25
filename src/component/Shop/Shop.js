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
    
    
    
    return (
        <div className='shop_part'>
            <div className="product_part">
                <div className="product_container">
                {cards.map((card)=>
             <Product product={card} key={card.id}></Product>
            )}
                </div>
           
            </div>
            <div className="order_part">
            <Order></Order>

            </div>
           
           
        </div>
    );
};

export default Shop;