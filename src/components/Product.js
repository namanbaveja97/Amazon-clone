import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title, image, price, rating }) {

    const [{ basket },dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id,
                title,
                image,
                price,
                rating,
            }
        })
    }

  return (
    <div className='product'>
        
        <span className='product__imageContainer'>
        <img className='product__img' src={image} alt="Product image"></img>
        </span>
        
        <div className='product__information'>
            <p className='product__title'>{title}</p>
            <p className='product__price'>
                <sup className='currency'>₹</sup>
                <strong>{price}</strong>    
            </p>    
            <div className='product__rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(<p>⭐</p>))
                }

            
            </div>
           
        </div>
        <button className='product__button' onClick={addToBasket}>Add to Cart</button>
       
    </div>
  )
}

export default Product