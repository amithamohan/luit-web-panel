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
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


function MoviesCard(props)
{
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [userId, setUserId] = useState('');
	const [visible, setVisible] = useState(true);
	const [ styleRemover , setStyleRemover ] = useState(true);
	const [ nav, setNav ] = useState(true);
	const [wishlist, setWishlist] = useState([])

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
		//nav: nav,
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
		if(window.innerWidth < 580)
		{
			setStyleRemover(false)
			setNav(false)
		}
		setVisible(false)
	},[])

	const displayWishList = async (id) =>
    {
        let response = await Server.displayWishlist(id);
        setWishlist(response["data"])
		console.log(wishlist)
		setVisible(true)
    }

	const getUserDetails = async () =>
	{
        let user = localStorage.getItem("user");
        let data = JSON.parse(user);
		
        if (data != null)
		{
			setUserId(data["id"])
			displayWishList(data["id"]);
        }
    }
 
	const addToWishlist = async (i) =>
	{
		console.log(i)
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
		setVisible(false)
		displayWishList(userId);
	}

	const deleteFromWishList = async (item) =>
    {
		
		let wish = wishlist.filter((i) => {
			return i.video_id == item
		})
		
        let response = await Server.deleteWishlist(userId, wish[0]["id"]);

        if (response["response"] === "success")
        {
            message.success("Removed from wishlist");
        }
        else
        {
            message.error("Oops something went wrong");
        }
		// call again
		setVisible(false)
		displayWishList(userId);
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
	let flag = false;

	console.log(props.moviesList)
	for (let i = 0; i < props.moviesList.length; i++)
	{
		const movie = props.moviesList[i];

		let hour = props.moviesList[i]["duration"].split('.');

		if(wishlist !== undefined)
		{
			for ( let j=0; j<wishlist.length ; j++)
			{
				if(movie["movie_id"] === wishlist[j]["video_id"] && wishlist[j]["video_type"] === "1") { flag = true; break } else { flag = false }
			}
		}
		

		if (movie !== undefined) {
			cards.push(
				<div className="" key={i}>
					<div className="slide-one" style={ styleRemover ? {height: "430px"} : null }>
						<Link className="slide-image"  to={{ pathname: "/movies_detailed_page", state: { item: movie } }} style={{ display: "flex", justifyContent: "center" }}>
						{/* <div className="slide-image"  onClick={()=>{handleClick(movie)}} style={{ display: "flex", justifyContent: "center" }}> */}
							
							<img src={movie["thumbnail"]} alt={movie["movie_title"]} style={ styleRemover ? {height: "270px"} : null } onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/movie_thumbnail/default.jpg" }} />
						</Link>
						<div className="slide-content">
							<h2>{movie["movie_title"]}{movie["amount"] === "0" ? null : <span style={{ margin: "0px 0px 10px 16px"}}><AttachMoneyIcon /></span>}
							{/* Adding "visible" to refresh icon */}

							{visible ? <IconButton style={{ color: "#fff", fontSize: 30,  }}  aria-label="reqind">
							{flag ? <CheckIcon fontSize="inherit" onClick={() => { deleteFromWishList(movie["movie_id"]) }}></CheckIcon> : <AddIcon fontSize="inherit" onClick={() => { addToWishlist(movie["movie_id"]) }}></AddIcon>}
							</IconButton> : null }
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
					
					<div className="row">
                    <div className="col-lg-12">
					{cards.length && (
						<OwlCarousel options={options}>
							{
								cards
							}
						</OwlCarousel>
					)}</div></div>

				</div>
			</div>
		</div>
	);
}

export default MoviesCard;