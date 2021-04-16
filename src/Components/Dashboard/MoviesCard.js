import React, {Component} from 'react';

class MoviesCard extends Component
{
	constructor(props)
	{
		super()
	}
	render()
	{
		const cards = [];

		for(let i = 0; i < 10; i++)
		{
			cards.push
			(
				<div className="owl-items" key={i}>
					<a className="slide-one" href="/detailed_page">
						<div className="slide-image"><img src="https://release.luit.co.in/uploads/movie_thumbnail/thumb_1609755203JONBAI%201" alt="" /></div>
						<div className="slide-content">
						<h2>Movie<img src="images/plus.png" className="add-wishlist" alt="" /></h2>
						<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
						<span className="tag">2 h 20 min</span>
						<span className="tag">2020</span>
						<span className="tag"><b>16+</b></span>
						</div>
					</a>
				</div>
			);
		}
		return(
			<div>
				<div className="slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-4">
							<h2>Latest Movies</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
							<div className="slide-slider owl-carousel owl-theme">
								{
									cards
								}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MoviesCard;