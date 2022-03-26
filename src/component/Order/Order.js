import React from 'react';
import './Order.css';

const Order = (props) => {
    // console.log(props)
    const {chooseElement}=props;
    return (
        <div className='order_head'>
            <h3>Selected Cycle</h3>
            {
                props.item.map((item)=>
                    <div className="order_item">
                        <div className="item_img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="item_name">
                             <p>{item.name}</p>
                        </div>
                        <button>DELETE</button>
                    </div>
                )
            }

<button type="button" onClick={chooseElement} className="btn btn-success">CHOOSE ONE FOR ME</button>
<button type="button" className="btn btn-secondary">CHOOSE AGIN</button>
            
        </div>
    );
};

export default Order;