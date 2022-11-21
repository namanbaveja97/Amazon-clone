import React from 'react'
import "./Home.css";
import Product from './Product';


function Home() {
  return (
    <div className='home'>
      <img 
      className='home__image'
      src='https://m.media-amazon.com/images/I/61SQdbfLDgL._SX3000_.jpg'
            alt=''
      ></img>

 
<h1>I am the home page</h1>
{/* Product id, title, price, image */}
<div className='home__row'>

    <Product 
      id="12321341"
      title="Apple iphone 13 pro max(grey)"
      price={100032.21}
      rating={5}
      image="https://m.media-amazon.com/images/I/31smn8fDvrL._AC_SY200_.jpg"

    ></Product>

    <Product 
      id="12321342"
      title="One Plus 35T! Never Settle(Burnoll)"
      price={57032.98}
      rating={4}
      image="https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg"

    ></Product>
</div>

<div className='home__row'>
  
    <Product 
      id="12321343"
      title="Samsoong Smart Watch"
      price={9987}
      rating={4}
      image="https://m.media-amazon.com/images/I/61mqaxj-iCL._AC_UL320_.jpg"

    ></Product>

    <Product 
      id="12321344"
      title="Redmi T2 (16 GB)"
      price={9999.87}
      rating={4}
      image="https://m.media-amazon.com/images/I/91kAtEXPIeL._AC_UY218_.jpg"

    ></Product>
     <Product 
      id="12321345"
      title="Samsoong Power Bank: 3600maH"
      price={1032}
      rating={5}
      image="https://m.media-amazon.com/images/I/71lVwl3q-kL._AC_UL320_.jpg"

    ></Product>
</div>
<div className='home__row'>
  
    <Product 
      id="123211236"
      title="Samsoong"
      price={750.23}
      rating={3}
      image="https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL320_.jpg"

    ></Product>
</div>


{/* product */}

    </div>
 
  )
}

export default Home