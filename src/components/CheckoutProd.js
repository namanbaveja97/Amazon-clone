import React from 'react'
import { useStateValue } from './StateProvider';
import './CheckoutProd.css';
function CheckoutProd({id, title, image,price, rating}) {
    console.log('id in prop',id);
    const [{ basket },dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: {
                id
            }
        })
    }

  return (
    <div>
    <div className='checkoutProd'>
        <img className='checkoutProd__image' src={image}></img>

                <div className='checkoutProd__info'>
                    <p className='checkoutProd__title'>{title}</p>

                    <p className='checkoutProd__price'>
                        <sup className='currency'>₹</sup>
                        <strong>{price}</strong>    
                    </p>   

                    <div className='checkoutProd__rating'>
                        {
                            Array(rating)
                            .fill()
                            .map((_)=>(<p>⭐</p>))
                        }

            
                    </div> 
                   
                      
                    
                </div>
               
                  
                <div className='checkoutProd__div'>
                    <button className='checkoutProd__button' onClick={RemoveFromBasket}>💔 Remove From basket</button>
                    </div>
               

                
       
        </div>
       
        </div>
        
  )
}

export default CheckoutProd