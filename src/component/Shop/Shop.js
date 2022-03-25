import React, { useEffect, useState } from 'react';
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
        <div>
            {cards.map((card)=>
             <Product product={card} key={card.id}></Product>
            )}
           
        </div>
    );
};

export default Shop;