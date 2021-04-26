import React, {Component, useState} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import Server from '../APIs/Server';
import Popup from '../Utlities/PopUp';
import Modal from 'antd/lib/modal/Modal';


<<<<<<< HEAD
function MoviesCard(props)
{
	const [isModalVisible, setIsModalVisible] = useState(false);


	const showModal = () =>
	{
		console.log("show modal called");
		setIsModalVisible(true);
	};

	const handleOk = () =>
	{
		setIsModalVisible(false);
	};

	const handleCancel = () =>
	{
		setIsModalVisible(false);
	};

	const options =
=======

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
>>>>>>> 0acc2aea684ca5fa69c6fed6dad821f1a1f89006
	{
		items: 5,
		margin: 5,
		itemsDesktop: [1000, 5],
		nav: true,
		loop: false,
		autoplay: true
	};

	const addToWishlist = async (i) =>
	{
		let userId = 4;
		let type = 1;
		let itemId = props.moviesList[i]["movie_id"];
		let response = await Server.addToWishlist(userId, type, itemId);

		console.log(response);

		if(response["response"] === "success")
		{
			console.log("success");
			alert("Added to wishlist");
			showModal();
		}
		else
		{
			alert("Already added to wishlist");
		}
	}

		const cards = [];

		for (let i = 0; i < props.moviesList.length; i++)
		{
			const movie = props.moviesList[i];

			let hour = props.moviesList[i]["duration"].split('.');

			if (movie !== undefined)
			{
				cards.push(
					<div key={i}>
						<Link className="slide-one" to={{pathname: "/movies_detailed_page", params:{item: props.moviesList[i]}}} style={{height: "400px"}}>
							<div className="slide-image">
								<img src={movie["thumbnail"]} alt={movie["movie_title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} style={{maxWidth:"100%", height: "auto"}} />
							</div>
							<div className="slide-content" style={{backgroundColor:"", height:"75px"}}>
								<h2>{movie["movie_title"]}
									<IconButton style={{color: "white"}} onClick={()=> showModal()}>
										<AddIcon></AddIcon>
									</IconButton>
								</h2>

								<div className="col">
									<div className="row">
										<span className="tag">{hour[0]} hrs {hour[1]} mins</span>
										<span className="tag">{movie["publish_year"]}</span>
									</div>
									<div className="row" style={{paddingTop: "10px"}}>
										<span className="tag">Rating: {movie["ratings"]}</span>
										<span className="tag"><b>{movie["maturity_rating"]}+</b></span>
									</div>
								</div>
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
								<h2>{props.title}</h2>
							</div>
						</div>
						<OwlCarousel options={options}>
							{
								cards
							}
						</OwlCarousel>
>>>>>>> a6397a38308ffc69a66761b7bc8494ba40d2987d
					</div>
				</div>
<<<<<<< HEAD

				<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
		);
=======
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
>>>>>>> 0acc2aea684ca5fa69c6fed6dad821f1a1f89006
}

export default MoviesCard;