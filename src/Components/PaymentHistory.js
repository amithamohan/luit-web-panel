import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Server from './APIs/Server';
import NavigationBar from "./Dashboard/NavBar";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:
    {
        flexGrow: 1,
        padding: theme.spacing(0.5)
    },
    div:
    {
        height: "250px",
        paddingLeft: "10px",
        paddingRight: "10px",
    },
}))

//let list = [];


export default function PaymentHistory()
{

    const [status, setStatus] = useState(false);
	const [historyData, setHistoryData] = useState([]);

	useEffect(() =>
	{
		getPaymentHistory();
	},[]);

	const getPaymentHistory = async () =>
    {
		let user = localStorage.getItem("user");
		console.log("object")
		let data = JSON.parse(user);

		if(data != null){
			let userId = data["id"];

			let response = await Server.fetchPaymentHistory(userId);
	
			if(response["response"] === "success")
			{
				setHistoryData(response["data"]);
				// for(let i = 0; i < response["data"].length; i++)
				// {
				// 	if(response["data"][i]["array"][0] !== undefined)
				// 	{
				// 		//list.push(response["data"][i]);
				// 		setHistoryData(response["data"][i]);
				// 	}
				// }
				setStatus(true);
			}
		}
		
	}

    const classes = useStyles()
    const row = [];

   if(status === true)
   {
		for(let i = 0; i < historyData.length; i++)
		{
			let data = historyData[i]["array"][0];

			row.push(
			<div className="owl-items" key={i}>
				<div className="slide-one mx-1" key={i} style={{ height: "230px", width: "270px", }}>
				{/* <Col   key={i}> */}
					{/* <Link className="slide-image" to={{pathname: "/movies_detailed_page", params:{item: movie}}} style={{ display: "flex", justifyContent: "center" }}>
							<div className={classes.div}>
								<img src={movie["thumbnail"]} alt="movie" onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} style={{  minWidth: "270px", height: "100%"}} />
							</div>
					</Link> */}
					<div className="slide-content">
						<h2>{historyData[i]["array"][0]["type"] === "movie" ? historyData[i]["array"][0]["movie_title"] : historyData[i]["array"][0]["title"]} </h2>
						<p>INR {historyData[i]["amount"]}</p>
						<span className="tag">Payment Id: {historyData[i]["ref_no"]}</span>
						<span className="tag">Date: {historyData[i]["datetime"]}</span>
					</div>
				{/* </Col> */}
				</div>
			</div>
			);
		}
   }

	return(
		<div>
			<div className="slide-wrapper ">
			<NavigationBar/>
				{status === true ? <div className="container" style={{fontFamily: "Montserrat", height:"55vh"}}>
					<center><h4 style={{color: "white"}}>Payment History</h4></center>
					<div className="row">
						<div className="col-sm-12 mt-4 ">
							<Divider orientation="center" style={{color: "white"}}></Divider>
							<Row gutter={[8, 8]} justify="left">
								{row}
							</Row>
						</div>
					</div>
				</div>
				: 	<div style={{paddingTop: "150px", height:"55vh"}}>
						<center>
							<h4 style={{color: "white", fontFamily: "Montserrat"}}><IconButton style={{color: "white", fontSize: 50}}>
							<ErrorOutlineIcon/>
						</IconButton>You haven't made any payments</h4>
						</center>
					</div>}
			</div>
		</div>
	);
}