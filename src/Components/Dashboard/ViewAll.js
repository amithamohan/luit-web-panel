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
        height: "450px",
        // width: "550px",,
        paddingLeft: "20px",
        paddingRight: "20px"
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
           <Col className="gutter-row" span={6} key={i}>
                <Link className="slide-one" to={{pathname: "/movies_detailed_page", params:{item: movie}}}>
                       <div className={classes.div}>
                            <img src={`${movie["thumbnail"]}`} alt={movie["movie_title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} style={{width:"85%", height: "55%"}} />
                       </div>
                </Link>
           </Col>
       );
    }

    return(
        <div>
            <div>
                <Divider orientation="center" style={{color: "white"}}>Responsive</Divider>
                    <Row gutter={[8, 8]} justify="center">
                {row}
                </Row>
            </div>
            <Footer/>
        </div>
    );
}