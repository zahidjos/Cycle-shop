import React from 'react';
import'./Product.css'

const Product = (props) => {
    let{id,name,image,price}=props.product;
    return (
        <div className="card" >
           <img src={image} className="card-img-top" alt="..."></img>
           <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">Price: {price}$</p>
            <p className="card-text">Id: {id}</p>
             <a href="#" className="btn btn-primary">Add to card</a>
          </div>
         </div>
    );
};

export default Product;