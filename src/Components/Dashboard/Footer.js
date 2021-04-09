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
				<div class="footer-wrapper" style={{backgroundColor: "black"}}>
					<div class="container">
						<div class="row">
							<div class="col-sm-12 lower-footer"></div>
							<div class="col-sm-6">
								<p class="copyright-text" style={{color:"white"}}>© 2020 copyright. All rights reserved.</p>
							</div>
							<div class="col-sm-6 text-right">
								<p class="float-right copyright-text">
								<a style={{color:"white"}} href="/">Privacy Policy</a> | 
								<a style={{color:"white"}} href="terms_of_service">Terms of Use</a> | 
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