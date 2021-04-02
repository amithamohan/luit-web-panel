import React, {Component} from 'react';

class MoviesByLanguages extends Component
{
	render()
	{
		return(
			<div>
				<div className="category-wrapper slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-1">
								<h2>Watch in Your Language</h2>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<div className="category-slider owl-carousel owl-theme">
									<div className="owl-items">
										<a href="search.html" className="category-wrap" style={{backgroundImage: 'url(images/gb1.png)'}}><span>Assamese</span></a>
									</div>
									<div className="owl-items">
										<a href="search.html" className="category-wrap" style={{backgroundImage: 'url(images/gb2.png)'}}><span>Bodo</span></a>
									</div>
									<div className="owl-items">
										<a href="search.html" className="category-wrap" style={{backgroundImage: 'url(images/gb3.png)'}}><span>Khasi</span></a>
									</div>
									<div className="owl-items">
										<a href="search.html" className="category-wrap" style={{backgroundImage: 'url(images/gb4.png)'}}><span>Manipuri</span></a>
									</div>
									<div className="owl-items">
										<a href="search.html" className="category-wrap" style={{backgroundImage: 'url(images/gb2.png)'}}><span>Nepali</span></a>
									</div>
									<div className="owl-items">
										<a href="search.html" className="category-wrap" style={{backgroundImage: 'url(images/gb3.png)'}}><span>Mising</span></a>
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

export default MoviesByLanguages;