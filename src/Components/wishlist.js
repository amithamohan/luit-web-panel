import Server from './APIs/Server';
import React, { useEffect, useState } from 'react';
import { Divider, Col, message, Row } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Card } from 'antd';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';


const useStyles = makeStyles(theme => ({
    root:
    {
        flexGrow: 1,
        padding: theme.spacing(0.5)
    },
    div:
    {
        height: "300px",
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


const list = []; 



const customCard =
{
    width: 100,
    height: 35,
}


function WishList() {
    const [status, setStatus] = useState(false);
    const [userId, setUserId] = useState();

    let history = useHistory();

<<<<<<< HEAD
<<<<<<< HEAD
    let data;
    let userId;
=======
>>>>>>> test
=======
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c

    useEffect(() => {
        getUserDetails();
        displayWishList();
    });

    const getUserDetails = async () => {
        let user = localStorage.getItem("user");
<<<<<<< HEAD
<<<<<<< HEAD

        let data = JSON.parse(user);

        if (data != null) {
            userId = data["id"];
            console.log(data["id"]);
        }

=======
=======
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c
		
		let data = JSON.parse(user);
		
        setUserId( data["id"]);
		console.log(data["id"]);
<<<<<<< HEAD
>>>>>>> test
=======
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c
    }

    const displayWishList = async () => {

        // it should not be hard coded.

        let response = await Server.displayWishlist("62");

        if (response["response"] === "success") {
            let data = response["data"];

            for (let i = 0; i < data.length; i++) {
                list.push(data[i]);
            }

            setStatus(true);
            message.success("Watch your favourites");

        }
        else {
            message.error("Add items to watchlist");
        }
    }

<<<<<<< HEAD
<<<<<<< HEAD
    const deleteFromWishList = async (item) => {
        let userId = 4;
        let id = item["id"];

        console.log(item);

        setStatus(false);

        let response = await Server.deleteWishlist(userId, id);
=======
    const deleteFromWishList = async (item) =>
    {
        
        console.log(item);
=======
    const deleteFromWishList = async (item) =>
    {
        
        console.log(item);
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c
        console.log(userId);
        
        //setStatus(false);
       // setVisible(false);
        let response = await Server.deleteWishlist(userId, item);
<<<<<<< HEAD
>>>>>>> test
=======
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c

        console.log(response);

        if (response["response"] === "success") {
            list.pop(item);
            setStatus(true);
            message.success("Removed from wishlist");
        }
        else {
            message.error("Oops something went wrong");
        }
    }

    const handleClick = () => {
        history.push("/movies_detailed_page");
    }

    const classes = useStyles()

    const text = [];
    const row = [];

    if (status !== undefined) {
        for (let i = 0; i < list.length; i++) {
            let movie = list[i]["video_details"][0];
<<<<<<< HEAD
<<<<<<< HEAD

            console.log(movie);
=======
            let id = list[i]["id"];
            console.log(id);
>>>>>>> test
=======
            let id = list[i]["id"];
            console.log(id);
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c
            // let hour = "2500";
            let hour = movie["duration"].split('.');

            text.push(
                <Row gutter={[8, 8]}>
                    <Col key={i} xs={24} xl={12}>
                        <div style={{ borderRadius: "25px", marginLeft: "25px" }}>
                            <Link className="owl-items" key={i} to={{ pathname: "/movies_detailed_page", params: { item: movie } }}>
                                <Card className={customCard} hoverable onClick={() => { handleClick() }}
                                    style={{ width: "240px", heigth: "600px" }}
                                    cover={<div style={{ background: "white", height: "200px" }}>
                                        <img className={classes.img} src={`${list[i]["video_details"][0]["poster"]}` === "" ? "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" : `${list[i]["video_details"][0]["poster"]}`} alt={movie["movie_title"]} onError={(e) => { e.target.onerror = null; e.target.src = "https://release.luit.co.in/uploads/music_thumbnail/default.jpg" }} />
                                    </div>}>

                                    <Grid container direction="row" alignItems="center" justify="space-between">
                                        <Grid item>
                                            {movie["type"] === "music" ? movie["title"] : movie["movie_title"]}
                                        </Grid>

                                        <Grid item>
<<<<<<< HEAD
<<<<<<< HEAD
                                            <IconButton style={{ color: "grey", fontSize: 30 }} onClick={e => this.deleteFromWishList(data["movie_id"])} aria-label="reqind">
                                                {status ? <CheckIcon fontSize="inherit"></CheckIcon> : <AddIcon fontSize="inherit"></AddIcon>}
=======
                                            <IconButton style={{color: "grey", fontSize: 30}} onClick={()=> { deleteFromWishList(id)}} aria-label="reqind">
                                            {status ? <CheckIcon fontSize="inherit"></CheckIcon> :	<AddIcon fontSize="inherit"></AddIcon>}
>>>>>>> test
=======
                                            <IconButton style={{color: "grey", fontSize: 30}} onClick={()=> { deleteFromWishList(id)}} aria-label="reqind">
                                            {status ? <CheckIcon fontSize="inherit"></CheckIcon> :	<AddIcon fontSize="inherit"></AddIcon>}
>>>>>>> 5791d0f5125cd79dfb9155b6919215341974683c
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    <span style={{ color: "grey" }}>{movie["publish_year"]}</span>
                                    <Grid container direction="row" alignItems="center" justify="space-between" style={{ color: "grey" }}>
                                        <Grid item>
                                            <span>{hour[0]} hrs {hour[1]} mins</span>
                                        </Grid>

                                        <Grid item>
                                            <span>{movie["ratings"]}</span>  <i className="ti-star"></i>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                </Row>
            );
        }
    }

    if (status === true) {
        for (let i = 0; i < list.length; i++) {
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

    return (
        <div>
            <div>
                <Divider orientation="center"><h3 style={{ color: "white" }}>Wishlist</h3></Divider>
                <Row gutter={[8, 9]} justify="left">
                    {text}
                </Row>
            </div>
        </div>
    );
}

export default WishList;