import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import Server from '../APIs/Server';
import { message } from 'antd';

class Slider extends Component {
	constructor(props) {
		super(props);

		this.state =
		{
			moviesList: [],
			musicList: [],
			shortFilmList: [],
			allVideos: [],
			isAdded: false,
		}

		this.getAllMovies = this.getAllMovies.bind(this);
		this.getAllMusic = this.getAllMusic.bind(this);
		this.getAllShortFilms = this.getAllShortFilms.bind(this);
	}

	componentDidMount() {
		this.getAllMovies();
		this.getAllMusic();
		this.getAllShortFilms();
	}


	async getAllMovies() {
		let movieList = [];
		let response = await Server.fetchAllMovies();

		if (response["response"] === "success") {
			let movies = response["data"];

			for (let i = 0; i < movies.length; i++) {
				movieList.push(movies[i]);
				this.state.allVideos.push(movies[i]);
			}
		}
	}

	// fetch all music
	async getAllMusic() {
		let result = [];
		let response = await Server.fetchAllMusic();

		if (response["response"] === "success") {
			let music = response["data"];

			for (let i = 0; i < music.length; i++) {
				result.push(music[i]);
				this.state.allVideos.push(music[i]);
			}
		}
	}

	async getAllShortFilms() {
		let shortFilm = [];
		let response = await Server.fetchAllShortMovies();


		if (response["response"] === "success" && response["data"] !== null) {
			console.log("yesss");
			let data = response["data"];

			for (let i = 0; i < data.length; i++) {
				shortFilm.push(data[i]);
				this.state.allVideos.push(shortFilm);
			}
		}
		else {
			this.setState({ shortFilmList: null });

		}
	}

	async isAddedToWishList() {
		let userId = 4;
		let type = 1;
		let id = this.props.location.params["item"]["movie_id"];

		console.log("wish list");

		let response = await Server.wishlistIsPresent(type, id, userId);

		if (response["response"] === "success") {
			this.setState({ isAdded: true });
		}
		else {
			this.setState({ isAdded: false });
		}
	}

	async addToWishlist(i) {
		console.log("done");
		let userId = 4;
		let type = 1;
		let itemId = i;

		console.log("success");
		let response = await Server.addToWishlist(userId, type, itemId);

		if (response["response"] === "success") {
			console.log("success");
			message.success('Added to wishlist');
		}
		else {
			message.info('Already added');
		}
	}


	render() {
		const rows = [];

		for (let i = 0; i < this.state.allVideos.length; i++) 
		{
			for (let j = 0; j < this.props.data.length; j++) 
			{
				if ((this.state.allVideos[i]["id"] === this.props.data[j]["id"] || this.state.allVideos[i]["movie_id"] === this.props.data[j]["id"]) && this.state.allVideos[i]["type"] === this.props.data[j]["type"]) 
				{
					let data = this.state.allVideos[i];
					let hour = this.state.allVideos[i]["duration"].split('.');

					rows.push(
						<div className="row" key={i}>
							<div className="col-sm-12" style={{backgroundColor: "red", width: "100%"}}>
								<div className="banner-wrap justify-content-between align-items-center">
									<div className="left-wrap">
										{data["amount"] === "0" ? null : <span className="rnd">PREMIUM</span>}
										{data["type"] === "music" ? <h2>{data["title"]}</h2> : <h2>{data["movie_title"]}</h2>}
										<span className="tag"><b>Rating</b></span>
                                        <span className="tag">{data["ratings"] === "" ? "0" : data["ratings"]}</span>
                                        <span className="tag"><b>Duration</b></span>
                                        {data["type"] === "movie" ? <span className="tag">{hour[0]} h {hour[1]} min</span> : <span className="tag">{hour[0]} min {hour[1]} sec</span>}
                                        <p>{data["description"]}</p>

										<Link className="btn btn-lg" to={{ pathname: "/video_player", params: { item: data } }}><img src="images/play.png" alt="" />Watch now</Link>

										{/* <IconButton style={{ color: "#fff", fontSize: 30 }} onClick={e => this.addToWishlist(this.state.allVideos[i]["movie_id"])} aria-label="reqind">
											{this.state.isAdded ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>}
										</IconButton> */}

									</div>
									<div className="right-wrap" style={{ backgroundImage: `url('${data["poster"] === "" ? "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" : data["poster"]}')` }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
								</div>
							</div>
						</div>
					);
				}
			}
		}

		return (
			<div className="banner-wrapper">
				<div className="container" style={{fontFamily: "Montserrat"}}>
					<Carousel autoplay draggable>
						{rows}
					</Carousel>
				</div>
			</div>
		);
	}
}

export default Slider;