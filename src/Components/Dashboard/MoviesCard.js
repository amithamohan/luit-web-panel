import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



// class MoviesCard extends Component
// {
// 	constructor(props)
// 	 
// 		{
// 			cards.push
// 			(
// 				<div className="owl-items" key={i}>
// 					<a className="slide-one" href="/detailed_page">
// 						<div className="slide-image"><img src="https://release.luit.co.in/uploads/movie_thumbnail/thumb_1609755203JONBAI%201" alt="" /></div>
// 						<div className="slide-content">
// 						<h2>{this.props.moviesList[i]["title"]}<img src="images/plus.png" className="add-wishlist" alt="" /></h2>
// 						<p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
// 						<span className="tag">2 h 20 min</span>
// 						<span className="tag">2020</span>
// 						<span className="tag"><b>16+</b></span>
// 						</div>
// 					</a>
// 				</div>
// 			);
// 		}
// 		return(
// 			<div>
// 				<div className="slide-wrapper">
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-sm-6 text-left mb-4 mt-4">
// 							<h2>Latest Movies</h2>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-sm-12">
// 							<div className="slide-slider owl-carousel owl-theme">
// 								<div className="owl-items">
// 								<a className="slide-one" href="/detailed_page">
									
// 								{
// 									cards
// 								}
// 								</a>
// 								</div>
// 								</div>
								
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }


const data= [
    {
        title: "Made in haven",
        image: "https://release.luit.co.in/uploads/movie_thumbnail/thumb_1609755203JONBAI%201",
        description:"Radhe is a singing prodigy determined to follow in the     classical footsteps of his grandfather.",
        totalTime:'2 h 20 min',
        year:'2020',
        Quality: "HD",
        Views: "16+"
    },
    {
        title: "Gravity",
        image: "https://release.luit.co.in/uploads/movie_thumbnail/thumb_1609755203JONBAI%201",
        description:"Radhe is a singing prodigy determined to follow in the     classical footsteps of his grandfather.",
        totalTime:'2 h 20 min',
        year:'2021',
        Quality: "HD+",
        Views: "16+"
    },
    {
        title: "Inspector",
        image: "https://release.luit.co.in/uploads/movie_thumbnail/thumb_1609755203JONBAI%201",
        description:"Radhe is a singing prodigy determined to follow in the     classical footsteps of his grandfather.",
        totalTime:'2 h 20 min',
        year:'2020',
        Quality: "HD",
        Views: "16+"
    },
    {
        title: "Sky Staar ",
        image: "https://release.luit.co.in/uploads/movie_thumbnail/thumb_1609755203JONBAI%201",
        description:"Radhe is a singing prodigy determined to follow in the     classical footsteps of his grandfather.",
        totalTime:'2 h 20 min',
        year:'2020',
        Quality: "HD",
        Views: "16+"
    },

]




class MoviesCard extends Component
{
<<<<<<< HEAD
    render()
    {
		
    
    return(
        <div>
        <div className="slide-wrapper search-wrap-slide mt-4">
            <div className="container">
				<div className="row">
					<div className="col-sm-6 text-left mb-4 mt-1">
						<h2>Latest Movies</h2>
=======
	options =
	{
		items: 5,
		margin: 10,
		loop: true,
		autoplay: true
	};

	render()
	{
		const cards = [];

		for (let i = 0; i < this.props.moviesList.length; i++)
		{
			const movie = this.props.moviesList[i];

			if (movie !== undefined)
			{
				cards.push(
					<div key={i}>
						<Link className="slide-one" to={{pathname: "/movies_detailed_page", params:{item: this.props.moviesList[i]}}} style={{height: "430px"}}>
							<div className="slide-image">
								<img src={movie["thumbnail"]} alt={movie["movie_title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
							</div>
							<div className="slide-content">
								<h2>{movie["movie_title"]}<img src="images/plus.png" className="add-wishlist" alt="" /></h2>
								<p>{movie["description"]}</p>
								<span className="tag">{movie["duration"]}</span>
								<span className="tag">{movie["publish_year"]}</span>
								<span className="tag"><b>{movie["maturity_rating"]}</b></span>
							</div>
						</Link>
					</div>
				);
			}
		}

		return(
			<div>
				<div className="slide-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-4">
							<h2>{this.props.title}</h2>
							</div>
						</div>
						<OwlCarousel options={this.options}>
							{
								cards
							}
						</OwlCarousel>
>>>>>>> a6397a38308ffc69a66761b7bc8494ba40d2987d
					</div>
				</div>
                <div className="row">
				<div className="col-sm-12">
				<div className="slide-slider owl-carousel owl-theme">
					{
					data.map((item) =>{
                        return(
                            <div className="col-md-12 col-lg-12 mb-3">
                            <a className="slide-one" href="">
                                <div className="slide-image"><img src={item.image} alt="image"/></div>
                                <div className="slide-content">
                                    <h2>{item["title"]} <img src="images/plus.png" alt="icon"/></h2>
                                    <p>{item.description}</p>
                                    <span className="tag">{item.totalTime}</span>
                                    <span className="tag">{item.year}</span>
                                    <span className="tag"><b>{item.Quality}</b></span>
                                    <span className="tag"><b>{item.Views}</b></span>
                                </div>
                            </a>
                            </div>
                            );
						}
						
					)}
			</div>
			</div>
			</div>
		</div>
	</div>
	</div>
    )
    }
}

export default MoviesCard;