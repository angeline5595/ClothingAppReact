import React from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../../redux/cart-reducer/cart.selector';
import {toggleCartHidden} from '../../../redux/cart-reducer/cart.actions';
const CartDropdown =({cartItems,history,toggleCartHidden})=>(
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length?(  cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>))
        :(<span className="empty-message"> Your Cart Is Empty</span>)
       
      }
    </div>
    <CustomButton onClick={()=>{
      history.push('/checkout');
      toggleCartHidden();
      }}>GO TO CHECKOUT</CustomButton>
  </div>
)

// alternate way to destructure state & used without selector
// const mapStateToProps=({cart:{cartItems}})=>({
// cartItems
// });


//used with selector 
// const mapStateToProps=state=>({
//   cartItems:selectCartItems(state)
//   });

//used with selector  createStructuredSelector
const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems
  });

  const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
  });
 //instead of writing dispatch code we can also destructure like dispatch in component parameter then we can the function like dispatch(toggleCartHidden());

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));
