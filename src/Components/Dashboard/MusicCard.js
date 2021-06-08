import React, { Component, useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { message } from 'antd';
import Server from '../APIs/Server';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function MusicCard(props) {

	const [userId, setUserId] = useState('');
	const [ styleRemover , setStyleRemover ] = useState(true);
	const [musicWishlist, setMusicWishlist] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false)

    const options =
	{
		items: 4,
		margin: 5,
		itemsDesktop: [1000, 5],
		navText: ["<img src='images/left.png'/>", "<img src='images/right.png'/>"],
		loop: false,
		autoplay: true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			340:{
				items:2
			},
			700:{
				items:3
			},
			1000:{
				items:4
			}
		}
	};

	useEffect(()  => {
		getUserDetails();
		if(window.innerWidth < 580)
		{
			setStyleRemover(false)
		}
	},[])

	const displayWishList = async (id) =>
    {
        let response = await Server.displayWishlist(id);
		setMusicWishlist(response["data"])
    }

	const getUserDetails = async () =>
	{
        let user = localStorage.getItem("user");
        let data = JSON.parse(user);

        if (data != null)
		{
			setUserId(data["id"]);
			displayWishList(data["id"]);
			setIsLoggedIn(true);
        }
		console.log(data);
    }

	const addToWishlist = async (i) =>
	{
	
		let type = 2;
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
		displayWishList(userId);
	}


		const cards = [];
		let flag1 = false;

		for (let i = 0; i < props.musicList.length; i++) {
			const music = props.musicList[i];
			
			let hour = props.musicList[i]["duration"].split('.');
			

			localStorage.setItem("music", JSON.stringify(props.musicList[i]));
			if(musicWishlist !== undefined)
			{
				for ( let j=0; j<musicWishlist.length ; j++)
				{
					if(music["id"] === musicWishlist[j]["video_id"] && musicWishlist[j]["video_type"] === "2") { flag1 = true; break } else { flag1 = false }
				}
			}
			

			if (music !== undefined) {
				cards.push(
					<div className="owl-items" key={i}>
						<div className="slide-one" style={ styleRemover ? {height: "430px"} : null }>
							<Link className="slide-image" to={{ pathname: "/music_detailed_page", state: { item: music } }} style={{ display: "flex", justifyContent: "center" }}>
								<img src={music["thumbnail"]} alt={music["movie_title"]} style={ styleRemover ? {height: "270px"} : null } onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/movie_thumbnail/default.jpg" }} />
							</Link>
							<div className="slide-content">
								<h2>{music["title"]}
								{music["amount"] === "0" ? null : <span style={{ margin: "0px 0px 10px 16px"}}><AttachMoneyIcon /></span>}
									{/* Adding "visible" to refresh icon */}

									{
										isLoggedIn ? <IconButton style={{ color: "#fff", fontSize: 30  }}  
										onClick={() => { addToWishlist(music["id"]) }}aria-label="reqind"  >
										{flag1 ? <CheckIcon fontSize="inherit"  ></CheckIcon> : <AddIcon fontSize="inherit" ></AddIcon>}
										</IconButton> : null
									}
									
                                    
									</h2>
									<p>{music["description"]}</p>
									<span className="tag">{hour[0]} min {hour[1]} sec</span>
									<span className="tag">{music["publish_year"]}</span>
									<span className="tag"><b>{music["maturity_rating"]} +</b></span>
							</div>
						</div>
					</div>
				);
			}
		}

	return (
			<>
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
			</>
	)
}

export default MusicCard;
