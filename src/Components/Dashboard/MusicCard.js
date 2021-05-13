// import { Button } from 'antd';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MusicCard extends Component {
	options =
		{
			items: 5,
			margin: 10,
			nav: true,
			loop: true,
			autoplay: true
		};

	render() {
		const cards = [];

		for (let i = 0; i < this.props.musicList.length; i++) {
			const music = this.props.musicList[i];
			//console.log(music)

			let hour = this.props.musicList[i]["duration"].split('.');

			if (music !== undefined) {
				cards.push(
					<div className="owl-items" key={i}>
						<Link className="slide-one" to={{ pathname: "/music_detailed_page", params: { item: this.props.musicList[i] } }} style={{ height: "430px" }}>
							<div className="slide-image">
								<img src={music["thumbnail"]} alt={music["title"]} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
							</div>
							<div className="slide-content">
								<h2>{music["title"]}
									{this.state.visible ? <IconButton style={{ color: "#fff", fontSize: 30,  }} onClick={e => {this.addToWishlist(music["id"]) }} aria-label="reqind">
									{
										music["status"] === "Added" ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>
									}
									</IconButton> : null}</h2>								
								<div className="tag"> Duration: {hour[0]} mins {hour[1]} sec</div>
								<span className="tag">Year: {music["publish_year"]}</span>
								<span className="tag">Rating: {music["ratings"]}</span>
								<span className="tag"><b>{music["maturity_rating"]}+</b></span>
							</div>
						</Link>
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