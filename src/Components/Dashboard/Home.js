import React, {Component} from 'react';
import Slider from './Slider';
import NavigationBar from './NavBar';
import MoviesCard from './MoviesCard';
import MoviesByLanguages from './MoviesByLanguages';
import MusicCard from './MusicCard';
import TrendingArtist from './TrendingArtist';
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
			movieLanguages: [],
			trendingArtist: [],
			allVideos: [],
		}

		this.getSlider = this.getSlider.bind(this);
		this.getAllMovies = this.getAllMovies.bind(this);
		this.getAllMusic = this.getAllMusic.bind(this);
		this.getAllShortFilms = this.getAllShortFilms.bind(this);
		this.getTrendingArtist = this.getTrendingArtist.bind(this);
		this.getAllMoviesByLanguage = this.getAllMoviesByLanguage.bind(this);
	}

	componentDidMount()
	{
		this.getSlider();
		this.getAllMovies();
		this.getAllMusic();
		this.getAllShortFilms();
		this.getTrendingArtist();
		this.getAllMoviesByLanguage();
	}

	async getSlider()
	{
		let home = [];
		let movie = [];
		let music = [];
		let shortFilm = [];

		let response;

		let category = ["home"];

		for(let j = 0; j < category.length; j++)
		{
			response = await Server.fetchSlider(category[j]);

			if(response["response"] === "success" && response["slider"] != null)
			{
				for(let i = 0; i < response["slider"].length; i++)
				{
					home.push(response["slider"][i]);
				}
			}
		}
		this.setState({homeSlider: home, moviesSlider: movie, musicSlider: music, shortFilmSlider: shortFilm});
	}

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

		this.setState({moviesList: movieList, allVideos: movieList});
	}

	async getAllMoviesByLanguage()
	{
		let languageList = [];
		let response = await Server.fetchMoviesByLanguages();

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

	async getTrendingArtist()
	{
		let artistList = [];
		let response = await Server.fecthMoviesByActors();

		console.log(response);

		if (response["response"] === "success")
		{
			let artist = response["data"];

			for (let i = 0; i < artist.length; i++)
			{
				artistList.push(artist[i]);
			}
		}

		this.setState({trendingArtist: artistList});
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

		this.setState({musicList: result, allVideos: result});
	}

	async getAllShortFilms()
	{
		let shortFilm = [];
		let response = await Server.fetchAllShortMovies();

		console.log(response["data"]);

		if (response["response"] === "success" && response["data"] !== null)
		{
			console.log("yesss");
			let data = response["data"];

			for (let i = 0; i < data.length; i++)
			{
				shortFilm.push(data[i]);
			}

			this.setState({shortFilmList: shortFilm, allVideos: shortFilm});
		}
		else
		{
			this.setState({shortFilmList: null});
			console.log(this.state.shortFilmList);

		}
	}

	render()
	{
		return(

			<div className="medium-12 columns">
				<div className="main-wrapper">
					<NavigationBar  movies = {this.state.moviesList}/>
					<Slider data={this.state.homeSlider} />
					<MoviesCard title = {"Latest Movies"} moviesList={this.state.moviesList}/>
					<MoviesByLanguages languages={this.state.movieLanguages} />
					<MusicCard title = {"Latest Music"} musicList={this.state.musicList}/>
					<TrendingArtist trendingArtist={this.state.trendingArtist}/>
					{this.state.shortFilmList === null ? null : <ShortFilm shortFilmList={this.state.shortFilmList}/>}
)					<Footer/>
				</div>
			</div>
	     );
    }
}

export default Home;