import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class MoviesByLanguages extends Component 
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
			items: 4,
			margin: 1,
			nav: this.sideNav,
			//loop: true,
			autoplay: true,
			startPosition: 2,
			rewind: false,
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

	render() 
	{
		const cards = [];

		for (let i = 0; i < this.props.languages.length; i++) {
			const language = this.props.languages[i];

			if (language !== undefined) {
				cards.push(
					<div key={i}>
						
						<Link to={{ pathname: "/view_all", state: { item: this.props.languages[i] } }} style={{textDecoration:"none"}}>
							<div style={{ background: "linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)", width: "220px", height: "120px", borderRadius: "9px", }}>
							<center><span style={{ color: "black", lineHeight:"19vh" }}>{language["lang_name"]}</span></center>
							</div>
						</Link>
					
					</div>
				);
			}
		}

		return (
			<div>
				<div className="category-wrapper slide-wrapper" style={{fontFamily: "Montserrat"}}>
					<div className="content">
						<div className="row">
							<div className="col-sm-6 col-lg-12 col-md-6 col-sm-6 mb-4 mt-4" style={{fontFamily: "Montserrat", marginLeft: "-1vw"}}>
								<h2>Watch in Your Language</h2>
							</div>
						</div>

						<div className="row">
                    	<div style={{width: "93%"}}>
						{cards.length && (
							<OwlCarousel options={this.options}>
								{
									cards
								}
							</OwlCarousel>
						)}</div></div>

					</div>
				</div>
			</div>
		);
	}
}

export default MoviesByLanguages;