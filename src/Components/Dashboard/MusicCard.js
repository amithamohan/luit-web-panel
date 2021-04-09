import React, {Component} from 'react';

class MusicCard extends Component
{
	render()
	{
		return(
			<div>
				<div className="slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-1">
								<h2>Latest Music</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="slide-slider owl-carousel owl-theme">
									<div className="owl-items">
										<a className="slide-one" href="single.html">
											<div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="" /></div>
											<div className="slide-content">
												<h2>Second Man Earth <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
												<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
												<span className="tag">2 h 20 min</span>
												<span className="tag">2020</span>
												<span className="tag"><b>16+</b></span>
											</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one" href="single.html">
											<div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="" /></div>
											<div className="slide-content">
												<h2>Defective Area <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
												<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
												<span className="tag">2 h 20 min</span>
												<span className="tag">2020</span>
												<span className="tag"><b>16+</b></span>
											</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one" href="single.html">
											<div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="" /></div>
											<div className="slide-content">
												<h2>Law of Order <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
												<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
												<span className="tag">2 h 20 min</span>
												<span className="tag">2020</span>
												<span className="tag"><b>16+</b></span>
											</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one" href="single.html">
											<div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="icon" /></div>
												<div className="slide-content">
													<h2>Ravata of Sky <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
													<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
													<span className="tag">2 h 20 min</span>
													<span className="tag">2020</span>
													<span className="tag"><b>16+</b></span>
												</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one" href="single.html">
											<div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="icon" /></div>
											<div className="slide-content">
												<h2>Inspector <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
												<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
												<span className="tag">2 h 20 min</span>
												<span className="tag">2020</span>
												<span className="tag"><b>16+</b></span>
											</div>
										</a>
									</div>
									<div className="owl-items">
										<a className="slide-one" href="single.html">
											<div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="icon" /></div>
											<div className="slide-content">
												<h2>Sky Staar <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
												<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
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

export default MusicCard;