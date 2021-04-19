import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';


class Slider extends Component
{
	render()
	{
		console.log(this.props.slider);

		const rows = [];

		for(let i = 0; i < 9; i++)
		{
			rows.push(
				<React.Fragment key={i}>
					<div className="left-wrap">
					<span className="rnd">PREMIUM</span>
					<h2>Mother of  <br />Brooklyn</h2>
					<span className="tag"><b>Rating</b></span>
					<span className="tag">4.0</span>
					<span className="tag"><b>Duration</b></span>
					<span className="tag">2 h 20 min</span>
					<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather. Tamanna is a YouTube pop sensation desperate to become .</p>
					<a href="/movies" className="btn btn-lg btn-video"><img src="images/play.png" alt="icn" />Watch now</a>
					</div>
					<div className="right-wrap" style={{backgroundImage: 'url(https://release.luit.co.in/uploads/music_thumbnail/default.jpg)'}} />
				</React.Fragment>
			);
		}

		return(
			<div>
				<div className="banner-wrapper">
					<div className="container">
			  			<div className="row">
							<div className="col-sm-12">
				  				<div className="banner-slider owl-carousel owl-theme">
									<div className="owl-items">
									<div className="banner-wrap justify-content-between align-items-center">
										////<OwlCarousel options={this.options}>
										{rows}
										////</OwlCarousel>
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Slider;