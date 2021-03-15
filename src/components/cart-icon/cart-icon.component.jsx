import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart-reducer/cart.actions';
import {selectCartItemsCount} from '../../redux/cart-reducer/cart.selector'
import {createStructuredSelector} from 'reselect';
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
// const mapStateToProps=state=>({
//   itemCount:selectCartItemsCount(state)
// });

//Below:with selectorcreateStructuredSelector
const mapStateToProps=createStructuredSelector({
  itemCount:selectCartItemsCount
});

 export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
 
