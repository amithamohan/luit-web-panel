import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';


class MusicCard extends Component
{
	constructor(props)
	{
		super()
	}
	render()
	{
		const cards = [];

		console.log("PROPS");
		console.log(this.props.musicList);

		for (let i = 0; i < this.props.musicList.length; i++)
		{
			const music = this.props.musicList[i];

			if (music !== undefined)
			{
				cards.push(
				<div className="owl-items" key={i}>
					<a className="slide-one" href="/detailed_page">
						<div className="slide-image">
							<img src="http://release.luit.co.in/app-assets/images/portrait/small/avatar-s-19.png" alt="" />
						</div>
						<div className="slide-content">
							<h2>{music["title"]}<img src="images/plus.png" className="add-wishlist" alt="" /></h2>
							<p>{music["description"]}</p>
							<span className="tag">{music["duration"]}</span>
							<span className="tag">{music["publish_year"]}</span>
							<span className="tag"><b>{music["maturity_rating"]}</b></span>
						</div>
					</a>
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
							<h2>Latest Music</h2>
							</div>
						</div>
						<OwlCarousel>
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