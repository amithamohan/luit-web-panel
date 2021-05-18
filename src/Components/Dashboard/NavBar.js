import { Icon } from '@material-ui/core';
import { Menu, Row, Col, Dropdown} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { Component } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { makeStyles } from '@material-ui/core/styles';


// class NavigationBar extends Component
// {
//     constructor(props)
//     {
//         super(props);

//         this.state =
//         {
//             image: null,
//             isLoggedIn: false,
//         }

//         this.getUserDetails = this.getUserDetails.bind(this);
//     }

//     componentDidMount()
//     {
//         this.getUserDetails();
//     }

//     async logOut()
//     {
//         let user = localStorage.getItem("user");

//         let data = JSON.parse(user);

//         this.setState({isLoggedIn : false});
//     }

//     async getUserDetails()
//     {
//         let user = localStorage.getItem("user");

//         let data = JSON.parse(user);

//         if (data != null) {
//             this.setState({ image: data["image"], isLoggedIn: true })
//         } else {
//             this.setState({
//                 image: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
//             })
//         }

//     }
//     render() {
//         return (
//             <div className="header-wrapper">
//                 <div className="container">
//                     <div className="row">
                        // <div className="col-lg-8 navbar p-0">
                            // <a href="/" className="logo"><img src="https://release.luit.co.in/app-assets/images/logo/logo.png" alt="logo" className="light" /><img src="images/logo.png" alt="logo" className="dark" /></a>
                        //     <button className="navbar-toggler" type="button" data-toggle="collapse"
                        //         data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        //         aria-expanded="false" aria-label="Toggle navigation">
                        //         <span className="navbar-toggler-icon"></span>
                        //     </button>
                            // <div id="navbarNavDropdown">
                            //     <ul className="navbar-nav nav-menu float-none text-center">
                            //         <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            //         <li className="nav-item"><a className="nav-link" href="/movies">Movies</a></li>
                            //         <li className="nav-item"><a className="nav-link" href="/music">Music</a></li>
                            //         {/*<li className="nav-item"><a className="nav-link" href="/short_film">Short Movies</a></li>*/}
                            //     </ul>
                            // </div>
                        // </div>
                        // <div className="col-lg-4">
                        //     <div className="user-avater">
                        //         {this.state.image ? <img src={this.state.image} alt="user" /> : <img src="https://via.placeholder.com/50x50.png" alt="user" />}
                        //         <div className="user-menu">
                        //             <ul>
                        //                 {!this.state.isLoggedIn ? <li><a href="/sign_in"><i className="ti-power-off"></i>Login</a></li> :
                        //                     <li><a href="/sign_in"><i className="ti-power-off"></i>Logout</a></li>}
                        //                 <li><a href="/profile"><i className="ti-user"></i>Profile</a></li>
                        //                 <li><a href="/sign_in"><i className="ti-menu-alt"></i>Subscription Plans</a></li>
                        //                 <li><a href="/wishlist"><i className="ti-heart"></i>My Wishlist</a></li>
                        //             </ul>
                        //         </div>
                        //     </div>
                        //     <div className="search-div">
                        //         <input type="text" placeholder="Search" />
                        //     </div>
                        // </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default NavigationBar;


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
                            <a className="nav-link" href="/demo/luitWeb/build/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/demo/luitWeb/build/movies">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/demo/luitWeb/build/music">Music</a>
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
                                    {this.state.isLoggedIn ? <a rel="noopener noreferrer" href="/demo/luitWeb/build/sign_in" onClick={e => {this.logOut()}}>
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