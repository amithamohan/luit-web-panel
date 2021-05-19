import Server from './APIs/Server';
import React, { useEffect, useState } from 'react';
import { Divider, Col, message, Row } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Container } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Card } from 'antd';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root:
    {
        flexGrow: 1,
        padding: theme.spacing(0.5)
    },
    div:
    {
        //height: "300px",
        paddingLeft: "40px",
        paddingRight: "40px",
        // background: "white"
    },

    img:
    {
        maxWidth: "100%",
        maxHeight: "100%",
        borderRadius: "6px",
    }
}))


// let list = [];


function WishList()
{
    const [status, setStatus] = useState(false);
    const [userId, setUserId] = useState('');
    const [loggedIn, setLoggedIn] = useState(true);
    const [list, setList] = useState('');


    let history = useHistory();


    useEffect(() =>
    {
        getUserDetails()
        displayWishList();
    });

    const getUserDetails = async () =>
    {
        let user = localStorage.getItem("user");

		let data = JSON.parse(user);
        // console.log(data)

        if(data !== null)
        {
            setUserId( data["id"]);
            // console.log(data["id"]);
        } else
        {
            setLoggedIn(false)
        }
    }

    const displayWishList = async () =>
    {

        // console.log(userId);
        // console.log("userId in wishlist");

        let response = await Server.displayWishlist(userId);
        setList(response["data"])
        // if(response["response"] === "success")
        // {
        //     console.log("object")
        //     message.success("Watch your favourites");
        // }else
        // {
        //     message.error("Add items to watchlist");
        // }
        
        setTimeout(
            () => setStatus(true),
            3000
          );
    }

    const deleteFromWishList = async (item) =>
    {
        //setStatus(false);
       // setVisible(false);
        let response = await Server.deleteWishlist(userId, item);

        console.log(response);

        if (response["response"] === "success")
        {
            list.pop(item);
            setStatus(true);
            message.success("Removed from wishlist");
        }
        else
        {
            message.error("Oops something went wrong");
        }
    }

    const handleClick = () =>
    {
        history.push("/movies_detailed_page");
    }

    const classes = useStyles()

    const text = [];
    const row = [];

    if (status === true)
    {
        console.log(list);
        console.log("list");

        for (let i = 0; i < list.length; i++) 
        {
            let movie = list[i]["video_details"][0];
            let id = list[i]["id"];

            // // let hour = "2500";
            // console.log(userId)
            // console.log(list[i])
            // //console.log(movie);
            let hour = movie["duration"].split('.');

            text.push(
               <div className="slide-wrapper" key={i} >
                   <div className="owl-items" to={{ pathname: "/movies_detailed_page", params: { item: movie } }}>
                        <Card hoverable className="slide-one"
                            style={{ width: "270px", borderRadius: "7px", marginLeft:"23px" }}
                            cover={<div className="slide-image" style={{ background: "white",  borderRadius: "7px" }}>
                                <img className={classes.img} style={{width: "100%",height: "210px", borderRadius: "7px"}} src={`${list[i]["video_details"][0]["poster"]}` === "" ? "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" : `${list[i]["video_details"][0]["poster"]}`} alt={movie["movie_title"]} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
                            </div>}>

                            <Grid container direction="row" alignItems="center" justify="space-between">
                                <Grid item>
                                    <b>{movie["type"] === "music" ? movie["title"] : movie["movie_title"]}</b>
                                </Grid>

                                <Grid item>
                                    <IconButton style={{color: "grey", fontSize: 30}} onClick={()=> { deleteFromWishList(id)}} aria-label="reqind">
                                    {/* {status ? <CheckIcon fontSize="inherit"></CheckIcon> :	<AddIcon fontSize="inherit"></AddIcon>} */}
                                    <AddIcon fontSize="inherit"></AddIcon>
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <span style={{ color: "grey" }}>{movie["description"]}</span>
                            <Grid container direction="row" alignItems="center" justify="space-between" style={{ color: "grey", marginTop:"15px"  }}>
                                <Grid item>
                                    <span>{hour[0]} hrs {hour[1]} mins</span>
                                </Grid>

                                <Grid item>
                                <span>{movie["publish_year"]}</span>
                                </Grid>

                                <Grid item>
                                <span><b>HD</b></span>
                                </Grid>

                                <Grid item>
                                    <span>{movie["ratings"]}+</span>  <i className="ti-star"></i>
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
               </div>
            );
        }
    }

    if (status === true)
    {
        for (let i = 0; i < list.length; i++)
        {
            let movie = list[i];

            row.push(
                <Col className="gutter-row" span={6} key={i}>
                    <Link className="slide-one" to={{ pathname: "/movies_detailed_page", params: { item: movie } }}>
                        <div className={classes.div}>
                            <img className={classes.img} src={`${list[i]["video_details"][0]["poster"]}` === "" ? "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" : `${list[i]["video_details"][0]["poster"]}`} alt={movie["movie_title"]} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
                            <Container style={{ backgroundColor: "white" }}>
                                <Row>{movie["movie_title"]}</Row>
                            </Container>
                        </div>
                    </Link>
                </Col>
            );
        }
    }


    if(loggedIn === false)
    {
        // console.log(userId)
        return(<Redirect to="/sign_in" />)
    }

    return (
        <div>
            <div>
                <Divider orientation="center">
                <div style={{width: "86vw", height:"35vh", backgroundColor:"whitesmoke", borderRadius:"7px", lineHeight:"14px"}}>
                    <h2 style={{ color: "black", fontSize:"50px", paddingTop:"6%" }}><b>Watchlist</b></h2>
                    <p>Watch your favourites.</p>
                    </div>
                </Divider>

                <Row gutter={[0, 35]} justify="left" style={{marginLeft:"5.4%"}}>
                    {text}
                </Row>

            </div>
        </div>
    );
}

export default WishList;