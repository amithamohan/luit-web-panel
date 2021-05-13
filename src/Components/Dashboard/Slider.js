import React, {Component} from 'react';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { Carousel, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import Server from '../APIs/Server';


class Slider extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			moviesList: [],
			musicList:[],
			shortFilmList:[],
			allVideos: [],
		}

		this.getAllMovies = this.getAllMovies.bind(this);
		this.getAllMusic = this.getAllMusic.bind(this);
		this.getAllShortFilms = this.getAllShortFilms.bind(this);
	}

	componentDidMount()
	{
		this.getAllMovies();
		this.getAllMusic();
		this.getAllShortFilms();
	}


	async getAllMovies()
	{
		let movieList = [];
		let response = await Server.fetchAllMovies();

		if (response["response"] === "success")
		{
			let movies = response["data"];

			for (let i = 0; i < movies.length; i++)
			{
				movieList.push(movies[i]);
				this.state.allVideos.push(movies[i]);
			}
		}
	}

	// fetch all music
	async getAllMusic()
	{
		let result = [];
		let response = await Server.fetchAllMusic();

		if (response["response"] === "success")
		{
			let music = response["data"];

			for (let i = 0; i < music.length; i++)
			{
				result.push(music[i]);
				this.state.allVideos.push(music[i]);
			}
		}
	}

	async getAllShortFilms()
	{
		let shortFilm = [];
		let response = await Server.fetchAllShortMovies();


		if (response["response"] === "success" && response["data"] !== null)
		{
			console.log("yesss");
			let data = response["data"];

			for (let i = 0; i < data.length; i++)
			{
				shortFilm.push(data[i]);
				this.state.allVideos.push(shortFilm);
			}
		}
		else
		{
			this.setState({shortFilmList: null});

		}
	}


	render()
	{
		const rows = [];

		for(let i = 0; i < this.state.allVideos.length; i++)
		{
			for(let j = 0; j < this.props.data.length; j++)
			{
				if((this.state.allVideos[i]["id"] === this.props.data[j]["id"] || this.state.allVideos[i]["movie_id"] === this.props.data[j]["id"]) && this.state.allVideos[i]["type"] === this.props.data[j]["type"])
				{
					let data = this.state.allVideos[i];
					let hour = this.state.allVideos[i]["duration"].split('.');

					rows.push(
						<div className="row" key={i}>
							<div className="col-sm-12" style={{backgroundColor: "red", width: "100%"}}>
								<div className="banner-wrap justify-content-between align-items-center">
								<div className="left-wrap">
									{data["amount"] === "0" ? null : <span className="rnd">PREMIUM</span>}
									{data["type"] === "music" ? <h2>{data["title"]}</h2> : <h2>{data["movie_title"]}</h2>}
									<span className="tag"><b>Rating</b></span>
									<span className="tag">{data["ratings"]}.0</span>
									<span className="tag"><b>Duration</b></span>
									{data["type"] === "movie" ? <span className="tag">{hour[0]} hour {hour[1]} mins</span> : <span className="tag">{hour[0]} mins {hour[1]} sec</span>}
									<p>{data["description"]}</p>
									<p>{data["title"]}</p>

									<Link className="btn btn-lg" to={{pathname: "/video_player", params:{item: data}}}><img src="images/play.png" alt="" />Watch now</Link>

								</div>
								<div className="right-wrap" style={{backgroundImage: `url('${data["poster"]}')`}} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
								</div>
							</div>
						</div>
					);
				}
			}
		}

		return(
			<div className="banner-wrapper">
				<div className="container" style={{fontFamily: "Montserrat"}}>
					<Carousel autoplay draggable>
						{rows}
					</Carousel>
				</div>
			</div>
		);
	}
}

export default Slider;