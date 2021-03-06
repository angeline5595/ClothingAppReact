import React,{Component}from 'react';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import CheckoutPage from './pages/checkoutPage/checkout.component';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth,createUserProfileDocument} from './firebase/firebase.util';
import { setCurrentUser } from './redux/user-reducer-action/user.action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user-reducer-action/user.selector';

class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const{ setCurrentUser}=this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{

      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
         setCurrentUser(
            {
                id:snapShot.id,
                ...snapShot.data()
              
            },()=>{
              console.log(this.state);
            }
          )
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div >
       <Header />
       <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'  render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
       </Switch>
      </div>
    );
  }
}

// const mapStateToProps=({user})=>(
//   {
//     currentUser:user.currentUser
//   }
// )

// const mapDispatchToProps=dispatch=>(
//   {
//     setCurrentUser:user=>dispatch(setCurrentUser(user))
//   }
// )


//with selector
const mapStateToProps=createStructuredSelector(
  {
    currentUser:selectCurrentUser
  }
)

const mapDispatchToProps=dispatch=>(
  {
    setCurrentUser:user=>dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
