import React, {Component} from 'react';
import Server from '../APIs/Server';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const carousel__inner =
{
	width: "90%"
}


class Slider extends Component
{
	constructor(props)
	{
		super(props);
		this.getSlider = this.getSlider.bind(this);
	}

	componentDidMount()
	{
		window.addEventListener('load', this.getSlider);
	}
	
	componentWillUnmount()
	{
		window.addEventListener('load', this.getSlider);
	}

	// fetch slider images
	getSlider()
	{
		let response = Server.fetchSlider();

		console.log("hiiii");
	}

	render()
	{
		return(
			<div>
				<AliceCarousel style={{height:"100px"}} autoPlay autoPlayInterval="5000" disableButtonsControls={false}>
					<img src="https://i.pinimg.com/originals/7f/a7/bb/7fa7bb83f07e1eb17e768b3d6dabbef7.jpg" className="sliderimg" alt=""/>
					<img src="https://i.pinimg.com/originals/7f/a7/bb/7fa7bb83f07e1eb17e768b3d6dabbef7.jpg" className="sliderimg" alt=""/>
					<img src="https://i.pinimg.com/originals/7f/a7/bb/7fa7bb83f07e1eb17e768b3d6dabbef7.jpg" className="sliderimg" alt=""/>
					<img src="https://i.pinimg.com/originals/7f/a7/bb/7fa7bb83f07e1eb17e768b3d6dabbef7.jpg" className="sliderimg" alt=""/>
				</AliceCarousel>
			</div>


			// 						<div className="owl-items">
			// 							<div className="banner-wrap justify-content-between align-items-center">
			// 								<div className="left-wrap">
			// 									<h2>Mother of  <br />Brooklyn</h2>
			// 									<span className="tag"><b>Rating</b></span>
			// 									<span className="tag">4.0</span>
			// 									<span className="tag"><b>Duration</b></span>
			// 									<span className="tag">2 h 20 min</span>
			// 									<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather. Tamanna is a YouTube pop sensation desperate to become .</p>
			// 									<a href="/" className="btn btn-lg btn-video"><img src="images/play.png" alt="icn" />Watch now</a>
			// 								</div>
			// 								<div className="right-wrap" style={{backgroundImage: 'url(https://via.placeholder.com/700x500.png)'}} />
			// 							</div>
			// 						</div>
			// 					</div>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

export default Slider;