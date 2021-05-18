import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

const PayPopup = (props) => 
{
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => 
	{
		setIsModalVisible(true);
	};

	const history=useHistory();

	const handleOk = () => 
	{
		console.log(props.data);

		history.push({
			pathname: '/subscribe',
			state: { detail: props.data }
		  });
  	};

  	const handleCancel = () => 
	{
    	setIsModalVisible(false);
  	};

	return (
    	<div>
      		<Button className="btn btn-lg" onClick={showModal} style={{height: 50}}>
        		Pay Now
      		</Button>
      		<Modal title="Subscribe" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        		<h3>Please Subscribe to Watch this Video</h3>
      		</Modal>
    	</div>
  	);
};

export default PayPopup;