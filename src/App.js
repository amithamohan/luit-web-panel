import './App.css';
import SignUp from './Components/SignUp';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Dashboard/Home';
import TermsOfService from './Components/App Policies/TermsOfService';



function App() 
{
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signUp" component={SignUp} />
          <Route path="termsOfService" component={TermsOfService}/>
      </Switch>
    </Router>
  );
}
export default App;