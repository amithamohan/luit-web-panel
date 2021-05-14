// import { Button } from 'antd';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { message } from 'antd';
import Server from '../APIs/Server';
<<<<<<< HEAD

class MusicCard extends Component {

	constructor(props){
=======

class MusicCard extends Component 
{

	constructor(props)
	{
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c
		super(props);
		this.state = 
		{
			visible:false,
			userId:''
		}
	}
	options =
<<<<<<< HEAD
		{
			items: 5,
			margin: 10,
			nav: true,
			loop: true,
			autoplay: true
		};
=======
	{
		items: 4,
		margin: 5,
		itemsDesktop: [1000, 5],
		nav: true,
		navText: ["<img src='images/left.png'/>", "<img src='images/right.png'/>"],
		loop: true,
		autoplay: true,
	};
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c

		
		componentDidMount() {
			this.getUserDetails();
			this.checkWishList();
		}
<<<<<<< HEAD

	async checkWishList () {
		let type = 1;	
		for (let i = 0; i < this.props.musicList.length; i++) {
		let response = await Server.wishlistIsPresent(type, this.props.musicList[i]["id"], this.userId);
			if(response["response"] === "success"){
				this.props.musicList[i]["status"] = "Added";	
			}		
		}	
		// After changing all value of "free" it is showing icon
		this.setState({visible:true});	 
	};

	async getUserDetails() {
        let user = localStorage.getItem("user");
        let data = JSON.parse(user);
        if (data != null) {
			this.setState({userId:data["id"]});
        }
		console.log(data);
    }

=======

	async checkWishList () {
		let type = 1;	
		for (let i = 0; i < this.props.musicList.length; i++) {
		let response = await Server.wishlistIsPresent(type, this.props.musicList[i]["id"], this.userId);
			if(response["response"] === "success"){
				this.props.musicList[i]["status"] = "Added";	
			}		
		}	
		// After changing all value of "free" it is showing icon
		this.setState({visible:true});	 
	};

	async getUserDetails() {
        let user = localStorage.getItem("user");
        let data = JSON.parse(user);
        if (data != null) {
			this.setState({userId:data["id"]});
        }
		console.log(data);
    }

>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c
		async addToWishlist (i) {
			console.log("done");
			let type = 1;
			let itemId = i;
	
			let response = await Server.addToWishlist(this.userId, type, itemId);
	
			if (response["response"] === "success") {
				message.success('Added to wishlist');
			}
			else {
				message.info('Already added');
			}
			// call again 
			this.checkWishList();
			this.setState({visible:false});	
		}
<<<<<<< HEAD

=======
g
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c
	render() {
		const cards = [];

		for (let i = 0; i < this.props.musicList.length; i++) {
			const music = this.props.musicList[i];
			//console.log(music)

			let hour = this.props.musicList[i]["duration"].split('.');

			if (music !== undefined) {
				cards.push(
					<div className="owl-items" key={i}>
						<div className="slide-one"  style={{ height: "430px" }}>
							<Link className="slide-image" to={{ pathname: "/music_detailed_page", params: { item: this.props.musicList[i]}}} style={{ display: "flex", justifyContent: "center" }}>
								<img src={music["thumbnail"]} alt={music["title"]}style={{ height: "270px" }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
							</Link>
							<div className="slide-content">
								<h2>{music["title"]}
									{this.state.visible ? <IconButton style={{ color: "#fff", fontSize: 30,  }} onClick={e => {this.addToWishlist(music["id"]) }} aria-label="reqind">
									{
										music["status"] === "Added" ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>
									}
									</IconButton> : null}
<<<<<<< HEAD
									</h2>								
								<div className="tag"> Duration: {hour[0]} mins {hour[1]} sec</div>
								<span className="tag">Year: {music["publish_year"]}</span>
								<span className="tag">Rating: {music["ratings"]}</span>
								<span className="tag"><b>{music["maturity_rating"]}+</b></span>
=======
									</h2>
									<p>{music["description"]}</p>
									<span class="tag">{hour[0]} min {hour[1]} sec</span>
									<span class="tag">{music["publish_year"]}</span>
									<span class="tag"><b>{music["maturity_rating"]} +</b></span>
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c
							</div>
						</div>
					</div>
				);
			}
		}

		return (
			<div>
				<div className="slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-4">
								<h2>{this.props.title}</h2>
							</div>
						</div>
						{cards.length && (
							<OwlCarousel options={this.options}>
								{
									cards
								}
							</OwlCarousel>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default MusicCard;