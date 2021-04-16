import { Component } from "react";
import Footer from "./Footer";
import MoviesCard from "./MoviesCard";
import NavigationBar from "./NavBar";
import Slider from "./Slider";

class DetailedPage extends Component
{
	render()
	{
		return(
			<div>
				<NavigationBar/>
				<Slider/>

				<div class="slide-wrapper">
					<div class="container">
						<div class="row">
							<div class="col-sm-6 text-left mb-4 mt-4">
								<h2>The Crew</h2>
							</div> 
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="team-slider owl-carousel owl-theme">
									<div class="owl-items"><a href="/" class="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team"/><span>David Wenham</span></a></div>
									<div class="owl-items"><a href="/" class="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team"/><span>Johnny Depp</span></a></div>
									<div class="owl-items"><a href="/" class="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team"/><span>Javier Bardem</span></a></div>
									<div class="owl-items"><a href="/" class="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team"/><span>Brenton T</span></a></div>
									<div class="owl-items"><a href="/" class="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team"/><span>Kaya Scodelario</span></a></div>
									<div class="owl-items"><a href="/" class="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team"/><span>Kevin McNally</span></a></div>
									<div class="owl-items"><a href="/" class="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team"/><span>McNally</span></a></div>
									<div class="owl-items"><a href="/" class="crew-wrap"><img src="https://via.placeholder.com/400x400.png" alt="team"/><span>Wenham</span></a></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<MoviesCard/>

				<Footer/>
			</div>
		);
	}
}

export default DetailedPage;