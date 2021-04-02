import React, {Component} from 'react';

class SeriesCard extends Component
{
	render()
	{
		return(
			<div>
				<div className="slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-1">
							<h2>Latest Series</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="slide-slider owl-carousel owl-theme">
									<div className="owl-items">
										<a className="slide-one slide-two" href="#">
											<div className="slide-image" style={{backgroundImage: 'url(https://via.placeholder.com/400x400.png)'}} />
											<div className="slide-content">
											<h2>Batman Knight <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
											<span className="tag">2 h 20 min</span>
											<span className="tag">2020</span>
											<span className="tag"><b>16+</b></span>
											</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one slide-two" href="#">
											<div className="slide-image" style={{backgroundImage: 'url(https://via.placeholder.com/400x400.png)'}} />
											<div className="slide-content">
											<h2>Gimini Man <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
											<span className="tag">2 h 20 min</span>
											<span className="tag">2020</span>
											<span className="tag"><b>16+</b></span>
											</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one slide-two" href="#">
											<div className="slide-image" style={{backgroundImage: 'url(https://via.placeholder.com/400x400.png)'}} />
											<div className="slide-content">
											<h2>Create of Shadow <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
											<span className="tag">2 h 20 min</span>
											<span className="tag">2020</span>
											<span className="tag"><b>16+</b></span>
											</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one slide-two" href="#">
											<div className="slide-image" style={{backgroundImage: 'url(https://via.placeholder.com/400x400.png)'}} />
											<div className="slide-content">
											<h2>Jusy Cry yourself <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
											<span className="tag">2 h 20 min</span>
											<span className="tag">2020</span>
											<span className="tag"><b>16+</b></span>
											</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one slide-two" href="#">
											<div className="slide-image" style={{backgroundImage: 'url(https://via.placeholder.com/400x400.png)'}} />
											<div className="slide-content">
											<h2>Create of Shadow <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
											<span className="tag">2 h 20 min</span>
											<span className="tag">2020</span>
											<span className="tag"><b>16+</b></span>
											</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one slide-two" href="#">
											<div className="slide-image" style={{backgroundImage: 'url(https://via.placeholder.com/400x400.png)'}} />
											<div className="slide-content">
											<h2>Jusy Cry yourself <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
											<span className="tag">2 h 20 min</span>
											<span className="tag">2020</span>
											<span className="tag"><b>16+</b></span>
											</div>
										</a>
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

export default SeriesCard;