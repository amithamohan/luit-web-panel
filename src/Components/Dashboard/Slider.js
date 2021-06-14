import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import Server from '../APIs/Server';
import { message } from 'antd';
import PayPopup from "../Utlities/PopUp";
import SignInPopup from "../Utlities/SignInPopup";
import Carousel from "react-elastic-carousel";

class Slider extends Component {
	constructor(props) {
		super(props);

		this.state =
		{
			moviesList: [],
			musicList: [],
			shortFilmList: [],
			allVideos: [],
			isAdded: false,
			isLoggedIn: false,
			userId:'',
			status:false,
			historyData:[],
			paid: false,
		}

		this.getAllMovies = this.getAllMovies.bind(this);
		this.getAllMusic = this.getAllMusic.bind(this);
		this.getAllShortFilms = this.getAllShortFilms.bind(this);
	}

	componentDidMount() {
		this.getUserDetails();
		this.getAllMovies();
		this.getAllMusic();
		this.getAllShortFilms();
	}

	async getUserDetails()
    {
		let data = JSON.parse(localStorage.getItem("user"));
		if(data != null){
			this.setState({userId:data["id"]})
			this.setState({ isLoggedIn: true })
			this.getPaymentHistory(data["id"]);
		}
    }
	async getPaymentHistory(id)
    {
			let response = await Server.fetchPaymentHistory(id);
	
			if(response["response"] === "success")
			{
				this.setState({historyData:response["data"]});
				this.setState({status:true});
			}

			let response1 = await Server.displayMonthlySubscription(id);
	
			if(response1["response"] === "success")
			{
				let today = new Date()
				let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
				console.log(response1["data"][0]["end_date"])
				console.log(date)
				if(response1["data"][0]["end_date"] < date) this.setState({paid:true})
			}
			
			console.log(this.state.paid)
	}

	async getAllMovies() {
		let movieList = [];
		let response = await Server.fetchAllMovies();

		if (response["response"] === "success") {
			let movies = response["data"];

			for (let i = 0; i < movies.length; i++) {
				movieList.push(movies[i]);
				this.state.allVideos.push(movies[i]);
			}
		}
	}

	// fetch all music
	async getAllMusic() {
		let result = [];
		let response = await Server.fetchAllMusic();

		if (response["response"] === "success") {
			let music = response["data"];

			for (let i = 0; i < music.length; i++) {
				result.push(music[i]);
				this.state.allVideos.push(music[i]);
			}
		}
	}

	async getAllShortFilms() {
		let shortFilm = [];
		let response = await Server.fetchAllShortMovies();


		if (response["response"] === "success" && response["data"] !== null) {
			console.log("yesss");
			let data = response["data"];

			for (let i = 0; i < data.length; i++) {
				shortFilm.push(data[i]);
				this.state.allVideos.push(shortFilm);
			}
		}
		else {
			this.setState({ shortFilmList: null });

		}
	}


	async isAddedToWishList() {
		
		let type = 1;
		let id = this.props.location.params["item"]["movie_id"];

		console.log("wish list");

		let response = await Server.wishlistIsPresent(type, id, this.state.userId);

		if (response["response"] === "success") {
			this.setState({ isAdded: true });
		}
		else {
			this.setState({ isAdded: false });
		}
	}

	async addToWishlist(i) {
		console.log("done");
		
		let type = 1;
		let itemId = i;

		console.log("success");
		let response = await Server.addToWishlist(this.state.userId, type, itemId);

		if (response["response"] === "success") {
			console.log("success");
			message.success('Added to wishlist');
		}
		else {
			message.info('Already added');
		}
	}


