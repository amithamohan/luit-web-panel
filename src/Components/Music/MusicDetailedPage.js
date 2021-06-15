import React, { Component } from "react";
import Footer from "../Dashboard/Footer";
import NavigationBar from "../Dashboard/NavBar";
import Server from '../APIs/Server';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { message } from 'antd';
import { Card } from 'antd';
import CheckIcon from '@material-ui/icons/Check';
import ReactStars from "react-rating-stars-component";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import StarRating from '../Dashboard/StarRating';
import star from "react-rating-stars-component/dist/star";
import PayPopup from "../Utlities/PopUp";

const { Meta } = Card;

const ratingChanged = (newRating) => {
	console.log(newRating);
};

class MusicDetailedPage extends Component {

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
		items: 5,
		nav: true,
		loop: false,
		autoplay: false,
	}

	constructor(props) {
		super(props);

		this.state =
		{
			actors: [],
			allVideos: [],
			musicList: [],
			isPaid : false,
			userId:'',
			firstPage: true,
			item: ''
		}

		this.getActors = this.getActors.bind(this);
		this.getAllMusic = this.getAllMusic.bind(this);
		this.checkPayment = this.checkPayment.bind(this);
	}

	componentDidMount() 
	{
		if(this.props.location.state === undefined)
		{
			this.setState({item:(JSON.parse(localStorage.getItem("item")))})
		} else 
		{
			localStorage.setItem("item", JSON.stringify(this.props.location.state["item"]))
			this.setState({item:(JSON.parse(localStorage.getItem("item")))})
		}
		
		this.getUserDetails();
		this.getActors();
		this.getAllMusic();
		this.checkPayment();
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
	refreshWatchButton (music){
		this.setState({firstPage:false})
		localStorage.setItem("item", JSON.stringify(music))
		this.setState({item:(JSON.parse(localStorage.getItem("item")))})
		
		setTimeout(()=>
		{
			this.isAddedToWishList(this.state.userId, music["id"]);
			this.checkPayment(this.state.userId);
		},1000)
	}

	async checkPayment(id)
	{
		let music = JSON.parse(localStorage.getItem("item"));
		let contentType = music["type"] === "movie" ? 1 : 2;
		let contentId = contentType === 1 ? music["movie_id"] : music["id"];
		// let data = JSON.parse(localStorage.getItem("user"));
		// let userId = data["id"];

		let response = await Server.checkPaymentStatus(contentType, contentId, this.state.userId);

		console.log(response);

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

		console.log(this.state.actors);
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

		this.setState({ musicList: result, allVideos: result });
	}

	async isAddedToWishList(userId, selectedId)
	{
		
		let type = 2;
		let music = JSON.parse(localStorage.getItem("item"));
		let id = this.state.firstPage ? music["id"] : selectedId;
		
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
	async addToWishlist(i) {
		//let userId = 4;
		let type = 2;
		let itemId = i;
		let response = await Server.addToWishlist(this.state.userId, type, itemId);

		if (response["response"] === "success") 
		{
			message.success('Added to wishlist');
			this.isAddedToWishList(this.state.userId, itemId)
		}
		else {
			message.info('Already added');
		}
	}

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

			if (this.state.actors !== undefined) 
			{
				for (let j = 0; j < this.state.item["actors"].length; j++) 
				{
					for (let i = 0; i < this.state.actors.length; i++) 
					{
						if (this.state.item["actors"][j] === this.state.actors[i]["name"]) 
						{
							crew.push(
								<div key={i} >
									<center>
									<div className="owl-items" style={{ display: "block", border: "2px solid yellow", backgroundColor: "#222", height: "190px", width: "190px", borderRadius: "50%", backgroundImage: `url(${this.state.actors[i]["image"]})`, backgroundSize: "250px", backgroundPosition: "center" }}></div><br />
									<span style={{ color: "white", }}>{this.state.actors[i]["name"]}</span>
									</center>
								</div>
							);
						}
					}
				}
			}

			
			if (this.state.musicList !== undefined) 
			{
				for (let j = 0; j < this.state.item["genre"].length; j++) 
				{
					for (let i = 0; i < this.state.musicList.length; i++) 
					{
						let hour = this.state.musicList[i]["duration"].split('.');

						if (this.state.item["genre"][j] === this.state.musicList[i]["genre"][0]) 
						{
							moreLikeThis.push(
								<div className="owl-items" key={i} >
									<div onClick={()=>{this.refreshWatchButton(this.state.musicList[i])}}>
									<Link className="slide-one" to={{ pathname: "/music_detailed_page", state: { item: this.state.musicList[i] } }} style={{ height: "430px" }}>
										<div className="slide-image">
											<img src={this.state.musicList[i]["thumbnail"]} alt={this.state.musicList[i]["title"]} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
										</div>
										<div className="slide-content">
											<h2>{this.state.musicList[i]["title"]}</h2>
											<p style={{fontFamily: "Montserrat"}}>{this.state.musicList[i]["description"]}</p>
											<span className="tag">{hour[0]} mins {hour[1]} sec</span>
											<span className="tag">{this.state.musicList[i]["publish_year"]}</span>
											<span className="tag"><b>{this.state.musicList[i]["maturity_rating"]}+</b></span>
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

			hour = this.state.item["duration"].split('.');

			details = {
				"id": this.state.item["id"],
				"type": 2,
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
										
										<h2>{data["title"]}</h2>
										<span className="tag">{data["publish_year"]}</span>
										<span className="tag"><b>HD</b></span>
										<span className="tag"><b>{data["maturity_rating"]}+</b></span>
										<span className="tag">{hour[0]} mins {hour[1]} min</span>
										<p>{data["description"]}</p>
										{
											data["amount"] == 0  
												? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: this.state.item}}}><img src="images/play.png" alt=""  />Watch now</Link> 
												: this.state.isPaid === false
													? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: this.state.item}}}><img src="images/play.png" alt=""  />Watch now</Link> 
													: <PayPopup data={data}/>
										}

										<IconButton style={{ color: "#fff", fontSize: 30 }} onClick={e => this.addToWishlist(data["id"])} aria-label="reqind">
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
									<div className="right-wrap" style={{ backgroundImage: `url(${data['thumbnail']})` }} />
								</div>
							}
								
							</div>
						</div>

						<br />

						<div className="container slide-wrapper" style={{ backgroundColor: "transparent" }}>
							<div className="row">
								<div className="col-sm-6 text-left mb-4 mt-1">
									<h2>Crew</h2>
								</div>
							</div>
							{
								crew.length && (
									<OwlCarousel options={this.crewOptions}>
										{
											crew
										}
									</OwlCarousel>)
							}
						</div>

						<div className="container slide-wrapper slide-wrapper-shadow" style={{ backgroundColor: "transparent" }}>
							<div className="row">
								<div className="col-sm-6 text-left mb-4 mt-1">
									<h2>More Like This</h2>
								</div>
							</div>
							
							{
								moreLikeThis.length && (
									<OwlCarousel options={this.options}>
										{
											moreLikeThis
										}
									</OwlCarousel>)

							}
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default MusicDetailedPage;