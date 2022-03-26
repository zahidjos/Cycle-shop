import React from 'react';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const Order = (props) => {
   console.log(props)
    const {removeElement,item}=props;
   
    
    return (
        <div className='order_head'>
             <div className="order_item">
                        <div className="item_img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="item_name">
                             <p>{item.name}</p>
                             
                        </div>
                        <button onClick={()=>removeElement(item)}><FontAwesomeIcon icon= {faTrash}/></button>
                    </div>
                
            

            
        </div>
    );
};

export default Order;