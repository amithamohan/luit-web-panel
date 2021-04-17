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

	async getAllMovies()
	{
		let movieList = [];
		let response = await Server.fetchAllMovies();

		if (response["response"] === "success")
		{
			let movies = response["data"];

			for (let i = 0; i < movies.length; i++)
			{
				movieList.push(movies[i]);
			}
		}
		
		this.setState({moviesList: movieList});
	}

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
					<NavigationBar/>
					<Slider slider = {this.state.homeSlider}/>
					<MoviesCard moviesList={this.state.moviesList}/>
					<MoviesByLanguages/>
					<MusicCard />
					<TrendingArtist/>
					<SeriesCard/>
					<ShortFilm count="4"/>
					<Footer/>
				</div>
			</div>
	     );
    }
}

export default Home;