import NavigationBar from './Dashboard/NavBar';
import { Progress } from 'antd';
import React, { useEffect, useState } from 'react';
import Server from './APIs/Server';
import { Divider, Card, Col, Row} from 'antd';
import { ClockCircleOutlined, HistoryOutlined } from '@ant-design/icons';


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
		<div style={{}} >
			<div className="  site-card-border-less-wrapper">
			<center>
				<div style={{height: "200px", width: "40%", color: "white", fontFamily: "Montserrat", marginTop: 60}}>
					{status === true 
						? 	
						<Card title="Subscribed Contents" bordered={false} style={{ width: "auto", marginTop: 16  }} >
							
							<div>	
								<Progress type="circle" width={100} strokeWidth={3} percent={list["valid_days"]} format={() => `${list["valid_days"]} Days`} />
								<br/>
								<Divider />
								<Row >
								<Col >
								
								<h6 style={{color: "black"}}>Payment Id: </h6>
								</Col>
								<Col span={15}>
								<h6 style={{color: "black"}}> {list["ref_no"]}</h6>
								</Col>

								</Row>
								<Divider />
								<Row justify="space-around">
									<Col span={7} >
										<Row >
										&#x20B9;
										</Row>
										<Divider />
										<Row >
										<h6 style={{color: "black"}}> {list["amount"]}</h6>
										</Row>
									</Col>
									<Col span={7} >
										<Row >
										<ClockCircleOutlined  style={{marginBottom: 8}}/>
										</Row>
										<Divider />
										<Row>
										<h6 style={{color: "black"}}> {list["start_date"]}</h6>
										</Row>
										
									</Col>
									<Col span={7}>
										<Row className="">
										<HistoryOutlined style={{marginBottom: 8}}/>
										</Row>
										<Divider />
										<Row className="">
											<h6 style={{color: "black"}}> {list["end_date"]}</h6>
										</Row>
										
									</Col>
									
								</Row>
								
								
								
								
								
								
							</div> 
							</Card>
						:  <div><h2 style={{color: "white", marginTop: 300}}>No subscribition has been made</h2></div>}
				</div>
			</center>
			</div>
		</div>
	);
}

export default SubscribedContents;