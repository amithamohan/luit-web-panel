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
			movieLanguages: []
		}

		this.getSlider = this.getSlider.bind(this);
		this.getAllMovies = this.getAllMovies.bind(this);
		this.getAllMoviesByLanguage = this.getAllMoviesByLanguage.bind(this);
	}

	componentDidMount()
	{
		this.getSlider();
		this.getAllMovies();
		this.getAllMusic();
		this.getAllMoviesByLanguage();
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

	async getAllMoviesByLanguage()
	{
		let languageList = [];
		let response = await Server.fetchMoviesByLanguages();

		console.log("getAllMoviesByLanguage");
		console.log(response);

		if (response["response"] === "success")
		{
			let language = response["data"];

			for (let i = 0; i < language.length; i++)
			{
				languageList.push(language[i]);
			}
		}
		
		this.setState({movieLanguages: languageList});
	}

	// fetch all music
	async getAllMusic()
	{
		let result = [];
		let response = await Server.fetchAllMusic();

		if (response["response"] === "success")
		{
			let movies = response["data"];

			for (let i = 0; i < movies.length; i++)
			{
				result.push(movies[i]);
			}
		}
		
		this.setState({musicList: result});
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
					<MoviesByLanguages languages={this.state.movieLanguages} />
					<MusicCard musicList={this.state.musicList}/>
					<TrendingArtist/>
					<ShortFilm count="4"/>
					<Footer/>
				</div>
			</div>
	     );
    }
}

export default Home;