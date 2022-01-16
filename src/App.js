import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";





function App() {
  return (
    <Router>
    <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndSignUpComponent} />
     </Switch>
  
    </Router>  
  );
}

export default App;
