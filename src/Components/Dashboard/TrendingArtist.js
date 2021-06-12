import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// let s;
class TrendingArtist extends Component 
{
	// constructor(props){
	// 	super(props)
	// 	s = true;
	// 	if(window.innerWidth < 580)
	// 		{
	// 			s = false
	// 		}
	// 		console.log(s)
	// }
	options =
		{
			//nav: true,
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
				500:{
					items:2
				},
				700:{
					items:3
				},
				900:{
					items:4
				},
				1025:{
					items:5
				}
			}
		};

		// componentDidMount()
		// {
		// 	// this.state.s = true
		// 	// console.log(s)
		// 	// if(window.innerWidth < 580)
		// 	// {
		// 	// 	// this.setState({ sideNav: true})
		// 	// 	s = false
		// 	// }
		// 	// console.log(s)
		// }

	render() {
		const cards = [];
		for (let i = 0; i < this.props.trendingArtist.length; i++) {
			const actors = this.props.trendingArtist[i];

			if (actors !== undefined) {
				cards.push(
					<div key={i}>
						<center>
							<Link to={{ pathname: "/view_all", state: { item: this.props.trendingArtist[i] } }}>
								<div style={{ border: "2px solid yellow", backgroundColor: "#222", height: "170px", width: "170px", borderRadius: "300px", backgroundImage: `url(${actors['actor_image']})`, backgroundSize: "250px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
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
					<div className="content">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-1" style={{fontFamily: "Montserrat", marginLeft: "-1vw"}}>
								<h2>Trending Artist</h2>
							</div>
						</div>
						<div className="row">
                    	<div style={{width: "91%"}}>
						{cards.length && (
							<OwlCarousel options={this.options}>
								{
									cards
								}
							</OwlCarousel>
						)}
						</div></div>
					</div>
				</div>
			</div>
		);
	}
}

export default TrendingArtist;