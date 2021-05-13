// import { Button } from 'antd';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MusicCard extends Component {

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

	render() {
		const cards = [];

		for (let i = 0; i < this.props.musicList.length; i++) {
			const music = this.props.musicList[i];

			let hour = this.props.musicList[i]["duration"].split('.');

			if (music !== undefined) {
				cards.push(
					<div className="owl-items" key={i}>
						<Link className="slide-one" to={{ pathname: "/music_detailed_page", params: { item: this.props.musicList[i] } }} style={{ height: "430px" }}>
							<div className="slide-image">
								<img src={music["thumbnail"]} alt={music["title"]} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
							</div>
							<div className="slide-content" style={{fontFamily: "Montserrat"}}>
								<h2>{music["title"]}</h2>
								<p>{music["description"]} </p>
								<span class="tag">{hour[0]} mins {hour[1]} sec</span>
								<span class="tag">{music["publish_year"]}</span>
								<span class="tag"><b>{music["maturity_rating"]}+</b></span>
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