import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import { Row, Col, Divider } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
    root:
    {
        flexGrow: 1,
        padding: theme.spacing(0.5)
    },
    div:
    {
        height: "250px",
        paddingLeft: "10px",
        paddingRight: "10px",
    },
}))

export default function ViewAll(params)
{
    const classes = useStyles() 
    const row = [];

    for(let i = 0; i < params.location.params["item"]["data"].length; i++)
    {
        let movie = params.location.params["item"]["data"][i];

        console.log(movie);

       row.push(
        <div class="owl-items">
        <div className="slide-one mx-1" key={i} style={{ height: "430px", width: "270px", }}>
           {/* <Col   key={i}> */}
                <Link className="slide-image" to={{pathname: "/movies_detailed_page", params:{item: movie}}} style={{ display: "flex", justifyContent: "center" }}>
                       <div className={classes.div}>
                            <img src={`${movie["thumbnail"]}`} alt={movie["movie_title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} style={{  minWidth: "270px", height: "100%"}} />
                       </div>
                </Link>
                <div class="slide-content">
                    <h2>{movie["movie_title"]} 
                        <img src="images/plus.png" alt="icon" />
                    </h2>
                    <p>{movie["description"]}</p>
                    <span class="tag">2 h 20 min</span>
                    <span class="tag">{movie["publish_year"]}</span>
                    <span class="tag"><b>HD</b></span>
                    <span class="tag"><b>{movie["maturity_rating"]}+</b></span>
                </div>
           {/* </Col> */}
           </div>
           </div>
           
           
       );
    }

    return(
        <div class="slide-wrapper ">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 mt-4 ">
                        <Divider orientation="center" style={{color: "white"}}></Divider>
                        <Row gutter={[8, 8]} justify="left">
                            {row}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}