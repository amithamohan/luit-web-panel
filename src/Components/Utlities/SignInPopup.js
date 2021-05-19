import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

const SignInPopup = (props) => 
{
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => 
	{
		setIsModalVisible(true);
        console.log(props.data)
	};

	const history=useHistory();

	const handleOk = () => 
	{
		console.log(props.data);

		history.push({
			pathname: '/sign_in',
			state: { detail: props.data }
		  });
  	};

  	const handleCancel = () => 
	{
    	setIsModalVisible(false);
  	};

	return (
    	<div>
            {props.data === "fromNav" 
                ? <a onClick={showModal} style={{color: 'black'}}>My Wishlist</a>
                : <Button className="btn btn-lg" onClick={showModal} style={{height: 50}}>
                Watch now
                </Button>}
      		
      		<Modal title="User" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        		<h3>Please Sign In to access it.</h3>
      		</Modal>
    	</div>
  	);
};

export default SignInPopup;