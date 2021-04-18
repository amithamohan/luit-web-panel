import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';


class MusicCard extends Component
{
	options = 
	{
		items: 4,
		margin: 10,
		loop: true,
		autoplay: true
	};

	constructor(props)
	{
		super(props);
	}
	
	render()
	{
		const cards = [];

		for (let i = 0; i < this.props.musicList.length; i++)
		{
			const music = this.props.musicList[i];

			if (music !== undefined)
			{
				cards.push(
				<div key={i}>
					<a className="slide-one" href="/detailed_page" style={{height: "430px"}}>
						<div className="slide-image">
							<img src={music["poster"]} alt={music["title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
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