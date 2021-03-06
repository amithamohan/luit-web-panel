import React, { Component } from "react";
import MoviesCard from "../Dashboard/MoviesCard";
import NavigationBar from "../Dashboard/NavBar";
import Slider from "../Dashboard/Slider";
import Footer from '../Dashboard/Footer';
import Server from "../APIs/Server";


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
					<NavigationBar />
					<Slider data={this.state.moviesSlider} allVideos={this.state.allVideos} />
					<MoviesCard title={"New Released Movies"} moviesList={this.state.newReleasedMovies} />
					<MoviesCard title={"Latest Movies"} moviesList={this.state.moviesList} />
					<MoviesCard title={"Top Movies"} moviesList={this.state.topMovies} />
					<div>
						{
							languageList
						}
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default MoviesPage;