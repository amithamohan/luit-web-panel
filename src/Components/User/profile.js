import Footer from "../Dashboard/Footer";
import NavigationBar from "../Dashboard/NavBar";
import React, { Component, useState } from "react";
import { Upload } from 'antd';
import { IconButton } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Server from "../APIs/Server";
import { Modal, Button } from 'antd';



class ProfileInfo extends Component
{
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
		
		}

		this.submitForm = this.submitForm.bind(this);
	}

	componentDidMount()
	{
		let data = localStorage.getItem("user");
		// console.log(data["name"]);
		// this.setState({username: data["name"]});
		console.log(this.state.username);
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

	onFileChange = event =>
	{
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			this.setState({
			  image: URL.createObjectURL(img)
			});
		  }
		// this.setState({image: event.target.files[0], selectedFile: true});
		console.log(event.target.files[0])
		console.log(this.state.img)
		console.log(this.state.image)
	};

	async submitForm()
	{
		let age;
		let image;

		console.log(this.state.username);
		let response = await Server.updateUserProfie(this.state.username, this.state.email, this.state.phoneNumber, this.state.dob, age, this.state.image);

		console.log(response);
	}

	render()
	{
		return(
			<div>
				<NavigationBar/>

				<div style={{backgroundColor:"white"}}>

					<div className="page-nav">
						<div className="container">
							<div className="row">
								<div className="col-sm-12 text-center">
									<h2 className="mb-1">My Profile</h2>
									<p>Create custom landing pages with that converts.</p>

									{this.state.selectedFile ? <img src= {this.state.image} alt="user" className="avatar" /> :<img src= "https://via.placeholder.com/100x100.png" alt="user" className="avatar" />}
								<div className="p-image">
									<IconButton onClick={this.onFileChange}>
										<Add></Add>
									</IconButton>
									<i className="ti-camera upload-button"></i>
									<input className="file" type="file" accept="image/*"  onChange={this.onFileChange} />
								</div>
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

													<div className="form-group button-block text-center">
														<div className="row">
															<div className="col-4">
																<button className="form-btn member-bttn3 text-white inline-flex col-12">CANCEL</button>
															</div>
															<div className="col-8">
																<button className="form-btn member-bttn3 text-white inline-flex col-12" onClick={this.submitForm} >SUBMIT</button>
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

				<Modal title="Basic Modal">
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			  </Modal>
			  
			</div>
		);
	}
}

export default ProfileInfo;