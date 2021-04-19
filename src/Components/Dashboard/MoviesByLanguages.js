import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';

class MoviesByLanguages extends Component
{
	options = 
	{
		items: 5,
		margin: 10,
		nav: true,
		loop: true,
		autoplay: true
	};

	render()
	{
		const cards = [];

		for (let i = 0; i < this.props.languages.length; i++)
		{
			const language = this.props.languages[i];

			if (language !== undefined)
			{
				cards.push(
					<div key={i}>
						<div className="owl-items" style={{border: "2px solid yellow", backgroundColor: "#222", height: "200px",  borderRadius: "50%", backgroundImage: `url(${language['thumbnail_link']})`, backgroundSize: "150px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
						<center><br /><span style={{color: "white"}}>{language["lang_name"]}</span></center>
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

export default MoviesByLanguages;