import { Component } from "react";
import Footer from "../Dashboard/Footer";
import NavigationBar from "../Dashboard/NavBar";
import Server from '../APIs/Server';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class MoviesDetailedPage extends Component
{
	options =
	{
		items: 5,
		margin: 5,
		nav: true,
		loop: false,
		autoplay: false
	};

	constructor(props)
	{
		super(props);

		this.state =
		{
			actors: [],
			moviesList: [],
			allVideos: [],
		}

		this.getActors = this.getActors.bind(this);
	}

	componentDidMount()
	{
		this.getActors();
		this.getAllMovies();
	}

	async getActors()
	{
		let actorsList = [];
		let response = await Server.fetchArtist()

		if (response["response"] === "success")
		{
			let data = response["data"];

			for (let i = 0; i < data.length; i++)
			{
				actorsList.push(data[i]);
			}
		}

		this.setState({actors: actorsList});

		console.log(this.state.actors);
	}

	// fetch all music
	async getAllMovies()
	{
		let result = [];
		let response = await Server.fetchAllMovies();

		if (response["response"] === "success")
		{
			let movies = response["data"];

			for (let i = 0; i < movies.length; i++)
			{
				result.push(movies[i]);
			}
		}

		this.setState({moviesList: result});
	}

	render()
	{
		console.log(this.props.location.params["item"]);

		const crew = [];

		if(this.state.actors !== undefined)
		{
			for(let j = 0; j < this.props.location.params["item"]["actors"].length; j++)
			{
				for(let i = 0; i < this.state.actors.length; i++)
				{
					if(this.props.location.params["item"]["actors"][j] === this.state.actors[i]["name"])
					{
						console.log(this.props.location.params["item"]["actors"][j]);
						console.log(this.state.actors[i]["name"]);

						crew.push(
							<div key={i}>
								<div className="owl-items" style={{display: "block", border: "2px solid yellow", backgroundColor: "#222", height: "190px", width: "210px" ,borderRadius: "50%", backgroundImage: `url(${this.state.actors[i]["image"]})`, backgroundSize: "250px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
								<center><br /><span style={{color: "white"}}>{this.state.actors[i]["name"]}</span></center>
							</div>
						);
					}
					else
					{
						this.state.crew = null;
					}
				}
			}
			console.log("after");
			console.log(this.state.crew);
		}


		const moreLikeThis = [];
		if(this.state.moviesList !== undefined)
		{
			for(let j = 0; j < this.props.location.params["item"]["genre"].length; j++)
			{
				for(let i = 0; i < this.state.moviesList.length; i++)
				{
					let hour = this.state.moviesList[i]["duration"].split('.');

					if(this.props.location.params["item"]["genre"][j] === this.state.moviesList[i]["genre"][0])
					{
						moreLikeThis.push(
							<div className="owl-items"  key={i} >
								<Link className="slide-one" to={{pathname: "/music_detailed_page", params:{item: this.state.moviesList[i]}}} style={{height: "430px"}}>
									<div className="slide-image">
										<img src={this.state.moviesList[i]["thumbnail"]} alt={this.state.moviesList[i]["title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
									</div>
									<div className="slide-content">
										<h2>{this.state.moviesList[i]["title"]}<img src="images/plus.png" className="add-wishlist" alt="" /></h2>
										<p>{this.state.moviesList[i]["description"]}</p>
										<span className="tag">{hour[0]} hrs {hour[1]} mins</span>
										<span className="tag">{this.state.moviesList[i]["publish_year"]}</span>
										<span className="tag"><b>{this.state.moviesList[i]["maturity_rating"]}</b></span>
									</div>
								</Link>
							</div>
						);
					}
				}
			}
		}

		let data = this.props.location.params["item"];
		let image = this.props.location.params["item"]["thumbnail"];
		let x = image.split(' ').join('%20');

		let hour = this.props.location.params["item"]["duration"].split('.');


		return(
			<div>
				<NavigationBar/>
				<div className="banner-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="banner-wrap justify-content-between align-items-center">
								<div className="left-wrap">
									<span className="rnd">{data["ratings"]}</span>
									<h2>{data["movie_title"]}</h2>
									<span className="tag"><b>{data["publish_year"]}</b></span>
									<span className="tag"><b>HD</b></span>
									<span className="tag"><b>{data["maturity_rating"]}+</b></span>
									<span className="tag">{hour[0]} hr {hour[1]} min</span>
									<span className="tag">{data["genre"]}</span>
									<p>{data["description"]}</p>

									<Link className="btn btn-lg" to={{pathname: "/video_player", params:{item: this.props.location.params["item"]}}}><img src="images/play.png" alt="" />Watch now</Link>

									<a href="/" className="icon-bttn"><i className="ti-plus text-white" /></a>
									<div className="icon-bttn">
									<i className="ti-sharethis text-white mr-4" />
									</div>
								</div>
								<div className="right-wrap" style={{backgroundImage: `url(${x})`}} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
								</div>
							</div>
						</div>

						<div></div>
						<div className="container">
							<div className="row">
								<div className="col-sm-6 text-left mb-4 mt-1">
									<h2>Crew</h2>
								</div>
							</div>
							{
								crew === null ? null :
								<OwlCarousel options={this.options}>
								{
									crew
								}
								</OwlCarousel>
							}
						</div>

						<div className="container slide-wrapper slide-wrapper-shadow">
							<div className="row">
								<div className="col-sm-6 text-left mb-4 mt-1">
									<h2>More Like This</h2>
								</div>
							</div>
							{
								crew === null ? null :
								<OwlCarousel options={this.options}>
								{
									moreLikeThis
								}
								</OwlCarousel>
							}
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default MoviesDetailedPage;