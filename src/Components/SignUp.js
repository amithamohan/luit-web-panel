import React, {Component} from 'react';
import FacebookLoginWithButton from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import history from './History';

class SignUp extends Component
{
	render()
	{
		return(
			<div>
				<div className="main-wrapper">
				<section className="form-wrapper">
					<div className="container">
					<div className="row justify-content-center">
						<div className="col-sm-5">

						<div className="form-div text-center">
						<div className="col-sm-12 text-center">
						<a href="index.html" className="logo float-none mt-4"><img src="images/logo.png" alt="logo" className="light" /></a>
						</div>
							<div className="signInText"><h3>Sign In With</h3>
							</div>
							{/* login buttons */}
							<div className="login-buttons col-sm-12">
									<FacebookLoginWithButton textButton="Facebook" appId="1206715649505081" fields="name,email,picture" icon="fa-facebook"/>
									<GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="Google" cookiePolicy={'single_host_origin'}/>
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