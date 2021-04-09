import React, {Component} from 'react';

class TrendingArtist extends Component
{
	render()
	{
		return(
			<div>
				<div className="slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-1">
							<h2>Trending Artists</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="team-slider-full owl-carousel owl-theme">
									<div className="owl-items"><a href="/" className="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team" /><span>David Wenham</span></a></div>
									<div className="owl-items"><a href="/" className="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team" /><span>Johnny Depp</span></a></div>
									<div className="owl-items"><a href="/" className="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team" /><span>Javier Bardem</span></a></div>
									<div className="owl-items"><a href="/" className="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team" /><span>Brenton T</span></a></div>
									<div className="owl-items"><a href="/" className="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team" /><span>Kaya Scodelario</span></a></div>
									<div className="owl-items"><a href="/" className="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team" /><span>Kevin McNally</span></a></div>
									<div className="owl-items"><a href="/" className="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team" /><span>McNally</span></a></div>
									<div className="owl-items"><a href="/" className="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team" /><span>Wenham</span></a></div>
									<div className="owl-items"><a href="/" className="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team" /><span>Kaya Scodelario</span></a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TrendingArtist;