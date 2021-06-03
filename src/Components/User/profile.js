import Footer from "../Dashboard/Footer";
import NavigationBar from "../Dashboard/NavBar";
import React, { Component } from "react";
import Server from "../APIs/Server";
import { Button, Divider } from 'antd';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined, CloseCircleFilled } from '@ant-design/icons';

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}

function beforeUpload(file) {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}

	const isLt2M = file.size / 1024 / 1024 < 2;

	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}
	return isJpgOrPng && isLt2M;
}

class ProfileInfo extends React.Component {
	state =
		{
			loading: false,
		};

	constructor(props) {
		super(props);

		this.state =
		{
			selectedFile: null,
			id: null,
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

		let updateResponse = await Server.updateUserProfie(this.state.username, this.state.email, this.state.phoneNumber, this.state.dob, age, this.state.image);
		
		//console.log(response);

		if (updateResponse["response"] === "success") {
			let profileResponse = await Server.userProfile(this.state.id);
			let user =
            {
				"id": this.state.id,
				"name": profileResponse.data[0]["name"],
                "email": profileResponse.data[0]["email"],
                "phoneNumber": profileResponse.data[0]["mobile"],
				"dob": profileResponse.data[0]["dob"],
				"image": updateResponse["image"] ,
                "isLoggedIn": true
            };
			localStorage.setItem("user", JSON.stringify(user));
			message.success("Profile Updated Successfully")
		}
		else {
			message.error("Oops, something went wrong");
		}
	}


	componentDidMount() 
	{
		let user = localStorage.getItem("user");

		let data = JSON.parse(user);

		//console.log(data["image"]);
		if(user !== null){
			this.state.id = data["id"];
			this.state.username = data["name"];
			this.state.email = data["email"];
			this.state.phoneNumber = data["phoneNumber"];
			this.state.dob = data["dob"];
			this.state.image = data["image"];
	
	
			this.setState({ image: data["image"] });
	
			//console.log(this.state.image);
		}
		
	}

	onUpdateName = (event) => 
	{
		this.setState({ username: event.target.value });
	}

	onUpdateEmail = (event) => 
	{
		this.setState({ email: event.target.value });
	}

	onUpdatePhoneNumber = (event) =>
	{
		this.setState({ phoneNumber: event.target.value });
	}

	onUpdateDob = (event) =>
	{
		this.setState({ dob: event.target.value });
	}


	handleChange = info =>
	{

		console.log(info);

		//beforeUpload(info.file);

		if (info.file.status === 'uploading')
		{
			this.setState({ loading: true,  });
			return;
		}

		if (info.file.status === 'done')
		{
			// console.log(info.file.name);
			// console.log(info.file);
			// console.log(info.file.uid);

			getBase64(info.file.originFileObj, image =>

				this.setState({
					image,
					loading: false,
				}),
			);

			console.log(this.state.image);

		}
	};

	render()
	{
		let user = localStorage.getItem("user");
		//console.log(user);

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
				<Divider orientation="center">
                <div style={{width: "86vw", height:"15vh", backgroundColor:"whitesmoke", borderRadius:"7px", lineHeight:"14px"}}>
                    <h2 style={{ color: "black", fontSize:"30px", paddingTop:"1%" }}><b>My Profile</b></h2>
                    <p style={{ color: "black"}}>Edit Your Profile</p>
                    </div>
                </Divider>
				<div style={{ backgroundColor: "#1A2236" }}>
					{/* <div className="page-nav">
					</div> */}

					{/* <div className="page-nav"> */}
						<div className="container">
							<div className="row justify-content-center">		
								<div className="col-lg-3 text-center">
									{/* <div id="accordion" className=" "> */}
										<div  className="form-div profile-container">
										<h6 style={{color: "white", marginBottom: "2rem"}}> Profile Picture</h6> 
											
											<Upload
												name="avatar"
												listType="picture-card"
												className="avatar-uploader"
												showUploadList={false}
												action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
												onChange={this.handleChange}>
												{this.state.image ? <img src={this.state.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
											</Upload>
											<div >
											<h4 style={{color: "white", marginTop: "2rem"}}>{this.state.username}</h4> 
											</div>
											
										</div>
									{/* </div> */}
								</div>
								<div className="col-lg-9">
									{/* <div id="accordion" className="accordion "> */}
										<div  className="form-div profile-container">
											
											<div className="row">
											<div className="col-lg-2 text-center">
											
											</div>
											<div className="col-lg-10">
											<form action="#">
													<div className="row">
														
														<div className="col-lg-10">
															<div className="form-group ">
																<input className="form-control" value={this.state.username} type="text" placeholder="Name" onChange={this.onUpdateName} />
																<input className="form-control" disabled value={this.state.phoneNumber} type="tel" placeholder="Phone Number" onChange={this.onUpdatePhoneNumber} />
															</div>
														</div>
														<div className="col-sm-10">
															<div className="form-group ">
																<input className="form-control" disabled value={this.state.email} type="email" placeholder="Email address" onChange={this.onUpdateEmail} />
																<input className="form-control" value={this.state.dob} type="date" placeholder="D.O.B" onChange={this.onUpdateDob} />

															</div>
														</div>
													</div>

													<div className="text-center">
														<div className="row">
															<div className="col-lg-3 mt-2">
																<Button style={{ height: "60px", borderRadius:10,backgroundColor: "transparent" }} 
																type="default"
																block={true} size="large" danger>CANCEL</Button>
															</div>
															<div className="col-lg-4 mt-2">
																<Button style={{ height: "60px", borderRadius:10}} type="primary" 
																block={true} 
																
																onClick={this.submitForm} size="large" danger> UPDATE PROFILE </Button>
															</div>
														</div>
													</div>
												</form>
											</div>
												
											</div>
										</div>
									{/* </div> */}
								</div>
							</div>
						</div>
					
					{/* </div> */}
				</div>
			</div>
		);
	}
}

export default ProfileInfo;