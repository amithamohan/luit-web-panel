import React, {useState, useEffect} from 'react';
import Server from '../APIs/Server';
import { Divider, Col, message, Row } from 'antd';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Card } from 'antd';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

const SearchBar = (props) => 
{
	const BarStyling = 
	{
		width:"55vw",
		background:"#F2F1F9", 
		border:"none", 
		padding:"0.5rem",
	    borderRadius: "9px",
		margin: "10vh auto 0px 22vw"
	};

    const [ moviesList, setMoviesList ] = useState([])
	const [ status, setStatus ] = useState(false)

	useEffect(()=>{
		getAllMovies();
	})

	const getAllMovies = async () =>
	{
		let response = await Server.fetchAllMovies();

		if (response["response"] === "success")
		{
			setMoviesList(response["data"]);
			console.log(response["data"])
			setTimeout(
				() => setStatus(true),
				3000
			  );
		}
		
	}

	const text = [];

     if(status === true){
		for (let i = 0; i < moviesList.length; i++) 
        {
            let movie = moviesList[i];
            let id = moviesList[i]["id"];

            let hour = movie["duration"].split('.');

            text.push(
               <div className="slide-wrapper" key={i} >
                   <div className="owl-items">
                        <Card hoverable className="slide-one"
                            style={{ width: "270px", borderRadius: "7px", margin:"15px", height: "430px" }}
                            cover={
                                <Link className="slide-image" to={{ pathname: "/movies_detailed_page", state: { item: movie } }}>
                                <img  style={{width: "100%",height: "250px", borderRadius: "7px"}} src={movie["thumbnail"]} alt={movie["movie_title"]} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
                            </Link>}>

                            <Grid container 
                            className="slide-content" alignItems="center" justify="space-between">
                                <Grid item>
                                    <b style={{ color: "white"  }}>{movie["type"] === "music" ? movie["title"] : movie["movie_title"]}</b>
                                </Grid>

                                {/* <Grid item>
                                    <IconButton style={{ color: "#fff", fontSize: 30,  }} onClick={() => { deleteFromWishList(id) }} aria-label="reqind">
                                    <AddIcon fontSize="inherit"></AddIcon>
                                    </IconButton>
                                </Grid> */}
                            </Grid> 
                             <span style={{ color: "grey" }}>{movie["description"]}</span>
                            <Grid container direction="row" alignItems="center" justify="space-between" style={{ color: "grey", marginTop:"15px"  }}>
                                <Grid item>
                                    <span>{hour[0]} hrs {hour[1]} mins</span>
                                </Grid>

                                <Grid item>
                                    <span>{movie["publish_year"]}</span>
                                </Grid>

                                <Grid item>
                                <span><b>HD</b></span>
                                </Grid>

                                <Grid item>
                                    <span>{movie["ratings"]}+</span>  <i className="ti-star"></i>
                                </Grid>
                            </Grid> 
                            
                        </Card>
                    </div>
               </div>
            );
        }
	 }

       


  	return (
		<div style={{minHeight:"71vh"}}>
    	<input style={BarStyling} key="random1" value="Search" placeholder={"search country"}/>
		<Row justify="left" style={{marginLeft:"5.4%"}}>
                    {text}
        </Row>
		</div>
  	);
}

export default SearchBar;