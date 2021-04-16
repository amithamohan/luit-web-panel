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
import Server from '../APIs/Server';

class Home extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			moviesList: [],
			musicList:[],
			shortFilmList:[],
			homeSlider: [],
			moviesSlider: [],
			musicSlider: [],
			shortFilmSlider:[],
		}

		this.getSlider = this.getSlider.bind(this);
		this.getAllMovies = this.getAllMovies.bind(this);
	}

	componentDidMount()
	{
		this.getSlider();
		this.getAllMovies();
	}

	// slider
	// api calls
	async getSlider()
	{

		let response;

		let category = ["home", "movie", "music", "short-film"];

		for(let j = 0; j < category.length; j++)
		{
			response = await Server.fetchSlider(category[j]);

			if(response["data"]["response"] === "success" && response["data"]["slider"] != null)
			{
				for(let i = 0; i < response["data"]["slider"].length; i++)
				{
					switch(response["data"]["message"])
					{
						case "Home Slider":
							this.state.homeSlider.push(response["data"]["slider"][i]);
							break;

						case "movie slider":
							this.state.moviesSlider.push(response["data"]["slider"][i]);
							break;

						case "music slider":
							this.state.musicSlider.push(response["data"]["slider"][i]);
							break;

						case "Short Film slider":
							this.state.shortFilmSlider.push(response["data"]["slider"][i]);
							break;
						default:
							break;
					}
				}
			}
		}
	}
	// slider

	// fetch all movies
	async getAllMovies()
	{
		let result;

		let movies = [];

		let response = await Server.fetchAllMovies();

		result = response["data"];

		if(result["response"] === "success")
		{
			for(let i = 0; i < result["data"].length; i++)
			{
				movies.push(result["data"][i]);
			}
		}
		
		this.setState({moviesList: movies});
	}
	// fetch all movies

	// fetch all music
	async getAllMusic()
	{
		let musicList = [];
		let result;

		let response = await Server.fetchAllMusic();

		result = response["data"];

		if(result["response"] === "success")
		{
			for(let i = 0; i < result["data"].length; i++)
			{
				musicList.push(result["data"][i]);
			}
		}
		else
		{
			musicList = null;
		}
	}
	// fetch all music
	// api calls

	render()
	{
		return(
	        	<div className="medium-12 columns">
			   		<div className="main-wrapper">
				 		{/* header wrapper */}
				 			<NavigationBar/>
						{/* header wrapper */}

						{/* banenr wrapper */}
							<Slider slider = {this.state.homeSlider}/>
						{/* banenr wrapper */}

						{/* slider wrapper */}
							<MoviesCard moviesList={this.state.moviesList}/>
						{/* slider wrapper */}

						{/* slider wrapper */}
							<MoviesByLanguages/>
						{/* slider wrapper */}

						{/* slider wrapper */}
							<MusicCard />
						{/* slider wrapper */}

						{/* crew wrapper */}
							<TrendingArtist/>
						{/* crew wrapper */}

						{/* slider wrapper */}
							<SeriesCard/>
						{/* slider wrapper */}

						{/* slider wrapper */}
							<ShortFilm count="4"/>
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