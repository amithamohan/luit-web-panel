import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Server from './APIs/Server';
import NavigationBar from "./Dashboard/NavBar";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { IconButton } from '@material-ui/core';
import Footer from './Dashboard/Footer';

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

//const list = [];


export default function PaymentHistory()
{

    const [status, setStatus] = useState(false);
	const [statusMonthly, setStatusMonthly] = useState(false);
	const [list, setList] = useState([])
	const [listMonthly, setListMonthly] = useState([])
	// const [allHistory, setAllHistory] = useState([])

	useEffect(() =>
	{
		getPaymentHistory();
		displayMonthlySubscription();
	});

	const getPaymentHistory = async () =>
    {
		let user = localStorage.getItem("user");

		let data = JSON.parse(user);

		if(data != null){
			let userId = data["id"];

			let response = await Server.fetchPaymentHistory(userId);
	
			if(response["response"] === "success")
			{
				setList(response["data"]);
				setStatus(true);
			}
		}	
	}
	const displayMonthlySubscription = async () =>
    {
		let user = localStorage.getItem("user");

		let data = JSON.parse(user);

		if(data != null){
			let userId = data["id"];

			let response = await Server.displayMonthlySubscription(userId);
	
			if(response["response"] === "success")
			{
				setListMonthly(response["data"]);
				setStatusMonthly(true);
			}
		}
		
	}

    const classes = useStyles()
    const row = [];
	const row2 = [];
    let allHistory = [];

   if(status === true)
   {
		for(let i = 0; i < list.length; i++)
		{
			let movie = list[i]["array"][0];

			row.push(
			<div className="owl-items" key={i}>
				<div className="slide-one mx-1" key={i} style={{ height: "250px", width: "270px", }}>
					<div className="slide-content">
						<h2>
						<Link to={{pathname: "/movies_detailed_page", params:{item: movie}}}>{movie["type"] === "movie" ? movie["movie_title"] : movie["title"]} </Link>
						</h2>
						
						<p><b>Amount paid : </b>INR {list[i]["amount"]}</p>
						<span className="tag"><b>Payment Id :</b> {list[i]["ref_no"]}</span><br/>
						<span className="tag"><b>Date :</b> {list[i]["datetime"]}</span>
					</div>
				</div>
			</div>
			);
		}
   }

   if(statusMonthly === true)
   {
		for(let i = 0; i < listMonthly.length; i++)
		{
			
			row.push(
			<div className="owl-items" key={i}>
				<div className="slide-one mx-1" key={i} style={{ height: "250px", width: "270px", }}>
					<div className="slide-content">
						<p><b>Amount paid : </b>INR {listMonthly[i]["amount"]}</p>
						<span className="tag"><b>Valid Date :</b> {listMonthly[i]["valid_days"]}</span><br/>
						<span className="tag"><b>Start Date :</b> {listMonthly[i]["start_date"]}</span><br/>
						<span className="tag"><b>End Date :</b> {listMonthly[i]["end_date"]}</span><br/>
						<span className="tag"><b>Payment Id :</b> {listMonthly[i]["ref_no"]}</span>
					</div>
				</div>
			</div>
			);
		}
   }

   if(status === true || statusMonthly === true){
	   allHistory = [...row, ...row2]
   }

	return(
		<div>
			<div className="slide-wrapper">
			<NavigationBar/>
				{allHistory.length > 0 ? 
				<div className="container" style={{fontFamily: "Montserrat"}}>
					
					<Divider orientation="center"><h4 style={{color: "white"}}>Payment History</h4></Divider>
					<Row gutter={[8, 8]} justify="left">
						{allHistory}
					</Row>
						
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