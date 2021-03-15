import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart-reducer/cart.selector';
import {selectCurrentUser} from '../../redux/user-reducer-action/user.selector';
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


//below code without selector
// const mapStateToProps=state=>(
//   {
//     currentUser:state.user.currentUser,
//     hidden:state.cart.hidden
//   }
// )

//with selector but without createStructuredSelector
// const mapStateToProps=state=>(
//   {
//     currentUser:selectCurrentUser(state),
//     hidden:selectCartHidden(state)
//   }
// )

//we are using createStructuredSelector because it automatically passes the top level state
const mapStateToProps=createStructuredSelector(
    {
      currentUser:selectCurrentUser,
      hidden:selectCartHidden
    }
  )

export default connect(mapStateToProps)(Header);