// import { Component } from "react";
// import Footer from "../Dashboard/Footer";
// import NavigationBar from "../Dashboard/NavBar";

// class ProfileInfo extends Component
// {
// 	render()
// 	{
// 		return(
// 			<div>
//     			<NavigationBar/>
// 				<div style={{backgroundColor:"white"}}>
// 					<div className="page-nav">
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-sm-12 text-center">
// 									<h2 className="mb-1">My Profile</h2>
// 									<p>Create custom landing pages with that converts.</p>
// 									<img src="https://via.placeholder.com/100x100.png" alt="user" className="avatar" />
//                                 <div className="p-image">
//                                     <i className="ti-camera upload-button"></i>
//                                     <input className="file-upload" type="file" accept="image/*" />
//                                 </div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="faq-page">
// 						<div className="container">
// 						<div className="row justify-content-center">
// 							<div className="col-sm-8">
// 							<div id="accordion" className="accordion">
// 								<div className="card mb-3">
// 								<div className="card-header" id="headingOne">
// 									<h5 className="mb-0">
// 									<button className="btn btn-link small-text collapsed pl-5 text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
// 										<i className="ti-user" />Account Settings <span>Create custom landing pages with that converts.</span>
// 									</button>
// 									</h5>
// 								</div>
// 								<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
// 									<div className="card-body form-div">
// 									<form action="#">
// 										<div className="row">
// 										<div className="col-sm-6">
// 											<div className="form-group mt-4">
// 											<input className="form-control" type="text" placeholder="Name" />
// 											<input className="form-control" type="tel" placeholder="Phone Number" />
// 											</div>
// 										</div>
// 										<div className="col-sm-6">
// 											<div className="form-group mt-4">
// 											<input className="form-control" type="email" placeholder="Email address" />
// 											<input className="form-control" type="date" placeholder="D.O.B" />
// 											</div>
// 										</div>
										
// 										</div>
										
// 										<div className="form-group button-block text-center">
// 										<div className="row">
// 										<div className="col-4">
// 										<a className="form-btn member-bttn3 text-white inline-flex col-12" href="/" >CANCEL</a>
// 										</div>
// 										<div className="col-8">
// 										<a className="form-btn member-bttn3 text-white inline-flex col-12" href="/" >Submit</a>
// 										</div>
// 										</div>
// 										<p className="sign-up-text">Already have an account?<a href="/sign_in">Sign in</a></p>
// 										</div>
										
// 									</form>
// 									</div>
// 								</div>
// 								</div>
// 								<div className="card mb-3">
// 								<div className="card-header" id="headingTwo">
// 									<h5 className="mb-0">
// 									<button className="btn btn-link small-text collapsed pl-5 text-left" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
// 										<i className="ti-credit-card" /> Payment Info <span>Create custom landing pages with that converts.</span>
// 									</button>
// 									</h5>
// 								</div>
// 								<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
// 									<div className="card-body form-div ">
// 									<form action="#">
// 										<div className="row">
// 										<div className="col-sm-12">
// 											<div className="form-group mt-4">
// 											<input className="form-control" type="text" placeholder="Cardholder Name" />
// 											</div>
// 										</div>
// 										<div className="col-sm-12">
// 											<div className="form-group ">
// 											<input className="form-control" type="text" placeholder="Card Number" />
// 											</div>
// 										</div>
// 										<div className="col-sm-6">
// 											<div className="form-group ">
// 											<input className="form-control" type="text" placeholder="Expiry Date" />
// 											</div>
// 										</div>
// 										<div className="col-sm-6">
// 											<div className="form-group ">
// 											<input className="form-control" type="text" placeholder="CVV" />
// 											</div>
// 										</div>
// 										</div>
// 										<div className="form-group button-block text-center">
// 										<a className="form-btn d-block member-bttn4 text-white">Pay Now</a>
// 										</div>
// 									</form>
// 									</div>
// 								</div>
// 								</div>
// 								<div className="card mb-3">
// 								<div className="card-header" id="headingTwo">
// 									<h5 className="mb-0">
// 									<button className="btn btn-link small-text collapsed pl-5 text-left" data-toggle="collapse" data-target="#collapseTHree" aria-expanded="false" aria-controls="collapseTHree">
// 										<a href="home.html"><i className="ti-power-off" /> Log Out  <span>Create custom landing pages with that converts.</span></a>
// 									</button>
// 									</h5>
// 								</div>
// 								<div id="collapseTHree" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
// 								</div>
// 								</div>
// 							</div>
// 							</div>
// 						</div>
// 						</div>
// 					</div>
// 				</div>
// 				<Footer/>
// 			</div>
// 		);
// 	}
// }

// export default ProfileInfo;