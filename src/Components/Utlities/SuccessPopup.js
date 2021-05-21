import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useHistory, useLocation } from 'react-router';

function SuccessPopup ()
{
	const [isModalVisible, setIsModalVisible] = useState(true);

	const history = useHistory();
	const location = useLocation();

	let currentDate;
	let currentTime;

    useEffect(() =>
    {

		let newDate = new Date();
        let day = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();

		let time = newDate.getTime();
        currentDate = year+ "-" + month + "-" + day;
    }, [location]);

  	const showModal = () =>
	{
    	setIsModalVisible(true);
  	};

  	const handleOk = () =>
	{
    	setIsModalVisible(false);
		history.push("/");
  	};

  	const handleCancel = () =>
	{
    	setIsModalVisible(false);
  	};

  	return (
    	<div>
      		<Modal visible={isModalVisible} onOk={handleOk}>
			  <p><center><h4 style={{color:"green"}}>Thank you!</h4></center></p>
			  <div className="row mt-3">
					<div className="col-6">
						<span>Date </span><br />
						<span>{currentDate}</span>
					</div>
					<div className="col-6 text-center">
						<span>Time : {currentTime} </span>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-6">
						<span>{location.state.detail["name"]}</span><br />
						<span>{location.state.detail["email"]}</span>
					</div>
					<div className="col-6 text-center">
						<img src={location.state.detail["image"]} width={50} height={50}/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-6">
						<span>Amount </span><br />
						<span>{location.state.detail["amount"]}</span><br />
					</div>
					<div className="col-6 text-center">
						<span>Completed</span>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-6">
						<span>Payment Id</span><br />
						<span>{location.state.detail["refNumber"]}</span>
					</div>
				</div>
      		</Modal>
    	</div>
  	);
}


export default SuccessPopup;