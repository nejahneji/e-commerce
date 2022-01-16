import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";




function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
     </Switch>
    </div>
    </Router>  
  );
}

export default App;
