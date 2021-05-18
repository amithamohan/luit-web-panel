import Footer from "../Dashboard/Footer";
import NavigationBar from "../Dashboard/NavBar";
import React, { Component } from "react";
import Server from "../APIs/Server";
import { Button } from 'antd';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

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

		console.log(response);

		if (response["response"] === "success") {
			message.success("Profile Updated Successfully")
		}
		else {
			message.error("Oops, something went wrong");
		}
	}


	componentDidMount() {
		let user = localStorage.getItem("user");

		let data = JSON.parse(user);

		console.log(data["image"]);

		this.state.username = data["name"];
		this.state.email = data["email"];
		this.state.phoneNumber = data["phoneNumber"];
		this.state.dob = null;
		this.state.image = data["image"];


		this.setState({ image: data["image"] });

		console.log(this.state.image);
	}

	onUpdateName = (event) => {
		this.setState({ username: event.target.value });
	}

	onUpdateEmail = (event) => {
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

		if (info.file.status === 'uploading')
		{
			this.setState({ loading: true });
			return;
		}

		if (info.file.status === 'done')
		{
			console.log(info.file.name);
			console.log(info.file);
			console.log(info.file.uid);

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
		console.log(user);

		const { loading, imageUrl } = this.state;

		const uploadButton = (
			<div>
				{loading ? <LoadingOutlined /> : <PlusOutlined />}
				<div style={{ marginTop: 8 }}>Upload</div>
			</div>
		);

		return (
			<div>
				<NavigationBar />
				<div style={{ backgroundColor: "white" }}>
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
										{this.state.image ? <img src={this.state.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
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
										<div>
											<div className="card-body form-div">
												<form action="#">
													<div className="row">
														<div className="col-sm-6">
															<div className="form-group mt-4">
																<input className="form-control" value={this.state.username} type="text" placeholder="Name" onChange={this.onUpdateName} />
																<input className="form-control" value={this.state.phoneNumber} type="tel" placeholder="Phone Number" onChange={this.onUpdatePhoneNumber} />
															</div>
														</div>
														<div className="col-sm-6">
															<div className="form-group mt-4">
																<input className="form-control" value={this.state.email} type="email" placeholder="Email address" onChange={this.onUpdateEmail} />
																<input className="form-control" value={this.state.dob} type="date" placeholder="D.O.B" onChange={this.onUpdateDob} />
															</div>
														</div>
													</div>

													<div className="text-center">
														<div className="row">
															<div className="col-4">
																<Button style={{ heigth: "200px", width: "130px" }} type="primary" block={true} size="large" danger>CANCEL</Button>
															</div>
															<div className="col-8">
																<Button style={{ heigth: "200px", width: "130px" }} type="primary" onClick={this.submitForm} size="large" danger> SUBMIT </Button>
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
				<Footer />
			</div>
		);
	}
}

export default ProfileInfo;