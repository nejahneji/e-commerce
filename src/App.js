import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth , createUserProfileDocument} from './firebase/firebase.utils'
import React from "react";




class App extends React.Component  {
  constructor (){
    super() ;
    this.state = {
      currentUser : null
    }
  }
   onSubscribeFromAuth = null


  componentDidMount() {
    this.onSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth) {
         const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot  => {
          this.setState({
            currentUser :{
              id : snapShot.id ,
              ...snapShot.data()
            }
          },()=>{
            console.log(this.state)
          })
        })
      }
      else {
        this.setState({ currentUser :userAuth } )
      }
      
    })
  }

  componentWillUnmount() {
    this.onSubscribeFromAuth()
  }




  render () {
    return (
      <Router>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpComponent} />
       </Switch>
    
      </Router>  
    );
  }
}

export default App;
