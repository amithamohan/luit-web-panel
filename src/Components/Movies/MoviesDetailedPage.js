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
import { ThreeSixty } from "@material-ui/icons";


class MoviesDetailedPage extends Component
{
	options =
	{
		items: 4,
		margin: 5,
		// itemsDesktop: [1000, 5],
		//nav: true,
		loop: true,
		dots: false,
		//navText:["<img src='images/left.png'/>","<img src='images/right.png'/>"],
		autoplay: true,
	};

	crewOption =
	{
		items: 8,
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
			userId:'',
			firstPage: true,
			item: ''
		}

		this.getActors = this.getActors.bind(this);
		this.checkPayment = this.checkPayment.bind(this);

	}

	
	componentDidMount()
	{
		if(this.props.location.state === undefined)
		{
			this.setState({item:(JSON.parse(localStorage.getItem("item")))})
		} else 
		{
			localStorage.setItem("item", JSON.stringify(this.props.location.state.item))
			this.setState({item:(JSON.parse(localStorage.getItem("item")))})
		}
		
		this.getUserDetails();
		this.getActors();
		this.getAllMovies();
		
	}

	async getUserDetails()
    {
		let data = JSON.parse(localStorage.getItem("user"));
		
		if(data != null){
			this.setState({userId:data["id"]})
			this.setState({ isLoggedIn: true })
			this.isAddedToWishList(data["id"]);
		    this.checkPayment(data["id"]);
		}
    }
	refreshWatchButton (movie){
		this.setState({firstPage:false})
		localStorage.setItem("item", JSON.stringify(movie))
		this.setState({item:(JSON.parse(localStorage.getItem("item")))})
		
		setTimeout(()=>
		{
			this.isAddedToWishList(this.state.userId, movie["movie_id"]);
			this.checkPayment(this.state.userId);
		},1000)
	}

	async checkPayment(id)
	{
		let movie = JSON.parse(localStorage.getItem("item"));
		let contentType = movie["type"] === "movie" ? 1 : 2;
		let contentId = contentType === 1 ? movie["movie_id"] : movie["id"];


			let response = await Server.checkPaymentStatus(contentType, contentId, id);

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

	async isAddedToWishList(userId, selectedId)
	{
		
		let type = 1;
		let movie = JSON.parse(localStorage.getItem("item"));
		let id = this.state.firstPage ? movie["movie_id"] : selectedId;
		
		let response = await Server.wishlistIsPresent(type, id, userId);
		console.log(response)
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
	
		let type = 1;
		let itemId = i;

		console.log("success");
		let response = await Server.addToWishlist(this.state.userId, type, itemId);

		if (response["response"] === "success")
		{
			message.success('Added to wishlist');
			this.isAddedToWishList(this.state.userId, itemId)
		}
		else
		{
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
		const moreLikeThis = [];
		let data
		let x
		let hour
		let details

		if(this.state.item !== '') 
		{
			
			console.log(this.props.location.state)
			

			if (this.state.actors !== undefined) {
				for (let j = 0; j < this.state.item["actors"].length; j++) {
					for (let i = 0; i < this.state.actors.length; i++) {
						if (this.state.item["actors"][j] === this.state.actors[i]["name"]) {
							crew.push(
								<div key={i}>
									<center>
										<div style={{ border: "2px solid yellow", backgroundColor: "#222", height: "190px", width: "190px", borderRadius: "50%", backgroundImage: `url(${this.state.actors[i]["image"]})`, backgroundSize: "250px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
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


			
			if (this.state.moviesList !== undefined)
			{
				// history.replace("/demo/luitWeb/build/");

				for (let j = 0; j < this.state.item["genre"].length; j++)
				{
					for (let i = 0; i < this.state.moviesList.length; i++)
					{
						let hour = this.state.moviesList[i]["duration"].split('.');

						if (this.state.item["genre"][j] === this.state.moviesList[i]["genre"][0])
						{
							moreLikeThis.push(
								<div className="owl-items" key={i} >
									<div onClick={()=>{this.refreshWatchButton(this.state.moviesList[i])}}>
									<Link className="slide-one" to={{ pathname: "/movies_detailed_page", state: { item: this.state.moviesList[i] } }} style={{ height: "430px" }}>
										<div className="slide-image">
											<img src={this.state.moviesList[i]["poster"]} alt={this.state.moviesList[i]["title"]} style={{ height: "270px" }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
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
								</div>
							);
						}
					}
				}
			}

			data = this.state.item;
			// let image;
			let image = this.state.item["banner"];
			x = image.split(' ').join('%20');
			//x = "https://release.luit.co.in/uploads/movie_poster/1623934473Lefafa 1 (banner).jpg"
			
			console.log(image)
			console.log(x)

			hour = this.state.item["duration"].split('.');


			details =
			{
				"id": this.state.item["movie_id"],
				"type": 1,
				"rating": this.state.item["ratings"],
			}

		}


		return (
			<div>
				<NavigationBar/>
				<div className="banner-wrapper" style={{fontFamily: "Montserrat"}}>
					<div className="content">
						<div className="row" style={{width: "90vw", marginLeft: "-2vw"}}>
							<div className="col-sm-12">
								{
									data === undefined ? null :
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
											this.state.isLoggedIn 
											? data["amount"] == 0 
											    ? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: this.state.item}}}><img src="images/play.png" alt=""  />Watch now</Link> 
											    :  this.state.isPaid === true 
												? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: this.state.item}}}><img src="images/play.png" alt=""  />Watch now</Link> 
												: <PayPopup data={data}/>
											: <SignInPopup />
										}
										<IconButton style={{ color: "#fff", fontSize: 30 }} onClick={e => this.addToWishlist(data["movie_id"])} aria-label="reqind">
											{this.state.isAdded ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>}
										</IconButton>

										
										<IconButton>
										<div className="icon-bttn ">
										<i className="ti-sharethis text-white "></i>
											<div className="share-icons">
												<a href="#"><i className="ti-facebook"></i></a>
												<a href="#"><i className="ti-twitter-alt"></i></a>
												<a href="#"><i className="mr-0 ti-pinterest"></i></a>
											</div>
											</div>
										</IconButton>
											
										
										<IconButton style={{ color: "#fff", fontSize: 30 }} aria-label="reqind">
											<StarRating details={details} />
										</IconButton>

									</div>
									{/* <div className="right-wrap" style={{ backgroundImage: `url(${x})` }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} /> */}
									<div className="right-wrap">
										<img src={this.state.item["banner"]} alt={this.state.item["title"]} />
									</div>
								</div>
								}
							</div>	
						</div>
						</div>
				</div>

						{crew === null ? null : <div className="category-wrapper slide-wrapper" style={{fontFamily: "Montserrat", marginTop: "10vh"}}>
					<div className="content">
							<div className="col-sm-6 col-lg-11 col-md-6 col-sm-6 mb-4 mt-4" style={{fontFamily: "Montserrat", marginLeft: "-1vw"}}>
								<h2>Watch in Your Language</h2>
							</div>
			
                    	<div style={{width: "51%"}}>
						{crew.length && (
							<OwlCarousel options={this.crewOptions}>
								{
									crew
								}
							</OwlCarousel>
						)}</div>

					</div>
				</div>}

						<div className="slide-wrapper" style={{ backgroundColor: "transparent", marginTop: "10vh" }}>
							<div className="content" >
							<div className="col-sm-6 text-left mb-4 mt-2" style={{marginLeft: "-1vw"}}>
								<h2>More Like This</h2>
							</div>
							<div style={{width: "92%"}}>
							{ crew === null ? null :
								moreLikeThis.length && (
								<OwlCarousel options={this.options}>
									{
										moreLikeThis
									}
								</OwlCarousel>
							)}
							</div>
							</div>

						</div>

			</div>
		);
	}
}

export default MoviesDetailedPage;