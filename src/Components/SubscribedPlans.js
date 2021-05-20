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
				<div style={{height: "200px", color: "white"}}>
					{status === true ? <Progress type="circle" width={250} strokeWidth={3} percent={list["valid_days"]} format={() => `${list["valid_days"]} Days`} /> : null}
				</div>
			</center>
		</div>
	);
}

export default SubscribedContents;