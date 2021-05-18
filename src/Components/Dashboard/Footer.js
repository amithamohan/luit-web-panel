import { Link } from '@material-ui/core';
import React, {Component} from 'react';

class Footer extends Component
{
	render()
	{
		return(
			<div>
			<footer className="footer" style={{fontFamily: "Montserrat"}}>
				<div className="footer-wrapper" style={{backgroundColor: "black"}}>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 lower-footer"></div>
							<div className="col-sm-6">
								<p className="copyright-text" style={{color:"white"}}>© 2020 copyright. All rights reserved.</p>
							</div>
							<div className="col-sm-6 text-right">
								<p className="float-right copyright-text">
								<Link style={{color:"white"}} href="/demo/luitWeb/build/privacy-policy">Privacy Policy</Link> | 
								<Link style={{color:"white"}} href="/demo/luitWeb/build/terms">Terms of Use</Link> | 
								<Link style={{color:"white"}} href="/">Help</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
				</footer>

			</div>
		);
	}
}

export default Footer;