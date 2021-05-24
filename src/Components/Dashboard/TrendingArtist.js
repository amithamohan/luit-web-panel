import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class TrendingArtist extends Component 
{

	constructor(props)
	{
		super(props)
		this.state = 
		{
			sideNav: true,
		}
	}
	options =
		{
			items: 5,
			margin: 5,
			nav: this.sideNav,
			navText: ["<img src='images/left.png'/>", "<img src='images/right.png'/>"],
			loop: true,
			autoplay: true,
			startPosition: 0,
			rewind: true,
			dots: false,
			responsive:{
				0:{
					items:1
				},
				340:{
					items:2
				},
				700:{
					items:3
				},
				1000:{
					items:4
				}
			}
		};

		componentDidMount()
		{
			if(window.innerWidth < 580)
			{
				this.setState({ sideNav: true})
			}
		}

	render() {
		const cards = [];

		for (let i = 0; i < this.props.trendingArtist.length; i++) {
			const actors = this.props.trendingArtist[i];

			if (actors !== undefined) {
				cards.push(
					<div key={i}>
						<center>
							<Link to={{ pathname: "/view_all", state: { item: this.props.trendingArtist[i] } }}>
								<div className="owl-items" style={{ display: "block", border: "2px solid yellow", backgroundColor: "#222", height: "170px", width: "170px", borderRadius: "300px", backgroundImage: `url(${actors['actor_image']})`, backgroundSize: "250px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
							</Link>
							<br /><span style={{ color: "white" }}>{actors["actor_name"]}</span>
						</center>
					</div>
				);
			}
		}

		return (
			<div>
				<div className="category-wrapper slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-1" style={{fontFamily: "Montserrat"}}>
								<h2>Trending Artist</h2>
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

export default TrendingArtist;