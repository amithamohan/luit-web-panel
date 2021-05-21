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
import SignInPopup from "../Utlities/SignInPopup";

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
			isLoggedIn: false,
		}

		this.getActors = this.getActors.bind(this);
		this.checkPayment = this.checkPayment.bind(this);

	}

	componentDidMount()
	{
		this.getActors();
		this.getAllMovies();
		this.isAddedToWishList();
		this.checkPayment();
	}

	async checkPayment()
	{
		let contentType = this.props.location.state.item["type"] === "movie" ? 1 : 2;
		let contentId = contentType === 1 ? this.props.location.state.item["movie_id"] : this.props.location.state.item["id"];
		let data = JSON.parse(localStorage.getItem("user"));

		console.log(data);
		console.log("data");

        if (data != null)
        {
			let userId = data["id"];
			this.setState({ isLoggedIn: true })
			let response = await Server.checkPaymentStatus(contentType, contentId, userId);

			console.log(response);
			console.log("response");

			if(response["payment_status"] === 0)
			{
				this.setState({isPaid : false});
			}
			else
			{
				this.setState({isPaid : true});
			}
        }
	}

	async getActors()
	{
		let actorsList = [];
		let response = await Server.fetchArtist()

		if (response["response"] === "success")
		{
			let data = response["data"];

			for (let i = 0; i < data.length; i++)
			{
				actorsList.push(data[i]);
			}
		}

		this.setState({ actors: actorsList });
	}

	async isAddedToWishList()
	{
		let user = localStorage.getItem("user");

		let data = JSON.parse(user);

		let userId = data["id"];

		let type = 1;
		let id = this.props.location.state.item["movie_id"];

		let response = await Server.wishlistIsPresent(type, id, userId);

		if (response["response"] === "success")
		{
			this.setState({ isAdded: true });
		}
		else
		{
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

		if (response["response"] === "success")
		{
			message.success('Added to wishlist');
		}
		else
		{
			message.info('Already added');
		}
	}

	async getUserDetails()
    {
        let user = localStorage.getItem("user");
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

	// Another way
	// handleClick(movie)
    // {
	// 	const { history } = this.props;
    //     history.push
    //     ({
    //         pathname:'/movies_detailed_page',
    //         state : { item: movie}
    //     })
    // }

	render()
	{

		const crew = [];
		console.log(this.props.location.state)
		if (this.state.actors !== undefined) 
		{
			for (let j = 0; j < this.props.location.state.item["actors"].length; j++) 
			{
				for (let i = 0; i < this.state.actors.length; i++) 
				{
					if (this.props.location.state.item["actors"][j] === this.state.actors[i]["name"]) 
					{
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
			// history.replace("/demo/luitWeb/build/");

			for (let j = 0; j < this.props.location.state.item["genre"].length; j++)
			{
				for (let i = 0; i < this.state.moviesList.length; i++)
				{
					let hour = this.state.moviesList[i]["duration"].split('.');

					if (this.props.location.state.item["genre"][j] === this.state.moviesList[i]["genre"][0])
					{
						moreLikeThis.push(
							<div className="owl-items" key={i} >
								{/* <div className="slide-one" onClick={()=>{this.handleClick(this.state.moviesList[i])}} style={{ height: "430px" }}> */}
								<Link className="slide-one" to={{ pathname: "/movies_detailed_page", state: { item: this.state.moviesList[i] } }} style={{ height: "430px" }}>
									<div className="slide-image">
										<img src={this.state.moviesList[i]["thumbnail"]} alt={this.state.moviesList[i]["title"]} style={{ height: "270px" }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
									</div>
									<div className="slide-content">
										<h2>{this.state.moviesList[i]["movie_title"]}</h2>
										<p style={{fontFamily: "Montserrat"}}>{this.state.moviesList[i]["description"]}</p>
										<span className="tag">{hour[0]} h {hour[1]} min</span>
										<span className="tag">{this.state.moviesList[i]["publish_year"]}</span>
										<span className="tag"><b>{this.state.moviesList[i]["maturity_rating"]}+</b></span>
									</div>
								</Link>
							</div>
						);
					}
				}
			}
		}

		let data = this.props.location.state.item;
		let image = this.props.location.state.item["thumbnail"];
		let x = image.split(' ').join('%20');

		let hour = this.props.location.state.item["duration"].split('.');


		let details =
		{
			"id": this.props.location.state.item["movie_id"],
			"type": 1,
			"rating": this.props.location.state.item["ratings"],
		}

		console.log(crew.length);
		console.log("crew");

		return (
			<div>
				<NavigationBar />
				<div className="banner-wrapper" style={{fontFamily: "Montserrat"}}>
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="banner-wrap justify-content-between align-items-center">
									<div className="left-wrap">
										{data["amount"] === "0" ? null : <span className="rnd">PREMIUM</span>}
										<h2>{data["movie_title"]}</h2>
										<span className="tag">{data["publish_year"]}</span>
										<span className="tag"><b>HD</b></span>
										<span className="tag"><b>{data["maturity_rating"]}+</b></span>
										<span className="tag">{hour[0]} hours {hour[1]} min</span>
										<p>{data["description"]}</p>

										{
											data["amount"] == 0 
											? this.state.isLoggedIn 
											    ? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: this.props.location.state.item}}}><img src="images/play.png" alt=""  />Watch now</Link> 
											    : <SignInPopup />
											: this.state.isPaid === true 
												? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: this.props.location.state.item}}}><img src="images/play.png" alt=""  />Watch now</Link> 
												:<PayPopup data={data}/>
										}

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
										<div className="icon-bttn">
											<StarRating details={details} />
										</div>

									</div>
									<div className="right-wrap" style={{ backgroundImage: `url(${x})` }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
								</div>
							</div>
						</div>

						{crew === null || crew.length === 0 ? null : <div className="container slide-wrapper" style={{ backgroundColor: "#1A2236", paddingTop: "50px" }}>
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

						<div className="container slide-wrapper slide-wrapper-shadow" style={{ backgroundColor: "transparent", paddingTop: "50px" }}>
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