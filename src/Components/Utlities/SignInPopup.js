import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";
import { Menu, Row, Col, Dropdown} from 'antd';
import { DownOutlined, LoginOutlined, UserOutlined, HeartOutlined, BankOutlined } from '@ant-design/icons';

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
                ? <Menu.Item icon={<HeartOutlined style={{marginLeft:'-4px'}}/>} ><a onClick={showModal} style={{color: 'black', marginLeft:'6px'}}>My Wishlist</a></Menu.Item>
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