import { Component } from "react";
import MoviesCard from "../Dashboard/MoviesCard";
import NavigationBar from "../Dashboard/NavBar";
import Slider from "../Dashboard/Slider";
import Footer from '../Dashboard/Footer';
import MusicCard from "../Dashboard/MusicCard";
import ShortFilmCard from "../Dashboard/ShortFilmsCard";


class ShortFilm extends Component
{
	render()
	{
		return(
			<div className="medium-12 columns">
				<div className="main-wrapper">
					<NavigationBar/>
					<Slider/>
					<MoviesCard/>
					<MusicCard/>
					<ShortFilmCard/>
					<MoviesCard/>
					<Footer/>
				</div>
			</div>
		);
	}
}

export default ShortFilm;	