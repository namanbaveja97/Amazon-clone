import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { SportsBasketball } from '@mui/icons-material';
import { useStateValue } from "./StateProvider";

function Header() {

    const [{basket} , dispatch] = useStateValue();

  return (
    <nav className="header">
        <Link to="/">
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png">

            </img>
        </Link>
     
     {/* search bar */}
     <div className='header__search'>
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
     </div>
    

    <div className='header__nav'>
        <Link to="/login" className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Sign in</span>
                <span className='header__optionLineTwo'>Sign out</span>
                
            </div>
           
        </Link>
        <Link to="/" className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Return</span>
                <span className='header__optionLineTwo'>& order</span>
                
            </div>
           
        </Link>
        <Link to="/" className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
                
            </div>
           
        </Link>

        <Link to={"/checkout"} className="header__link">
            <div className='header__optionBasket'>
                {/* shoppin basket icon */}
                <ShoppingBasketIcon></ShoppingBasketIcon>
                {/* Number of item in basket */}
                <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </div>
        </Link>
    </div>
        
    </nav>
  )
}

export default Header