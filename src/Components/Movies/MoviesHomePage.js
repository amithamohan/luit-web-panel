import React, { Component } from "react";
import MoviesCard from "../Dashboard/MoviesCard";
import NavigationBar from "../Dashboard/NavBar";
import Slider from "../Dashboard/Slider";
import Server from "../APIs/Server";
import Spinner from '../Utlities/Spinner';
import { withRouter } from 'react-router-dom';

class MoviesPage extends Component {
	constructor(props) {
		super(props);

		this.state =
		{
			moviesList: [],
			moviesSlider: [],
			movieLanguages: [],
			topMovies: [],
			newReleasedMovies: [],
		}

		this.getSlider = this.getSlider.bind(this);
		this.getAllMovies = this.getAllMovies.bind(this);
		this.getAllMoviesByLanguage = this.getAllMoviesByLanguage.bind(this);
		this.getTopMovies = this.getTopMovies.bind(this);
		this.getTopMovies = this.getTopMovies.bind(this);
		this.getNewReleasedMovies = this.getNewReleasedMovies.bind(this);
	}

	componentDidMount() {
		this.getSlider();
		this.getAllMovies();
		this.getTopMovies();
		this.getAllMoviesByLanguage();
		this.getNewReleasedMovies();
	}

	async getSlider() {
		let home = [];
		let movie = [];
		let music = [];
		let shortFilm = [];

		let response;

		response = await Server.fetchSlider("movie");

		console.log(response);

		if (response["response"] === "success" && response["slider"] != null) {
			for (let i = 0; i < response["slider"].length; i++) {
				switch (response["message"]) {
					case "Home Slider":
						home.push(response["slider"][i]);
						break;

					case "movie slider":
						movie.push(response["slider"][i]);
						break;

					case "music slider":
						music.push(response["slider"][i]);
						break;

					case "Short Film slider":
						shortFilm.push(response["slider"][i]);
						break;
					default:
						break;
				}
			}
		}
		this.setState({ homeSlider: home, moviesSlider: movie, musicSlider: music, shortFilmSlider: shortFilm });
	}

	async getAllMovies() {
		let movieList = [];
		let response = await Server.fetchAllMovies();

		if (response["response"] === "success") {
			let movies = response["data"];

			for (let i = 0; i < movies.length; i++) {
				movieList.push(movies[i]);
			}
		}

		this.setState({ moviesList: movieList, allVideos: movieList });
	}

	async getAllMoviesByLanguage() {
		let languageList = [];
		let response = await Server.fetchMoviesByLanguages();

		if (response["response"] === "success") {
			let language = response["data"];

			for (let i = 0; i < language.length; i++) {
				languageList.push(language[i]);
			}
		}

		this.setState({ movieLanguages: languageList });
	}

	async getTopMovies() {
		let topMoviesList = [];
		let response = await Server.fetchTopMovies();

		if (response["response"] === "success") {
			let data = response["data"];

			for (let i = 0; i < data.length; i++) {
				topMoviesList.push(data[i]);
			}
		}

		this.setState({ topMovies: topMoviesList });

		console.log(this.state.topMovies);
	}

	async getNewReleasedMovies() {
		let newReleasedMoviesList = [];

		let response = await Server.fetchNewReleasedMovies();

		if (response["response"] === "success") {
			let data = response["data"];

			for (let i = 0; i < data.length; i++) {
				newReleasedMoviesList.push(data[i]);
			}
		}

		this.setState({ newReleasedMovies: newReleasedMoviesList });
	}



	render() {
		const languageList = [];

		for (let i = 0; i < this.state.movieLanguages.length; i++) {
			languageList.push
				(
					<MoviesCard title={this.state.movieLanguages[i]["lang_name"]} moviesList={this.state.movieLanguages[i]["data"]} />
				);
		}

		return (
			<div className="medium-12 columns">
				<div className="main-wrapper">
					<NavigationBar/>
					<Slider data={this.state.moviesSlider}  allVideos={this.state.allVideos}/>
					{
						this.state.moviesSlider.length > 0 &&  
						this.state.newReleasedMovies.length > 0 && 
						this.state.moviesList.length > 0 && 
						this.state.topMovies.length > 0 ? 
						<div>
							<MoviesCard title={"New Released Movies"} moviesList={this.state.newReleasedMovies} />
							<MoviesCard title={"Latest Movies"} moviesList={this.state.moviesList} />
							<MoviesCard title={"Top Movies"} moviesList={this.state.topMovies} />
						</div> :
						<Spinner />
					}
					<div>
						{
							languageList
						}
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(MoviesPage);