import React, { useState} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import Server from '../APIs/Server';
import Popup from '../Utlities/PopUp';
import Modal from 'antd/lib/modal/Modal';


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
	{
		items: 5,
		margin: 5,
		itemsDesktop: [1000, 5],
		nav: true,
		loop: true,
		autoplay: true,
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
					<div className="owl-items" key={i}>
					<Link className="slide-one" to={{pathname: "/movies_detailed_page", params:{item: props.moviesList[i]}}} style={{height: "430px"}}>
						<div className="slide-image">
						<img src={movie["thumbnail"]} alt={movie["movie_title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/movie_thumbnail/default.jpg"}} />
						</div>
						<div className="slide-content">
							<h2>{movie["movie_title"]}<img src="images/plus.png" className="add-wishlist" alt="" /></h2>
							<div className="tag"> Duration: {hour[0]} hrs {hour[1]} min</div>
							<span className="tag">Year: {movie["publish_year"]}</span>
							<span className="tag">Rating: {movie["ratings"]}</span>
							<span className="tag"><b>{movie["maturity_rating"]}+</b></span>
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
					</div>
				</div>

				<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
		);
}

export default MoviesCard;