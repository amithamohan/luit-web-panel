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
				900:{
					items:4
				},
				1025:{
					items:5
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
					<div key={i} >
						<center>
						<Link to={{ pathname: "/view_all", state: { item: this.props.languages[i] } }}>
							<div  style={{ border: "4px solid yellow", backgroundColor: "#222", width: "200px", height: "200px", borderRadius:"50%", backgroundImage: `url(${language['thumbnail_link']})`, backgroundSize: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
						</Link>
						</center>
						<center><br /><span style={{ color: "white" }}>{language["lang_name"]}</span></center>
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
                    	<div style={{width: "91%"}}>
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