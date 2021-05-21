import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import Server from '../APIs/Server';
import Modal from 'antd/lib/modal/Modal';
import { IconButton } from '@material-ui/core';
import { message } from 'antd';
import AddIcon from '@material-ui/icons/Add';
import { Card } from 'antd';
import Grid from '@material-ui/core/Grid';
import { Row, Col } from 'antd';
import CheckIcon from '@material-ui/icons/Check';



function MoviesCard(props)
{
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [userId, setUserId] = useState(false);
	const [visible, setVisible] = useState(false);

	let history = useHistory();

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
		items: 4,
		margin: 5,
		itemsDesktop: [1000, 5],
		nav: true,
		navText: ["<img src='./images/left.png'/>", "<img src='./images/right.png'/>"],
		loop: false,
		autoplay: true,
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
	const modal =
	<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
		<p>Some contents...</p>
		<p>Some contents...</p>
	</Modal>

	useEffect(()  => {
		getUserDetails();
		checkWishList();
	},[])

	const checkWishList = async () =>
	{
		let type = 1;	

		console.log(userId);
		console.log("userId wishlist");

		for (let i = 0; i < props.moviesList.length; i++)
		{
			let response = await Server.wishlistIsPresent(type, props.moviesList[i]["movie_id"], userId);

			if(response["response"] === "success")
			{
				props.moviesList[i]["free"] = "Added";
			}
		}
		// After changing all value of "free" it is showing icon
		setVisible(true);
	};

	const getUserDetails = () =>
	{
        let user = localStorage.getItem("user");
        let data = JSON.parse(user);

		console.log(userId);
		console.log("userId");
		
        if (data != null)
		{
			setUserId(data["id"])
		
        }
    }

	const addToWishlist = async (i) =>
	{
		console.log("done");
		let type = 1;
		let itemId = i;

		let response = await Server.addToWishlist(userId, type, itemId);

		if (response["response"] === "success")
		{
			message.success('Added to wishlist');
		}
		else
		{
			message.info('Already added');
		}
		// call again
		checkWishList();
	    setVisible(false)
	}

	// Another way 
	// const handleClick = (movie) =>
    // {
    //     history.push
    //     ({
    //         pathname:'/movies_detailed_page',
    //         state : { item: movie}
    //     })
    // }

	const cards = [];
	const text = [];
	let list = props.moviesList.length;

	for (let i = 0; i < props.moviesList.length; i++)
	{
		const movie = props.moviesList[i];

		let hour = props.moviesList[i]["duration"].split('.');


		if (movie !== undefined) {
			cards.push(
				<div className="" key={i}>
					<div className="slide-one" style={{ height: "430px" }}>
						<Link className="slide-image"  to={{ pathname: "/movies_detailed_page", state: { item: movie } }} style={{ display: "flex", justifyContent: "center" }}>
						{/* <div className="slide-image"  onClick={()=>{handleClick(movie)}} style={{ display: "flex", justifyContent: "center" }}> */}
							<img src={movie["thumbnail"]} alt={movie["movie_title"]} style={{ height: "270px" }} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/movie_thumbnail/default.jpg" }} />
						</Link>
						<div className="slide-content">
							<h2>{movie["movie_title"]}
							{/* Adding "visible" to refresh icon */}
							{visible ? <IconButton style={{ color: "#fff", fontSize: 30,  }} onClick={() => { addToWishlist(movie["movie_id"]) }} aria-label="reqind">
									{
										movie["free"] === "Added" ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>
									}
								</IconButton> : null}
							</h2>
							<p>{movie["description"]}</p>
							<span className="tag">{hour[0]} h {hour[1]} min</span>
							<span className="tag">{movie["publish_year"]}</span>
							<span className="tag"><b>{movie["maturity_rating"]} +</b></span>
						</div>
					</div>
				</div>
			);
		}
	}

	return (
		<div>
			<div className="slide-wrapper">
				<div className="container" style={{fontFamily: "Montserrat"}}>
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
		</div>
	);
}

export default MoviesCard;