import { Icon, Link } from '@material-ui/core';
import { Menu, Row, Col, Dropdown} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { Component } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { makeStyles } from '@material-ui/core/styles';

class NavigationBar extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            image: null,
            isLoggedIn: false,
        }

        this.getUserDetails = this.getUserDetails.bind(this);
    }

    componentDidMount()
    {
        this.getUserDetails();
    }

    async logOut()
    {
        let user = localStorage.getItem("user");

        let data = JSON.parse(user);

        this.setState({isLoggedIn : false});
    }

    async getUserDetails()
    {
        let user = localStorage.getItem("user");

        let data = JSON.parse(user);

        if (data != null) 
        {
            this.setState({ image: data["image"], isLoggedIn: true })
        } else 
        {
            this.setState({
                image: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            })
        }

    }

    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#1A2236", fontFamily: "Montserrat"}}>
                <a className="navbar-brand" href="/demo/luitWeb/build/"><img src="https://release.luit.co.in/app-assets/images/logo/logo.png" alt="logo" className="light" /></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/demo/luitWeb/build/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/demo/luitWeb/build/movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/demo/luitWeb/build/music">Music</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/demo/luitWeb/build/music">Short Films</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/demo/luitWeb/build/music">Web Series</a>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <Dropdown overlay = 
                            {<Menu>
                                <Menu.Item>
                                    {this.state.isLoggedIn ? <a rel="noopener noreferrer" href="/demo/luitWeb/build/sign_in">
                                        Logout
                                    </a> : <a rel="noopener noreferrer" href="/demo/luitWeb/build/sign_in">
                                        Login
                                    </a>}
                                </Menu.Item>
                                <Menu.Item>
                                    <a rel="noopener noreferrer" href="/wishlist">
                                        My Wishlist
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a rel="noopener noreferrer" href="/demo/luitWeb/build/profile">
                                        Profile
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a rel="noopener noreferrer" href="/demo/luitWeb/build/subscribe">
                                        Subscription
                                    </a>
                                </Menu.Item>
                            </Menu>}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <Avatar  src= {this.state.image ? this.state.image : "https://via.placeholder.com/50x50.png"}></Avatar><DownOutlined />
                        </a>
                      </Dropdown>,
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;