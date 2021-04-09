import { Component } from "react";
import MoviesCard from "../Dashboard/MoviesCard";
import NavigationBar from "../Dashboard/NavBar";
import Slider from "../Dashboard/Slider";
import Footer from '../Dashboard/Footer';


class MoviesPage extends Component
{
	render()
	{
		return(
			<div className="medium-12 columns">
				<div className="main-wrapper">
					<NavigationBar/>
					<Slider/>
					<MoviesCard/>
					<MoviesCard/>
					<MoviesCard/>
					<MoviesCard/>
					<Footer/>
				</div>
			</div>
		);
	}
}

export default MoviesPage;	