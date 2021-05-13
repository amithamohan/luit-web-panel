import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Server from '../APIs/Server';
import Modal from 'antd/lib/modal/Modal';
import { message } from 'antd';
import { Card } from 'antd';


const { Meta } = Card;


function MoviesCard(props) {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const options =
	{
		items: 4,
		margin: 5,
		// itemsDesktop: [1000, 5],
		nav: true,
		loop: true,
		dots: false,
		navText:["<img src='images/left.png'/>","<img src='images/right.png'/>"],
		autoplay: true,
	};

	const addToWishlist = async (i) => {
		console.log("done");
		let userId = 4;
		let type = 1;
		let itemId = i;

		let response = await Server.addToWishlist(userId, type, itemId);

		if (response["response"] === "success") {
			message.success('Added to wishlist');
		}
		else {
			message.info('Already added');
		}
	}

	const cards = [];
	const text = [];

	for (let i = 0; i < props.moviesList.length; i++) {
		const movie = props.moviesList[i];

		let hour = props.moviesList[i]["duration"].split('.');

		// let hour = movie["duration"];

		if (movie !== undefined) 
		{
			cards.push(
				<div className="" key={i}>
					<Link className="slide-one" to={{ pathname: "/movies_detailed_page", params: { item: props.moviesList[i] } }} style={{ height: "430px" }}>
						<div className="slide-image">
							<img src={movie["thumbnail"]} alt={movie["movie_title"]} style={{ height: "270px" }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/movie_thumbnail/default.jpg" }} />
						</div>
						<div className="slide-content">
							<h2>{movie["movie_title"]}</h2>
							<p style={{fontFamily: "Montserrat"}}>{movie["description"]}</p>
							<span class="tag">{hour[0]} h {hour[1]} min</span>
							<span class="tag">{movie["publish_year"]}</span>
							<span class="tag"><b>{movie["maturity_rating"]}+</b></span>
						</div>
					</Link>
				</div>
			);
		}
	}

	return (
		<div>
			<div className="slide-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-lg-10 text-left mb-4 mt-4" style={{fontFamily: "Montserrat"}}>
							<h2>{props.title}</h2>
						</div>
					</div>
					{cards.length && (
						<OwlCarousel options={options}>
							{
								cards
							}
						</OwlCarousel>
					)}
				</div>
			</div>
			{/* <div className="slide-one" style={{ marginTop: "80px" }}>
				<OwlCarousel options={cardOptions} onClick={() => console.log("hiiiiii")} onMouseEnter={() => console.log("on mouse enter")}>
					{
						text
					}
				</OwlCarousel>
			</div> */}
			<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	);
}

export default MoviesCard;