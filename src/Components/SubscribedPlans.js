import NavigationBar from './Dashboard/NavBar';
import { Progress } from 'antd';
import React, { useEffect, useState } from 'react';
import Server from './APIs/Server';

let list;

function SubscribedContents()
{
	const [status, setStatus] = useState(false);

	useEffect(() =>
	{
		getSubscriptionPlan();
	});

	const getSubscriptionPlan = async () =>
    {
		let user = localStorage.getItem("user");

		let data = JSON.parse(user);

		let userId = data["id"];

		let response = await Server.subscribedContents(userId);

		if(response["response"] === "success")
		{
			console.log(response["data"][0]);
			list = response["data"][0];
			setStatus(true);
		}
	}
	return(
		<div style={{paddingTop: "200px"}}>
			<center>
				<div style={{height: "200px", color: "white", fontFamily: "Montserrat"}}>
					{status === true 
						? 	<div>
								<Progress type="circle" width={250} strokeWidth={3} percent={list["valid_days"]} format={() => `${list["valid_days"]} Days`} />
								<br/>
								<h4 style={{color: "white"}}>INR {list["amount"]}</h4>
								<h4 style={{color: "white"}}>Start date: {list["start_date"]}</h4>
								<h4 style={{color: "white"}}>End date: {list["end_date"]}</h4>
								<h4 style={{color: "white"}}>Payment Id: {list["ref_no"]}</h4>
							</div> 
						:  <div><h2 style={{color: "white"}}>No subscribition has been made</h2></div>}
				</div>
			</center>
		</div>
	);
}

export default SubscribedContents;