import React, { Component } from "react";
import Footer from "../Dashboard/Footer";
import NavigationBar from "../Dashboard/NavBar";
import Server from '../APIs/Server';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StarRating from '../Dashboard/StarRating';
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { message } from 'antd';
import CheckIcon from '@material-ui/icons/Check';
import PayPopup from "../Utlities/PopUp";


class MoviesDetailedPage extends Component
{
	options =
	{
		items: 4,
		margin: 5,
		// itemsDesktop: [1000, 5],
		nav: true,
		loop: true,
		dots: false,
		navText:["<img src='images/left.png'/>","<img src='images/right.png'/>"],
		autoplay: true,
	};

	crewOption =
	{
		items: 5,
		nav: true,
		loop: false,
		autoplay: false,
	}

	constructor(props)
	{
		super(props);

		this.state =
		{
			actors: [],
			moviesList: [],
			allVideos: [],
			isAdded: false,
		}

		this.getActors = this.getActors.bind(this);
	}

	componentDidMount()
	{
		this.getActors();
		this.getAllMovies();
		this.isAddedToWishList();
	}

	async getActors()
	{
		let actorsList = [];
		let response = await Server.fetchArtist()

		if (response["response"] === "success") {
			let data = response["data"];

			for (let i = 0; i < data.length; i++) {
				actorsList.push(data[i]);
			}
		}

		this.setState({ actors: actorsList });
	}

	async isAddedToWishList()
	{
		let userId = 4;
		let type = 1;
		let id = this.props.location.params["item"]["movie_id"];

		let response = await Server.wishlistIsPresent(type, id, userId);

		if (response["response"] === "success") {
			this.setState({ isAdded: true });
		}
		else {
			this.setState({ isAdded: false });
		}
	}

	async addToWishlist(i)
	{
		console.log("done");
		let userId = 4;
		let type = 1;
		let itemId = i;

		console.log("success");
		let response = await Server.addToWishlist(userId, type, itemId);

		if (response["response"] === "success") {
			message.success('Added to wishlist');
		}
		else {
			message.info('Already added');
		}
	}


	// fetch all music
	async getAllMovies()
	{
		let result = [];
		let response = await Server.fetchAllMovies();

		if (response["response"] === "success") {
			let movies = response["data"];

			for (let i = 0; i < movies.length; i++) {
				result.push(movies[i]);
			}
		}

		this.setState({ moviesList: result });
	}

	render()
	{

		const crew = [];

		if (this.state.actors !== undefined) {
			for (let j = 0; j < this.props.location.params["item"]["actors"].length; j++) {
				for (let i = 0; i < this.state.actors.length; i++) {
					if (this.props.location.params["item"]["actors"][j] === this.state.actors[i]["name"]) {
						crew.push(
							<div key={i}>
								<center>
									<div className="owl-items" style={{ display: "block", border: "2px solid yellow", backgroundColor: "#222", height: "190px", width: "210px", borderRadius: "50%", backgroundImage: `url(${this.state.actors[i]["image"]})`, backgroundSize: "250px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
									<br /><span style={{ color: "white" }}>{this.state.actors[i]["name"]}</span>
								</center>
							</div>
						);
					}
					else {
						this.state.crew = null;
					}
				}
			}
		}


		const moreLikeThis = [];
		if (this.state.moviesList !== undefined) 
		{
			for (let j = 0; j < this.props.location.params["item"]["genre"].length; j++) 
			{
				for (let i = 0; i < this.state.moviesList.length; i++) 
				{
					let hour = this.state.moviesList[i]["duration"].split('.');

					if (this.props.location.params["item"]["genre"][j] === this.state.moviesList[i]["genre"][0]) 
					{
						moreLikeThis.push(
							<div className="owl-items" key={i} >
								<Link className="slide-one" to={{ pathname: "/movies_detailed_page", params: { item: this.state.moviesList[i] } }} style={{ height: "430px" }}>
									<div className="slide-image">
										<img src={this.state.moviesList[i]["thumbnail"]} alt={this.state.moviesList[i]["title"]} style={{ height: "270px" }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
									</div>
									<div className="slide-content">
										<h2>{this.state.moviesList[i]["movie_title"]}</h2>
										<p style={{fontFamily: "Montserrat"}}>{this.state.moviesList[i]["description"]}</p>
										<span class="tag">{hour[0]} h {hour[1]} min</span>
										<span class="tag">{this.state.moviesList[i]["publish_year"]}</span>
										<span class="tag"><b>{this.state.moviesList[i]["maturity_rating"]}+</b></span>
									</div>
								</Link>
							</div>
						);
					}
				}
			}
		}

		let data = this.props.location.params["item"];
		let image = this.props.location.params["item"]["thumbnail"];
		let x = image.split(' ').join('%20');

		let hour = this.props.location.params["item"]["duration"].split('.');


		let details =
		{
			"id": this.props.location.params["item"]["movie_id"],
			"type": 1,
			"rating": this.props.location.params["item"]["ratings"],
		}

		console.log(details);

		return (
			<div>
				<NavigationBar />
				<div className="banner-wrapper" style={{fontFamily: "Montserrat"}}>
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="banner-wrap justify-content-between align-items-center">
									<div className="left-wrap">
										<span className="rnd">IMDb 6.7</span>
										<h2>{data["movie_title"]}</h2>
										<span className="tag">{data["publish_year"]}</span>
										<span className="tag"><b>HD</b></span>
										<span className="tag"><b>{data["maturity_rating"]}+</b></span>
										<span className="tag">{hour[0]} hours {hour[1]} min</span>
										<p>{data["description"]}</p>

										<Link className="btn btn-lg" to={{ pathname: "/video_player", params: { item: this.props.location.params["item"] } }}><img src="images/play.png" alt="" />Watch now</Link>

										<IconButton style={{ color: "#fff", fontSize: 30 }} onClick={e => this.addToWishlist(data["movie_id"])} aria-label="reqind">
											{this.state.isAdded ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>}
										</IconButton>

										<div className="icon-bttn">
											<i className="ti-sharethis text-white mr-4"></i>
											<div className="share-icons">
												<a href="#"><i className="ti-facebook"></i></a>
												<a href="#"><i className="ti-twitter-alt"></i></a>
												<a href="#"><i className="mr-0 ti-pinterest"></i></a>
											</div>
										</div>

									</div>
									<div className="right-wrap" style={{ backgroundImage: `url(${x})` }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
								</div>
							</div>
						</div>
				
						{crew === null ? null : <div className="container slide-wrapper" style={{ backgroundColor: "#1A2236", paddingTop: "50px" }}>
							<div className="row">
								<div className="col-sm-6 text-left mb-4 mt-1">
									<h2 style={{ color: "white" }}>The Crew</h2>
								</div>
							</div>
							{
								crew.length && (
									<OwlCarousel options={this.crewOptions}>
										{
											crew
										}
									</OwlCarousel>
								)
							}
						</div>}

						<div className="container slide-wrapper" style={{ backgroundColor: "transparent", paddingTop: "50px" }}>
							<div className="row">
								<div className="col-sm-6 text-left mb-4 mt-1">
									<h2>More Like This</h2>
								</div>
							</div>
							{
								crew === null ? null :
									moreLikeThis.length && (
										<OwlCarousel options={this.options}>
											{
												moreLikeThis
											}
										</OwlCarousel>
									)
							}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default MoviesDetailedPage;