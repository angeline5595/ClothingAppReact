import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart-reducer/cart.actions';
import {selectCartItemsCount} from '../../redux/cart-reducer/cart.selector'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

 const CartIcon=({toggleCartHidden,itemCount})=>(
   <div className="cart-icon" onClick={()=>toggleCartHidden()}>
     <ShoppingIcon className="shopping-icon"/>
     <span className="item-count">{itemCount}</span>
   </div>
 );

 const mapDispatchToProps=dispatch=>({
   toggleCartHidden:()=>dispatch(toggleCartHidden())
 });

 
//Below:without selector it is working code
// const mapStateToProps=({cart:{cartItems}})=>({
//   itemCount:cartItems.reduce(
//     (acc,cartItem)=>acc+cartItem.quantity,
//     0
//     )
// });


//Below:with selector
const mapStateToProps=state=>({
  itemCount:selectCartItemsCount(state)
});

 export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
 
