import Footer from "../Dashboard/Footer";
import NavigationBar from "../Dashboard/NavBar";
import React, { Component } from "react";
import Server from "../APIs/Server";
import { Button } from 'antd';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback)
{
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) 
{
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  	if (!isJpgOrPng) 
	{
    	message.error('You can only upload JPG/PNG file!');
  	}

  	const isLt2M = file.size / 1024 / 1024 < 2;

  	if (!isLt2M) 
	{
    	message.error('Image must smaller than 2MB!');
  	}
  	return isJpgOrPng && isLt2M;
}

class ProfileInfo extends React.Component
{
  	state =
	{
    	loading: false,
  	};

  	constructor(props)
	{
		super(props);

		this.state =
		{
			selectedFile: null,
			username: null,
			email: null,
			phoneNumber: null,
			dob: null,
			image: null,
			loading: false,
		}

		this.submitForm = this.submitForm.bind(this);
	}

	async submitForm()
	{
		let age;

		let response = await Server.updateUserProfie(this.state.username, this.state.email, this.state.phoneNumber, this.state.dob, age, this.state.image);
	}


	componentDidMount()
	{
		let data = localStorage.getItem("user");
		console.log(data["name"]);
		this.setState({username: data["name"]});
		console.log(this.state.username);;
	}

	onUpdateName = (event) =>
	{
		this.setState({username: event.target.value});
	}

	onUpdateEmail = (event) =>
	{
		this.setState({email: event.target.value});
	}

	onUpdatePhoneNumber = (event) =>
	{
		this.setState({phoneNumber: event.target.value});
	}

	onUpdateDob = (event) =>
	{
		this.setState({dob: event.target.value});
	}


	handleChange = info =>
  	{
		if (info.file.status === 'uploading') 
		{
      		this.setState({ loading: true });
      		return;
    	}
    	if (info.file.status === 'done') 
		{
      		// Get this url from response in real world.
      		getBase64(info.file.originFileObj, imageUrl =>
				this.setState({
					imageUrl,
					loading: false,
				}),
      		);
    	}
  	};

  	render() 
	{
    	const { loading, imageUrl } = this.state;
    	const uploadButton = (
      		<div>
        		{loading ? <LoadingOutlined /> : <PlusOutlined />}
        		<div style={{ marginTop: 8 }}>Upload</div>
      		</div>
    	);

    	return (
			<div>
		 		<NavigationBar/>
				<div style={{backgroundColor:"white"}}>
					<div className="page-nav">
						<div className="container">
							<div className="row">
								<div className="col-sm-12 text-center">
									<h2 className="mb-1">My Profile</h2>
								</div>
								<div className="col-sm-12 text-center">
									<Upload
										name="avatar"
										listType="picture-card"
										className="avatar-uploader"
										showUploadList={false}
										action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
										onChange={this.handleChange}>
										{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
									</Upload>
								</div>
							</div>
						</div>
					</div>

					<div className="faq-page">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-sm-8">
									<div id="accordion" className="accordion">
										<div className="card mb-3">
											<div className="card-body form-div">
												<form action="#">
													<div className="row">
														<div className="col-sm-6">
															<div className="form-group mt-4">
																<input className="form-control" type="text" placeholder="Name" onChange = {this.onUpdateName}/>
																<input className="form-control" type="tel" placeholder="Phone Number" onChange = {this.onUpdatePhoneNumber}/>
															</div>
														</div>
														<div className="col-sm-6">
															<div className="form-group mt-4">
																<input className="form-control" type="email" placeholder="Email address" onChange = {this.onUpdateEmail}/>
																<input className="form-control" type="date" placeholder="D.O.B" onChange = {this.onUpdateDob} />
															</div>
														</div>
													</div>

													<div className="text-center">
														<div className="row">
															<div className="col-4">
																<Button style={{heigth: "200px", width: "130px"}} type="primary"  block={true} size="large" danger>CANCEL</Button>
															</div>
															<div className="col-8">
															<Button style={{heigth: "200px", width: "130px"}} type="primary" onClick={this.submitForm} size="large" danger> SUBMIT </Button>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
    	);
  	}
}

export default ProfileInfo;