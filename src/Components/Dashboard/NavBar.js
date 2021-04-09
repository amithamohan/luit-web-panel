import Avatar from 'antd/lib/avatar/avatar';
import React, {Component} from 'react';
import {Navbar, Nav, FormControl, Form} from 'react-bootstrap';

const navbar =
{
	color: "white",
}

class NavigationBar extends Component
{
	render()
	{
		return(
			<Navbar expand="lg">
  				<Navbar.Brand href="/"><img src="images/logo.png"/></Navbar.Brand>
  				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" style={{marginRight:"45"}}>
					<Nav className="ml-auto">
						<Nav.Link style={navbar} href="/">Home</Nav.Link>
						<Nav.Link style={navbar} href="/movies">Movies</Nav.Link>
						<Nav.Link style={navbar} href="/music">Music</Nav.Link>
						<Nav.Link style={navbar} href="/web_series">Web Series</Nav.Link>
						<Nav.Link style={navbar} href="/short_film">Short Films</Nav.Link>
						<Nav.Link style={navbar} href="/sign_in">Short Films</Nav.Link>
					</Nav>
					<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					</Form>
					<a href="/profile">
					<Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rHk-t6N9r-UDu9KB5irEON9DwIWDX3Roig&usqp=CAU"/>
					</a>
  				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavigationBar;