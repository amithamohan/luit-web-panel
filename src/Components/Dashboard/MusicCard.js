// import { Button } from 'antd';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import { message } from 'antd';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import Server from '../APIs/Server';
class MusicCard extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isAdded: false,
			selectedId: ''
		}
	}

	options =
		{
			items: 5,
			margin: 10,
			nav: true,
			loop: true,
			autoplay: true
		};

	async addToWishlist(i) {
		console.log("done");
		let userId = 999;
		let type = 1;
		let itemId = i;

		let response = await Server.addToWishlist(userId, type, itemId);

		if (response["response"] === "success") {
			message.success('Added to wishlist');
			this.setState({ isAdded: true, selectedId: i });
		}
		else {
			message.info('Already added');
		}
	}

	render() {
		const cards = [];

		for (let i = 0; i < this.props.musicList.length; i++) {
			const music = this.props.musicList[i];
			//console.log(music)

			let hour = this.props.musicList[i]["duration"].split('.');

			if (music !== undefined) {
				cards.push(
					<div className="owl-items" key={i}>
						<div className="slide-one" style={{ height: "430px" }}>
							<Link className="slide-image" to={{ pathname: "/music_detailed_page", params: { item: this.props.musicList[i] } }} style={{ display: "flex", justifyContent: "center" }}>
								<img src={music["thumbnail"]} alt={music["title"]} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
							</Link>
							<div className="slide-content">
								<h2>{music["title"]}
<<<<<<< HEAD
									{this.state.visible ? <IconButton style={{ color: "#fff", fontSize: 30,  }} onClick={e => {this.addToWishlist(music["id"]) }} aria-label="reqind">
									{
										music["status"] === "Added" ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>
									}
									</IconButton> : null}</h2>								
=======
									<IconButton style={{ color: "#fff", fontSize: 30 }} onClick={e => this.addToWishlist(music["id"])} aria-label="reqind">
										{
											this.state.isAdded ? this.state.selectedId === music["id"] ?
												<CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>
												: <AddIcon fontSize="inherit"></AddIcon>
										}
									</IconButton></h2>
>>>>>>> task/addingWishList
								<div className="tag"> Duration: {hour[0]} mins {hour[1]} sec</div>
								<span className="tag">Year: {music["publish_year"]}</span>
								<span className="tag">Rating: {music["ratings"]}</span>
								<span className="tag"><b>{music["maturity_rating"]}+</b></span>
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