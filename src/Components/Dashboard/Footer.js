import React, {Component} from 'react';
import { Link } from '@material-ui/core';
import { Divider } from 'antd';
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
							<div className="col-sm-6 col-lg-2 mt-4">
								<div>
									<h6 style={{color:'white', fontSize:15}}>SOCIAL LINKS</h6>
								</div>
								<div className="social-list">
									<a href="#">
										<div className="social-link">
											Facebook
										</div>
									</a>
									<a href="#">
										<div className="social-link">
											Twitter
										</div>
									</a>
									<a href="#">
										<div className="social-link">
											Instagram
										</div>
									</a>
									<a href="#">
										<div className="social-link">
											YouTube
										</div>
									</a>
								</div>
							</div>
							<div className="col-sm-6 col-lg-2 mt-4">
								<div>
									<h6 style={{color:'white', fontSize:15}}>ONLINE</h6>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Web </a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Series</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}> Natak</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Comedy</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Action</a>
								</div>
							</div>
							<div className="col-sm-6 col-lg-2 mt-4">
								<div>
									<h6 style={{color:'white', fontSize:15}}>LANGUAGE</h6>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Hindi </a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Arabic</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>English</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>French</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Spanish</a>
								</div>
							</div>
							<div className="col-sm-6 col-lg-2 mt-4">
								<div>
									<h6 style={{color:'white', fontSize:15}}>CHANNEL</h6>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>MakeUp Us</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Dresses</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Girls</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Headphones</a>
								</div>
							</div>
							<div className="col-sm-6 col-lg-2 mt-4">
								<div>
									<h6 style={{color:'white', fontSize:15}}>PAGES</h6>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>About Us</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Privacy Policy</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Terms of Use</a>
								</div>
								<div className="pages-link">
									<a href="#" style={{color: "white"}}>Help</a>
								</div>
							</div>
							<div className="col-sm-12 col-lg-2 mt-4">
								<div>
									<h6 style={{color:'white', fontSize:15}}>OFFICE</h6>
								</div>
								<div >
									<p style={{color: "white", marginTop: 15}}>
									41 madison ave, floor 24 new work, NY 10010
									1-877-932-7111
									</p>
								</div>	
							</div>
						</div>
						<Divider style={{ backgroundColor: "#737373"}}/>
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