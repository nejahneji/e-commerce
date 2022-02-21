import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth , createUserProfileDocument} from './firebase/firebase.utils'
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkoutPage/checkoutPage.component";




class App extends React.Component  {
 
   onSubscribeFromAuth = null


  componentDidMount() {
    const {setCurrentUser} = this.props
    this.onSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth) {
         const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot  => {
         setCurrentUser( {
              id : snapShot.id ,
              ...snapShot.data()
            })
          
        })
      }
      else {
        setCurrentUser(userAuth)
      }
      
    })
  }

  componentWillUnmount() {
    this.onSubscribeFromAuth()
  }

  render () {
    return (
      <Router>
      <Header />
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route  path='/checkout' component={CheckoutPage}/>
        <Route  path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpComponent/>)} />
       </Switch>
    
      </Router>  
    );
  }
}


const mapStateToProps = createStructuredSelector({
   currentUser : selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps ,mapDispatchToProps)(App);
