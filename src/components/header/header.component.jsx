import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown';
import './header.styles.scss';
// Below(inside header parameter):we can use props or we can destructure ({currentUser})
const Header = ({currentUser,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
       currentUser?
        <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden?null: <CartDropdown/>
    }
  </div>
);
// ADVANCED WAY OF DESTRUCTURING :(Alternate Way)
// const mapStateToProps=({user:{currentUser},cart:{hidden}})=>(
//   {
//     currentUser,
//     hidden
//   }
// )

const mapStateToProps=state=>(
  {
    currentUser:state.user.currentUser,
    hidden:state.cart.hidden
  }
)

export default connect(mapStateToProps)(Header);