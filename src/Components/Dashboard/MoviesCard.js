import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Server from '../APIs/Server';
import Modal from 'antd/lib/modal/Modal';
import { IconButton } from '@material-ui/core';
import { message } from 'antd';
import AddIcon from '@material-ui/icons/Add';
import { Card } from 'antd';
import Grid from '@material-ui/core/Grid';
import Text from 'antd/lib/typography/Text';
import { Row, Col } from 'antd';
import MoviesDetailedPage from '../Movies/MoviesDetailedPage';
import { Modal, Button } from 'antd';

const { Meta } = Card;


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
		items: 5,
		margin: 5,
		itemsDesktop: [1000, 5],
		nav: true,
		loop: false,
		autoplay: false,
	};

	const customCard =
	{
		width: 100,
		height: 35,
	}

	const cardOptions =
	{
		heigth: 700,
		items: 5,
		nav: true,
		margin: 1,
		loop: true,
		autoplay: false,
		stagePadding: 1,
	};

	const customCard =
	{
		width: 100,
		height: 35,
	}

	const cardOptions =
	{
		heigth: 700,
		items: 5,
		nav: true,
		margin: 1,
		loop: true,
		autoplay: false,
		stagePadding: 1,
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

	let list = props.moviesList.length;

	if (list !== undefined) {
		for (let i = 0; i < list; i++) {
			const movie = props.moviesList[i];

			let hour = props.moviesList[i]["duration"].split('.');

			text.push(
				<Row>
					<Col key={i} xs={24} xl={8}>
						<div className="owl-items" key={i} style={{ borderRadius: "25px" }}>
							<Card className={customCard} hoverable
								style={{ width: "240px", heigth: "600px" }}
								cover={<div style={{ background: "white", height: "250px" }}>
									<img src={movie["poster"]} alt={movie["movie_title"]} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/movie_thumbnail/default.jpg" }} style={{ background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)" }} />
								</div>}
							>

								<Grid container direction="row" alignItems="center" justify="space-between">
									<Grid item>
										<h6>{movie["movie_title"]}</h6>
									</Grid>

									<Grid item>
										<IconButton onClick={() => { addToWishlist(movie["movie_id"]) }} aria-label="reqind">
											<AddIcon fontSize="inherit" />
										</IconButton>
									</Grid>
								</Grid>
								<span style={{ color: "grey" }}>{movie["publish_year"]}</span>
								<Grid container direction="row" alignItems="center" justify="space-between" style={{ color: "grey" }}>
									<Grid item>
										<span>{hour[0]} hrs {hour[1]} mins</span>
									</Grid>

									<Grid item>
										<span>{movie["ratings"]}</span>
									</Grid>
								</Grid>
							</Card>
						</div>
					</Col>
				</Row>
			);
		}
	}

	for (let i = 0; i < props.moviesList.length; i++) {
		const movie = props.moviesList[i];

		let hour = props.moviesList[i]["duration"].split('.');

		// let hour = movie["duration"];



		if (movie !== undefined) {
			cards.push(
				<div className="" key={i}>
					<Link className="slide-one" to={{ pathname: "/movies_detailed_page", params: { item: props.moviesList[i] } }} style={{ height: "430px" }}>
						<div className="slide-image">
							<img src={movie["thumbnail"]} alt={movie["movie_title"]} style={{ height: "270px" }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/movie_thumbnail/default.jpg" }} />
						</div>
						<div className="slide-content">
							<h2>{movie["movie_title"]}</h2>
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

	return (
		<div>
			<div className="slide-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 text-left mb-4 mt-4">
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