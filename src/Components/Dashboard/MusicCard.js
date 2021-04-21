import { Button } from 'antd';
import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MusicCard extends Component
{
	options = 
	{
		items: 5,
		margin: 10,
		nav: true,
		loop: true,
		autoplay: true
	};

	render()
	{
		const cards = [];

		for (let i = 0; i < this.props.musicList.length; i++)
		{
			const music = this.props.musicList[i];

			if (music !== undefined)
			{
				cards.push(
				<div className="owl-items" key={i}>
					<Link className="slide-one" to={{pathname: "/music_detailed_page", params:{item: this.props.musicList[i]}}} style={{height: "430px"}}>
						<div className="slide-image">
						<img src={music["thumbnail"]} alt={music["title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
						</div>
						<div className="slide-content">
							<h2>{music["title"]}<img src="images/plus.png" className="add-wishlist" alt="" /></h2>
							<p>{music["description"]}</p>
							<span className="tag">Duration: {music["duration"]}</span>
							<span className="tag">{music["publish_year"]}</span>
							<span className="tag">Rating: {music["ratings"]}</span>
							<span className="tag"><b>{music["maturity_rating"]}+</b></span>
						</div>
					</Link>
				</div>
			);
			}
		}

		return(
			<div>
				<div className="slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-4">
							<h2>{this.props.title}</h2>
							</div>
						</div>
						<OwlCarousel options={this.options}>
							{
								cards
							}
						</OwlCarousel>
					</div>
				</div>
			</div>
		);
	}
}

export default MusicCard;