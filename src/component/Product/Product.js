import React from 'react';
import'./Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    let{handelCard,product}=props;
    let{id,name,image,price}=product;
    return (
        <div className="card" >
           <img src={image} className="card-img-top" alt="..."></img>
           <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">Price: {price}$</p>
            <p className="card-text">Id: {id}</p>
            <a href="#" onClick={()=>handelCard(product)} className="btn btn-primary">ADD TO CARD <FontAwesomeIcon icon={faShoppingCart}/></a>
          </div>
         </div>
    );
};

export default Product;