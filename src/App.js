import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Dashboard/Home';
import TermsOfService from './Components/App Policies/TermsOfService';
import MoviesPage from './Components/Movies/MoviesHomePage';
import MusicPage from './Components/Music/MuiscHomePage';
import ShortFilm from './Components/Short Films/ShortFilm';
import WebSeries from './Components/Web Series/WebSeriesHomePage';
import ProfileInfo from './Components/User/profile';
import SigninScreen from './Components/SigninScreen';
import OTPScreen from './Components/OTPScreen';
import TermsScreen from './Components/TermsScreen';
import PrivacyScreen from './Components/PrivacyScreen'; 
import ViewAll from './Components/Dashboard/ViewAll';
import MusicDetailedPage from './Components/Music/MusicDetailedPage';
import MoviesDetailedPage from './Components/Movies/MoviesDetailedPage';

function App() 
{
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sign_in" component={SigninScreen} />
          <Route path="/terms_of_service" component={TermsOfService}/>
          <Route path="/movies" component={MoviesPage}/>
          <Route path="/music" component={MusicPage}/>
          <Route path="/short_film" component={ShortFilm}/>
          <Route path="/web_series" component={WebSeries}/>
          <Route path="/profile" component={ProfileInfo}/>
          <Route path="/signin" component={SigninScreen} />
          <Route path="/verifyotp" component={OTPScreen} />
          <Route path="/terms" component={TermsScreen} />
          <Route path="/privacy-policy" component={PrivacyScreen} />
          <Route path="/music_detailed_page" component={MusicDetailedPage} />
          <Route path="/movies_detailed_page" component={MoviesDetailedPage} />
          <Route path="/view_all" component={ViewAll} />
      </Switch>
    </Router>
  );
}
export default App;