import React, {Component} from 'react';


class NavigationBar extends Component
{
	render()
	{
		return(
			<div className="header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 navbar p-0">
                        <a href="/" className="logo"><img src="images/logo.png" alt="logo" className="light"/><img src="images/logo.png" alt="logo" className="dark"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav nav-menu float-none text-center">
                                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/movies">Movies</a></li>
                                <li className="nav-item"><a className="nav-link" href="/music">Music</a></li>
                                <li className="nav-item"><a className="nav-link" href="/short_film">Short Movies</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">

                        <div className="user-avater">
                            <img src="https://via.placeholder.com/50x50.png" alt="user"/>
                            <div className="user-menu">
                                <ul>
                                    <li><a href="/sign_in"><i className="ti-power-off"></i>Login</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-div">
                            <input type="text" placeholder="Seacrh" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
		);
	}
}

export default NavigationBar;
