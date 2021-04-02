import './App.css';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';


function App() 
{
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  );
}
export default App;