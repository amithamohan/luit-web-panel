import React, {Component} from 'react';
import Slider from './Slider';
import NavigationBar from './NavBar';
import MoviesCard from './MoviesCard';
import MoviesByLanguages from './MoviesByLanguages';
import MusicCard from './MusicCard';
import TrendingArtist from './TrendingArtist';
import SeriesCard from './SeriesCard';
import ShortFilm from './ShortFilmsCard';
import Footer from './Footer';

class Home extends Component
{
	render()
	{
		return(
	        	<div className="medium-12 columns">
			   		<div className="main-wrapper">
				 		{/* header wrapper */}
				 			<NavigationBar/>
						{/* header wrapper */}

						{/* banenr wrapper */}
							<Slider/>
						{/* banenr wrapper */}

						{/* slider wrapper */}
							<MoviesCard count="4"/>
						{/* slider wrapper */}

						{/* slider wrapper */}
							<MoviesByLanguages/>
						{/* slider wrapper */}

						{/* slider wrapper */}
							<MusicCard/>
						{/* slider wrapper */}

						{/* crew wrapper */}
							<TrendingArtist/>
						{/* crew wrapper */}

						{/* slider wrapper */}
							<SeriesCard/>
						{/* slider wrapper */}

						{/* slider wrapper */}
							<ShortFilm/>
						{/* slider wrapper */}

						{/* footer wrapper */}
							<Footer/>
						{/* footer wrapper */}
			   		</div>
				</div>
	     );
    }
}
export default Home;