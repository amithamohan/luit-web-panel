import { Component } from "react";
import NavigationBar from "../Dashboard/NavBar";
import Slider from "../Dashboard/Slider";
import Footer from '../Dashboard/Footer';
import Server from "../APIs/Server";
import MusicCard from "../Dashboard/MusicCard";


class MusicPage extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			musicList: [],
			musicSlider: [],
			musicLanguages: [],
			newReleasedMusic: [],
		}

		this.getSlider = this.getSlider.bind(this);
		this.getAllMusic = this.getAllMusic.bind(this);
		this.getAllMusicByLanguage = this.getAllMusicByLanguage.bind(this);
		this.getNewReleasedMusic = this.getNewReleasedMusic.bind(this);
	}

	componentDidMount()
	{
		this.getSlider();
		this.getAllMusic();
		this.getAllMusicByLanguage();
		this.getNewReleasedMusic();
	}

	async getSlider()
	{
		let home = [];
		let movie = [];
		let music = [];
		let shortFilm = [];

		let response;

			response = await Server.fetchSlider("music");

			console.log(response);

		if(response["response"] === "success" && response["slider"] != null)
		{
			for(let i = 0; i < response["slider"].length; i++)
			{
				switch(response["message"])
				{
					case "Home Slider":
						home.push(response["slider"][i]);
						break;

					case "movie slider":
						movie.push(response["slider"][i]);
						break;

					case "music slider":
						music.push(response["slider"][i]);
						break;

					case "Short Film slider":
						shortFilm.push(response["slider"][i]);
						break;
					default:
						break;
				}
			}
		}
		this.setState({musicSlider: music});
	}

	async getAllMusic()
	{
		let music = [];
		let response = await Server.fetchAllMusic();

		if (response["response"] === "success")
		{
			let data = response["data"];

			for (let i = 0; i < data.length; i++)
			{
				music.push(data[i]);
			}
		}

		this.setState({musicList: music, allVideos: music});
	}

	async getAllMusicByLanguage()
	{
		let languageList = [];
		let response = await Server.fetchMusicByLanguages();

		if (response["response"] === "success")
		{
			let language = response["data"];

			for (let i = 0; i < language.length; i++)
			{
				languageList.push(language[i]);
			}
		}

		this.setState({musicLanguages: languageList});
	}

	async getNewReleasedMusic()
	{
		let newReleasedMusicList = [];

		let response = await Server.fetchNewReleasedMusic();

		if (response["response"] === "success")
		{
			let data = response["data"];

			for (let i = 0; i < data.length; i++)
			{
				newReleasedMusicList.push(data[i]);
			}
		}

		this.setState({newReleasedMusic: newReleasedMusicList});
	}



	render()
	{
		const languageList = [];

		for(let i = 0; i < this.state.musicLanguages.length; i++)
		{
			languageList.push
			(
				<MusicCard key={i} title = {this.state.musicLanguages[i]["lang_name"]} musicList = {this.state.musicLanguages[i]["data"]}/>
			);
		}

		return(
			<div className="medium-12 columns">
				<div className="main-wrapper">
					<NavigationBar/>
					<Slider/>
					<MusicCard title = {"New Released Music"} musicList = {this.state.newReleasedMusic}/>
					<MusicCard title = {"Top Music"} musicList = {this.state.musicList}/>
					<div>
						{
							languageList
						}
					</div>
					<Footer/>
				</div>
			</div>
		);
	}
}

export default MusicPage;	