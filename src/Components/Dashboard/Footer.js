import React, {Component} from 'react';

class Footer extends Component
{
	render()
	{
		return(
			<div>
			<footer className="footer">
			<p>Some footer nonsense!</p>
		  </footer>
				<div className="footer-wrapper" style={{backgroundColor: "black"}}>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 lower-footer"></div>
							<div className="col-sm-6">
								<p className="copyright-text" style={{color:"white"}}>© 2020 copyright. All rights reserved.</p>
							</div>
							<div className="col-sm-6 text-right">
								<p className="float-right copyright-text">
								<a style={{color:"white"}} href="/privacy_policies">Privacy Policy</a> | 
								<a style={{color:"white"}} href="/terms_of_service">Terms of Use</a> | 
								<a style={{color:"white"}} href="/">Refund Policy</a> | 
								<a style={{color:"white"}} href="/">Help</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;