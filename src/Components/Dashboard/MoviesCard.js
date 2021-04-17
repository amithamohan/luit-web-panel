import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';

class MoviesCard extends Component
{
	options = 
	{
		items: 4,
		margin: 10,
		nav: true,
		loop: true,
		autoplay: true
	};

	render()
	{
		const cards = [];

		for (let i = 0; i < this.props.moviesList.length; i++)
		{
			const movie = this.props.moviesList[i];

			if (movie !== undefined)
			{
				cards.push(
				<div key={i}>
					<a className="slide-one" href="/detailed_page" style={{height: "430px"}}>
						<div className="slide-image">
							<img src={movie["poster"]} alt={movie["movie_title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
						</div>
						<div className="slide-content">
							<h2>{movie["movie_title"]}<img src="images/plus.png" className="add-wishlist" alt="" /></h2>
							<p>{movie["description"]}</p>
							<span className="tag">{movie["duration"]}</span>
							<span className="tag">{movie["publish_year"]}</span>
							<span className="tag"><b>{movie["maturity_rating"]}</b></span>
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
							<h2>Latest Movies</h2>
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

export default MoviesCard;