	render() {
		const rows = [];
        let isPaid = false
        

		for (let i = 0; i < this.state.allVideos.length; i++) 
		{
			for (let j = 0; j < this.props.data.length; j++) 
			{
				if ((this.state.allVideos[i]["id"] === this.props.data[j]["id"] || this.state.allVideos[i]["movie_id"] === this.props.data[j]["id"]) && this.state.allVideos[i]["type"] === this.props.data[j]["type"]) 
				{
					let data = this.state.allVideos[i];
					let hour = this.state.allVideos[i]["duration"].split('.');

                    if(this.state.historyData.length > 0) isPaid = this.state.historyData.filter((i)=> { 
						 if(i.content_type === "1"){
							 if(i.content_id === data["movie_id"]){
								 return true
							 }
						 } else if (i.content_id === data["id"]){
							return true
						 }		 
	                   
					})

					// rows.push(
					// 	<div className="row" key={i}>
					// 		<div className="col-sm-12" style={{backgroundColor: "red"}}>
					// 			<div className="banner-wrap justify-content-between align-items-center" style={{width:"100vw",borderRadius:"0px"}}>
					// 				<div className="left-wrap">
					// 					{data["amount"] === "0" ? null : <span className="rnd">PREMIUM</span>}
					// 					{data["type"] === "music" ? <h2>{data["title"]}</h2> : <h2>{data["movie_title"]}</h2>}
					// 					<span className="tag"><b>Rating</b></span>
                    //                     <span className="tag">{data["ratings"] === "" ? "0" : data["ratings"]}</span>
                    //                     <span className="tag"><b>Duration</b></span>
                    //                     {data["type"] === "movie" ? <span className="tag">{hour[0]} h {hour[1]} min</span> : <span className="tag">{hour[0]} min {hour[1]} sec</span>}
                    //                     <p>{data["description"]}</p>

					// 					{   
					// 						this.state.isLoggedIn 
					// 						? data["amount"] == 0 
					// 						    ? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: data}}}><img src="images/play.png" alt=""  />Watch now</Link> 
					// 						    :  isPaid.length === 1 || this.state.paid === true
					// 							? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: data}}}><img src="images/play.png" alt=""  />Watch now</Link> 
					// 							: <PayPopup data={data}/>
					// 						: <SignInPopup /> 
					// 					}
										
					// 					{/* <IconButton style={{ color: "#fff", fontSize: 30 }} onClick={e => this.addToWishlist(this.state.allVideos[i]["movie_id"])} aria-label="reqind">
					// 						{this.state.isAdded ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>}
					// 					</IconButton> */}

					// 				</div>
					// 				<div className="right-wrap"  style={{ backgroundImage: `url('${data["poster"] === "" ? "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" : data["poster"]}')` }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
					// 			</div>
					// 		</div>
					// 	</div>
					// );

					rows.push(
								<div className="div" key={i}>
										<div className="left-wrap" >
											{data["amount"] === "0" ? null : <span className="rnd">PREMIUM</span>}
											{data["type"] === "music" ? <h2>{data["title"]}</h2> : <h2>{data["movie_title"]}</h2>}
											<span className="tag"><b>Rating</b></span>
						                    <span className="tag">{data["ratings"] === "" ? "0" : data["ratings"]}</span>
						                    <span className="tag"><b>Duration</b></span>
						                    {data["type"] === "movie" ? <span className="tag">{hour[0]} h {hour[1]} min</span> : <span className="tag">{hour[0]} min {hour[1]} sec</span>}
						                    <p>{data["description"]}</p>
	
											{   
												this.state.isLoggedIn 
												? data["amount"] == 0 
												    ? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: data}}}><img src="images/play.png" alt=""  />Watch now</Link> 
												    :  isPaid.length === 1 || this.state.paid === true
													? <Link className="btn btn-lg" to={{pathname: "/video_player", state:{item: data}}}><img src="images/play.png" alt=""  />Watch now</Link> 
													: <PayPopup data={data}/>
												: <SignInPopup /> 
											}
											
											{/* <IconButton style={{ color: "#fff", fontSize: 30 }} onClick={e => this.addToWishlist(this.state.allVideos[i]["movie_id"])} aria-label="reqind">
												{this.state.isAdded ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>}
											</IconButton> */}
	
										</div>
										<div className="right-wrap"  style={{ backgroundImage: `url('${data["poster"] === "" ? "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" : data["poster"]}')` }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
									</div>
							);
				}
			}
		}

		return (
	
			// <div className="banner-wrapper">
			// 	{console.log(rows)}
            // 	<div className="container">
            //     	<div className="row">
            //         	<div className="col-sm-12">
            //             	<div className="banner-slider owl-carousel owl-theme">
			// 					{/* <Carousel autoplay draggable> */}
					
			// 					{rows}
						
			// 					{/* </Carousel> */}
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
			// <div className="banner-wrapper" >
			// 	<div className="container" style={{fontFamily: "Montserrat"}}>
			// 		<div className="row">
			// 			<div className="col-sm-12">
			// 				{/* {
			// 					rows.length && (
			// 						<div className="banner-slider owl-carousel owl-theme">
			// 							{rows}
			// 						</div>
			// 					)
			// 				} */}
			// 				<div className="banner-slider">
			// 				<div className="owl-carousel owl-theme">
			// 				  {rows}
			// 				</div>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
			<>
			{
				rows.length && (
					<div className="banner-wrapper" >
						<Carousel itemsToShow={1} enableAutoPlay={true} initialActiveIndex={0} autoPlaySpeed={8000} >
							{rows}
						</Carousel>
					</div>
				)
			}
			</>
			
					
		);
	}
}

export default Slider;