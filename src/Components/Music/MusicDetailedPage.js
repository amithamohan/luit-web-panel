import { Component } from "react";
import Footer from "../Dashboard/Footer";
import NavigationBar from "../Dashboard/NavBar";
import Server from '../APIs/Server';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { message } from 'antd';
import { Card } from 'antd';
import ReactStars from "react-rating-stars-component";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import StarRating from '../Dashboard/StarRating';
import star from "react-rating-stars-component/dist/star";

const { Meta } = Card;

const ratingChanged = (newRating) =>
{
    console.log(newRating);
};

class MusicDetailedPage extends Component
{

	options =
	{
		items: 5,
		margin: 5,
		nav: true,
		loop: false,
		autoplay: false
	};

	cardOptions =
	{
		items: 5,
		margin: 5,
		nav: true,
		loop: true,
		autoplay: true
	};

	constructor(props)
	{
		super(props);

		this.state =
		{
			actors: [],
			allVideos: [],
			musicList: [],
		}

		this.getActors = this.getActors.bind(this);
		this.getAllMusic = this.getAllMusic.bind(this);
	}

	componentDidMount()
	{
		this.getActors();
		this.getAllMusic();
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

		this.setState({actors: actorsList});

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

		this.setState({musicList: result, allVideos: result});
	}

	async addToWishlist(i)
	{
		let userId = 4;
		let type = 2;
		let itemId = i;
		let response = await Server.addToWishlist(userId, type, itemId);

		if(response["response"] === "success")
		{
			console.log("success");
			message.success('Added to wishlist');
		}
		else
		{
			message.info('Already added');
			// alert("Already added to wishlist");
		}
	}

	render()
	{
		const crew = [];
		if(this.state.actors !== undefined)
		{
			for(let j = 0; j < this.props.location.params["item"]["actors"].length; j++)
			{
				for(let i = 0; i < this.state.actors.length; i++)
				{
					if(this.props.location.params["item"]["actors"][j] === this.state.actors[i]["name"])
					{
						crew.push(
							<div key={i}>
								<div className="owl-items" style={{display: "block", border: "2px solid yellow", backgroundColor: "#222", height: "190px", width: "210px" ,borderRadius: "50%", backgroundImage: `url(${this.state.actors[i]["image"]})`, backgroundSize: "250px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
								<center><br /><span style={{color: "white"}}>{this.state.actors[i]["name"]}</span></center>
							</div>
						);
					}
				}
			}
		}

		const moreLikeThis = [];
		if(this.state.musicList !== undefined)
		{
			for(let j = 0; j < this.props.location.params["item"]["genre"].length; j++)
			{
				for(let i = 0; i < this.state.musicList.length; i++)
				{
					if(this.props.location.params["item"]["genre"][j] === this.state.musicList[i]["genre"][0])
					{
						moreLikeThis.push(
							<div className="owl-items"  key={i} >
								<Link className="slide-one" to={{pathname: "/music_detailed_page", params:{item: this.state.musicList[i]}}} style={{height: "430px"}}>
									<div className="slide-image">
										<img src={this.state.musicList[i]["thumbnail"]} alt={this.state.musicList[i]["title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
									</div>
									<div className="slide-content">
										<h2>{this.state.musicList[i]["title"]}<img src="images/plus.png" className="add-wishlist" alt="" /></h2>
										<p>{this.state.musicList[i]["description"]}</p>
										<span className="tag">{this.state.musicList[i]["duration"]}</span>
										<span className="tag">{this.state.musicList[i]["publish_year"]}</span>
										<span className="tag"><b>{this.state.musicList[i]["maturity_rating"]}</b></span>
									</div>
								</Link>
							</div>
						);
					}
				}
			}
		}


		let data = this.props.location.params["item"];

		let hour = this.props.location.params["item"]["duration"].split('.');

		let details = {
			"id": this.props.location.params["item"]["id"],
			"type": 2,
			"rating": this.props.location.params["item"]["ratings"],
		}

		return(
			<div>
				<NavigationBar/>
				<div className="banner-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="banner-wrap justify-content-between align-items-center">
									<div className="left-wrap">
										<span className="r1nd">

											<StarRating details={details}/>
											</span>
										<h2>{data["title"]}</h2>

										<span className="tag"><b>{data["audio_languages"]}</b></span>
										<span className="tag">{data["publish_year"]}</span>
										<span className="tag"><b>HD</b></span>
										<span className="tag"><b>{data["maturity_rating"]}+</b></span>
										<span className="tag">{hour[0]} mins {hour[1]} sec</span>
										<span className="tag">{data["genre"]}</span>

										<p>{data["description"]}</p>

										<Link className="btn btn-lg" to={{pathname: "/video_player", params:{item: this.props.location.params["item"]}}}><img src="images/play.png" alt="" />Watch now</Link>

										<IconButton  style={{color: "white"}}>
											<AddIcon fontSize="large"></AddIcon>
										</IconButton>

										<div className="icon-bttn">
											<i className="ti-sharethis text-white mr-4" />
										</div>
									</div>
									<div className="right-wrap" style={{backgroundImage: `url(${data['thumbnail']})`}} />
								</div>
							</div>
						</div>

						<div></div>
						<div className="container" style={{paddingTop: "20px"}}>
							<div className="row">
								<div className="col-sm-6 text-left mb-4 mt-1">
									<h2>Crew</h2>
								</div>
							</div>
							<OwlCarousel options={this.options}>
								{
									crew
								}
							</OwlCarousel>3000
						</div>

						<div className="slide-wrapper">
							<div className="row">
								<div className="col-sm-6 text-left mb-4 mt-4">
									<h2>More Like This</h2>
								</div>
							</div>
							<OwlCarousel options={this.options}>
								{
									moreLikeThis
								}
							</OwlCarousel>
						</div>

					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default MusicDetailedPage;