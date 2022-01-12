import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const Hats =(props) => {
  // console.log(props)
  return (
  <div>
    <h1>hats</h1>
  </div>
)}



function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/hats' component={Hats}/>
     </Switch>
    </div>
    </Router>  
  );
}

export default App;
