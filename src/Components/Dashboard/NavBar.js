import { Icon, Link } from '@material-ui/core';
import { Menu, Row, Col, Dropdown} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { Component } from 'react';
import { DownOutlined, LoginOutlined, UserOutlined, HeartOutlined, BankOutlined } from '@ant-design/icons';
import { makeStyles } from '@material-ui/core/styles';
import SignInPopup from '../Utlities/SignInPopup';
import { IconButton } from "@material-ui/core";
import ToggleButton from '@material-ui/lab/ToggleButton';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

class NavigationBar extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            image: null,
            isLoggedIn: false,
            menu: false,
            flag: true
        }

        this.getUserDetails = this.getUserDetails.bind(this);
        this.ToggleButton = this.ToggleButton.bind(this)
    }

    componentDidMount()
    {
        this.getUserDetails();
        if(window.innerWidth < 770){
            this.setState({flag:false})
        }
    }

    async logOut()
    {
        
        localStorage.clear();

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

    ToggleButton(){
        this.setState({ menu: !this.state.menu })
    }

    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#1A2236", fontFamily: "Montserrat"}}>
                <a className="navbar-brand" href="/demo/luitWeb/build/"><img src="https://release.luit.co.in/app-assets/images/logo/logo.png" alt="logo" className="light" /></a> 

                <ToggleButton className="navbar-toggler" value="module" aria-label="module" onClick={e => {this.ToggleButton()}}>
                <FormatAlignJustifyIcon fontSize="medium" style={{color:"white"}} className="navbar-toggle"/>
                </ToggleButton>

                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={this.state.menu ? {display:"block"} : {display:"none"}}>
                    <ul className="navbar-nav mr-auto nav-menu float-none text-center" >
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
                            <Link className="nav-link" href="/demo/luitWeb/build/music">Short Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/demo/luitWeb/build/music">Web Series</Link>
                        </li>
                    </ul>
                </div>

                <div className="searchBar">
                    <form className="form-inline my-2 my-lg-0" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <Dropdown overlay = 
                            {<Menu>
                                <Menu.Item icon={<LoginOutlined/>}>
                                    {this.state.isLoggedIn ? <a rel="noopener noreferrer" href="/demo/luitWeb/build/sign_in">
                                     Logout
                                    </a> : <a rel="noopener noreferrer" href="/demo/luitWeb/build/sign_in">
                                        Login
                                    </a>}
                                </Menu.Item>

                                <Menu.Item icon={<HeartOutlined />}>
                                    {this.state.isLoggedIn 
                                        ? <a rel="noopener noreferrer" href="/wishlist"> 
                                        My Wishlist </a>
                                        : <SignInPopup data="fromNav" />}
                                </Menu.Item>

                                <Menu.Item icon={<UserOutlined/>}>
                                    <a rel="noopener noreferrer" href="/demo/luitWeb/build/profile">
                                        Profile
                                    </a>
                                </Menu.Item>
                                <Menu.Item icon={<BankOutlined/>}>
                                    <a rel="noopener noreferrer" href="/demo/luitWeb/build/subscribe">
                                        Subscription
                                    </a>
                                </Menu.Item>
                                <Menu.Item icon={<BankOutlined/>}>
                                    <a rel="noopener noreferrer" href="/demo/luitWeb/build/payment-history">
                                        Payment History
                                    </a>
                                </Menu.Item>
                                <Menu.Item icon={<BankOutlined/>}>
                                    <a rel="noopener noreferrer" href="/demo/luitWeb/build/subscribed-contents">
                                        Subscribed Contents
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