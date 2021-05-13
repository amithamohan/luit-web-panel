import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class MoviesByLanguages extends Component {
	options =
		{
			items: 4,
			margin: 5,
			nav: true,
			loop: true,
			autoplay: true,
			startPosition: 2,
			rewind: false
		};

	render() 
	{
		const cards = [];

		for (let i = 0; i < this.props.languages.length; i++) {
			const language = this.props.languages[i];

			if (language !== undefined) {
				cards.push(
					<div key={i}>
						<center>
							<Link to={{ pathname: "/view_all", params: { item: this.props.languages[i] } }}>
								<div className="owl-items" style={{ border: "4px solid yellow", backgroundColor: "#222", width: "200px", height: "200px", borderRadius: "50%", backgroundImage: `url(${language['thumbnail_link']})`, backgroundSize: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
							</Link>
						</center>
						<center><br /><span style={{ color: "white" }}>{language["lang_name"]}</span></center>
					</div>
				);
			}
		}

		return (
			<div>
				<div className="category-wrapper slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-lg-12 col-md-6 col-sm-6 mt-1" style={{fontFamily: "Montserrat"}}>
								<h2>Watch in Your Language</h2>
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

export default MoviesByLanguages;