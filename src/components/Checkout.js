import React from 'react';
import "./Checkout.css";
import CheckoutProd from './CheckoutProd';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './Reducer';


function Checkout() {

    const [{basket},dispatch] = useStateValue();


        return (
            <div className='checkout'>
<div className='checkout__left'>
<img className='checkout__add'
                    src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg"
                    > 
               </img>

                {basket?.length == 0?(
                     <div className="checkout__empty">
                         <h1> Your Amazon Cart is empty </h1>
                         <h1 className='empty_emote'> 😣 </h1>
                    </div>
                ):(
                    <div>
                        <h2 className='checkout__title'>Your shopping Cart</h2>
                        {
                            basket.map(it =>(
                               
                                <CheckoutProd
                                
                            id={it.id}
                            title={it.title}
                            image={it.image}
                            price={it.price}
                            rating={it.rating}
                        ></CheckoutProd>
                            ))
                        }
                        
                    </div>
                )
               
                
                }
</div>
{basket.length >0 && (
    <div className='checkout__right'>
        <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (<>
        <p>
            Subtotal ({basket.length} items): <strong> ` ${value}`</strong>
        </p>
        <div>
            <input type="checkbox"></input>  This item contains a gift
        </div>
        </>)}

        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        <button className='checkout-btn'>Proceed to checkout</button>
        </div>
        
</div>
)}


             
               

            </div>
        )
}

export default Checkout