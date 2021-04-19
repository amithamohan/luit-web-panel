import { Component } from "react";
import Footer from "./Footer";
import NavigationBar from "../Dashboard/NavBar";

class DetailedPage extends Component
{
	render()
	{
		console.log("about", this.props.location.aboutProps);

		return(
			<div>
				<NavigationBar/>
				<div className="banner-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="banner-wrap justify-content-between align-items-center">
								<div className="left-wrap">
									<span className="rnd">IMDb 6.7</span>
									<h2>Made <br /> in heaven</h2>
									<span className="tag"><b>SEASON 1</b></span>
									<span className="tag">2020</span>
									<span className="tag"><b>HD</b></span>
									<span className="tag"><b>16+</b></span>
									<span className="tag">2 h 20 min</span>
									<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather. Tamanna is a YouTube pop sensation desperate to become .</p>
									<a href="/video_player" className="btn btn-lg"><img src="images/play.png" alt="" />Watch now</a>
									<a href="/" className="icon-bttn"><i className="ti-plus text-white" /></a>
									<div className="icon-bttn">
									<i className="ti-sharethis text-white mr-4" />
									<div className="share-icons">
										<a href="/"><i className="ti-facebook" /></a>
										<a href="/"><i className="ti-twitter-alt" /></a>
										<a href="#/"><i className="mr-0 ti-pinterest" /></a>
									</div>
									</div>
								</div>
								<div className="right-wrap" style={{backgroundImage: 'url(https://via.placeholder.com/700x500.png)'}} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default DetailedPage;