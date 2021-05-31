// import { Button } from 'antd';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { message } from 'antd';
import Server from '../APIs/Server';
import { withRouter } from 'react-router-dom';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
class MusicCard extends Component
{
	
	constructor(props)
	{
		super(props);
		this.state =
		{
			visible:true,
			userId:'',
			styleRemover: true,
			//sideNav: true,
			musicWishlist:[]
		}
        this.redirectToHome = this.redirectToHome.bind(this);
	}
	options =
	{
		items: 4,
		margin: 5,
		itemsDesktop: [1000, 5],
		//nav: true,
		navText: ["<img src='images/left.png'/>", "<img src='images/right.png'/>"],
		loop: true,
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

	componentDidMount()
	{
		this.getUserDetails();
		//this.checkWishList();
		if(window.innerWidth < 580)
		{
			this.setState({styleRemover: false})  
			//this.setState({sideNav: false}) 
		}
		this.setState({visible:false});
	}

	async displayWishList(id)
    {
        let response = await Server.displayWishlist(id);
		this.setState({musicWishlist: response["data"]})
		this.setState({visible:true});
    }

	async getUserDetails()
	{
        let user = localStorage.getItem("user");
        let data = JSON.parse(user);

        if (data != null)
		{
			this.setState({userId:data["id"]});
			this.displayWishList(data["id"]);
        }
		console.log(data);
    }

	async addToWishlist (i)
	{
	
		let type = 2;
		let itemId = i;

		console.log(this.state.userId, type, itemId)

		let response = await Server.addToWishlist(this.state.userId, type, itemId);

		if (response["response"] === "success")
		{
			message.success('Added to wishlist');
		}
		else
		{
			message.info('Already added');
		}
		// call again
		this.setState({visible:false});
		this.displayWishList(this.state.userId);
	}

	async deleteFromWishList (item)
    {
		
		let wish = this.state.musicWishlist.filter((i) => {
			return i.video_id == item
		})
		
        let response = await Server.deleteWishlist(this.state.userId, wish[0]["id"]);

        if (response["response"] === "success")
        {
            message.success("Removed from wishlist");
        }
        else
        {
            message.error("Oops something went wrong");
        }
		// call again
		this.setState({visible:false});
		this.displayWishList(this.state.userId);
    }

	redirectToHome = () => 
	{
		console.log("on click");
		// const { history } = this.props;
		this.props.history.push("/music_detailed_page");

		// history.push('/music_detailed_page');
	}
		//   });

	render()
	{
		const cards = [];

		for (let i = 0; i < this.props.musicList.length; i++) {
			const music = this.props.musicList[i];
			
			let hour = this.props.musicList[i]["duration"].split('.');
			let flag1 = false;

			localStorage.setItem("music", JSON.stringify(this.props.musicList[i]));
			if(this.state.musicWishlist !== undefined)
			{
				for ( let j=0; j<this.state.musicWishlist.length ; j++)
				{
					if(music["id"] === this.state.musicWishlist[j]["video_id"] && this.state.musicWishlist[j]["video_type"] === "2") { flag1 = true; break } else { flag1 = false }
				}
			}
			

			if (music !== undefined) {
				cards.push(
					<div className="owl-items" key={i}>
						<div className="slide-one" style={ this.state.styleRemover ? {height: "430px"} : null }>
							<Link className="slide-image" to={{ pathname: "/music_detailed_page", state: { item: this.props.musicList[i] } }} style={{ display: "flex", justifyContent: "center" }}>
								<img src={music["thumbnail"]} alt={music["movie_title"]} style={ this.state.styleRemover ? {height: "270px"} : null } onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/movie_thumbnail/default.jpg" }} />
							</Link>
							<div className="slide-content">
								<h2>{music["title"]}{music["amount"] === "0" ? null : <span style={{ margin: "0px 0px 10px 16px"}}><AttachMoneyIcon /></span>}

									{/* Adding "visible" to refresh icon */}

									{this.state.visible ? <IconButton style={{ color: "#fff", fontSize: 30,  }}  aria-label="reqind">
									{flag1 ? <CheckIcon fontSize="inherit" onClick={e => {this.deleteFromWishList(music["id"]) }}></CheckIcon> : <AddIcon fontSize="inherit" onClick={e => {this.addToWishlist(music["id"]) }}></AddIcon>}
									</IconButton> : null }


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
			<div>
				<div className="slide-wrapper">
					<div className="container" style={{fontFamily: "Montserrat"}}>
						<div className="row">
							<div className="col-sm-6 text-left mb-4 mt-4">
								<h2>{this.props.title}</h2>
							</div>
						</div>
						{cards.length && (
							<OwlCarousel options={this.options}>
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
}

export default MusicCard;