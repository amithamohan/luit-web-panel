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
		const circularAvatar = [];

		for (let i = 0; i < this.props.trendingArtist.length; i++)
		{
			const actors = this.props.trendingArtist[i];

			console.log(actors);

			if (actors !== undefined)
			{
				circularAvatar.push
				(
					<div key={i}>
						<div className="team-slider-full owl-carousel owl-theme">
							<div className="owl-items"><a href="/" className="crew-wrap">
							<img src={actors["actor_image"]} alt={actors["actor_image"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
							<span>{actors["actor_name"]}</span></a></div>
						</div>
					</div>
				);
			}
		}

		return(
			<div>
				<div className="slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-1">
							<h2>Trending Artists</h2>
							</div>
						</div>
						<OwlCarousel options={this.options}>
						{
							circularAvatar
						}
						</OwlCarousel>
					</div>
				</div>
			</div>
		);
	}
}

export default TrendingArtist;