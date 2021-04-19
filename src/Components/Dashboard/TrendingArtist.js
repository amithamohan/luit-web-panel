import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';

class TrendingArtist extends Component
{
	options = 
	{
		items: 4,
		margin: 5,
		nav: true,
		loop: true,
		autoplay: true
	};

	render()
	{
		const cards = [];

		for (let i = 0; i < this.props.trendingArtist.length; i++)
		{
			const actors = this.props.trendingArtist[i];

			if (actors !== undefined)
			{
				cards.push(
					<div key={i}>
						<div className="owl-items" style={{display: "block", border: "2px solid yellow", backgroundColor: "#222", height: "190px", width: "210px" ,borderRadius: "50%", backgroundImage: `url(${actors['actor_image']})`, backgroundSize: "250px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
						<center><br /><span style={{color: "white"}}>{actors["actor_name"]}</span></center>
					</div>
				);
			}
		}

		return(
			<div>
				<div className="category-wrapper slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-1">
								<h2>Watch in Your Language</h2>
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

export default TrendingArtist;