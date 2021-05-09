import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Dashboard/Home';
import MoviesPage from './Components/Movies/MoviesHomePage';
import MusicPage from './Components/Music/MuiscHomePage';
import ShortFilm from './Components/Short Films/ShortFilm';
import WebSeries from './Components/Web Series/WebSeriesHomePage';
import ProfileInfo from './Components/User/profile';
import SigninScreen from './Components/SigninScreen';
import OTPScreen from './Components/OTPScreen';
import TermsScreen from './Components/TermsScreen';
import PrivacyScreen from './Components/PrivacyScreen'; 
import WishList from './Components/wishlist';
import ViewAll from './Components/Dashboard/ViewAll';
import MusicDetailedPage from './Components/Music/MusicDetailedPage';
import MoviesDetailedPage from './Components/Movies/MoviesDetailedPage';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import History from './Components/History';
import asd from './Components/asd';
import StarRating from './Components/Dashboard/StarRating';

function App() 
{
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/asd" component={asd} exact />
          <Route path="/movies" component={MoviesPage}/>
          <Route path="/music" component={MusicPage}/>
          <Route path="/short_film" component={ShortFilm}/>
          <Route path="/web_series" component={WebSeries}/>
          <Route path="/profile" component={ProfileInfo}/>
          <Route path="/sign_in" component={SigninScreen} />
          <Route path="/verifyotp" component={OTPScreen} />
          <Route path="/terms" component={TermsScreen} />
          <Route path="/privacy-policy" component={PrivacyScreen} />
          <Route path="/wishlist" component={WishList} />
          <Route path="/music_detailed_page" component={MusicDetailedPage} />
          <Route path="/movies_detailed_page" component={MoviesDetailedPage} />
          <Route path="/view_all" component={ViewAll} />
          <Route path="/video_player" component={VideoPlayer}/>
          <Route path="/history" component={History}/>
          <Route path="/rating" component={StarRating} />
      </Switch>
    </Router>
  );
}

export default App;