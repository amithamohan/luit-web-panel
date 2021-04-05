import React, {Component} from 'react';

class Footer extends Component
{
	render()
	{
		return(
			<div>
				<div className="footer-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 lower-footer" />
							<div className="col-sm-6">
								<p className="copyright-text">© 2020 copyright. All rights reserved.</p>
							</div>
							<div cl	assName="col-sm-6 text-right">
								<p className="float-right copyright-text">
								<a href="#">Privacy Policy</a> |
								<a href="#">Terms of Use</a> |
								<a href="#">Refund Policy</a> |
								<a href="#">Help</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}