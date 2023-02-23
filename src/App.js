import './App.css';
import Home from "./pages/Home" 
import Details from "./pages/details"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage"



function App() {

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path ='/' exact component={Home}/>
        <Route path = '/details/:id' component={Details} render={(props) => <Home {...props} />} >
        <Route path='/login'  component={ LoginPage } />
          
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
