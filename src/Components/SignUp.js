import React, {Component} from 'react';
import "antd/dist/antd.css";
import { Button, Row} from "antd";
import history from './History';
import Server from './APIs/Server';

class SignUp extends Component
{
	constructor(props)
	{
		super(props);

		// this.init = this.init.bind(this);
		this.googleLogin = this.googleLogin.bind(this);
	}

	googleLogin()
	{
		console.log("HELLO WORLD");

		let response =  Server.googleLogin();
		console.log(response);
	}

	render()
	{
		return(
			<div>
				<div className="main-wrapper">
					<section className="form-wrapper">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-sm-5">

									<div className="form-div text-center" style={{backgroundColor: "#2B2D46" }} >
										<div className="col-sm-12 text-center">
											<a href="index.html" className="logo float-none mt-4"><img src="images/logo.png" alt="logo" className="light" onClick={this.googleLogin} /></a>
										</div>
										<div className="signInText" ><h3 style={{color: "white", fontWeight: "300", fontSize: "25px", lineHeight: "68px" }} >Sign in with</h3></div>

										{/* login buttons */}
										<div className="col-sm-12 col-lg-12 col-md-12">
											<Row>
												<Button type="primary" onClick={this.googleLogin}> Facebook </Button>
												<div className="col-sm-5"></div>
										  		<Button type="warning"> Google </Button>
											</Row>
										</div>
										{/* login buttons */}

										<form action="#">
											<div className="form-group mt-5">
												<input className="form-control" type="email" placeholder="Country Code" />
												<input className="form-control" type="text" placeholder="Phone Number" />
											</div>
											<div className="form-group form-check-label">
												<label htmlFor="tarms-check">
													<input className="d-none" type="checkbox" id="tarms-check" defaultChecked /><span className="checkbox" />
													<p>I understand and accept the <a href="term.html"> Terms &amp; Condition </a></p>
												</label>
											</div>
											<div className="form-group button-block text-center">
												<button className="form-btn" onClick={() => history.push('/')}>LOGIN</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default SignUp;