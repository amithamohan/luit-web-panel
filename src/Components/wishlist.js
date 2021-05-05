import Server from './APIs/Server';
import React, { useEffect, useState } from 'react';
import {Divider, Col, message, Row } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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


function WishList()
{
    const [status, setStatus] = useState(false);

    useEffect(() =>
    {
       displayWishList();
    });

    const displayWishList = async () =>
    {
        let userId = "4";

        let response = await Server.displayWishlist(userId);

        if(response["response"] === "success")
        {
            message.success("Watch your favourites");

            let data = response["data"];

            for(let i = 0; i < data.length; i++)
            {
                list.push(data[i]);
            }

            setStatus(true);
        }
        else
        {
            message.error("Add items to watchlist");
        }
    }

    const classes = useStyles()

    const row = [];

    if(status === true)
    {
        for(let i = 0; i < list.length; i++)
        {
            let movie = list[i];

            console.log(list);

            row.push(
                <Col className="gutter-row" span={6} key={i}>
                     <Link className="slide-one" to={{pathname: "/movies_detailed_page", params:{item: movie}}}>
                            <div className={classes.div}>
                                 <img className={classes.img} src={`${list[i]["video_details"][0]["poster"]}`} alt={movie["movie_title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}}/>
                            </div>
                     </Link>
                </Col>
            );
        }
    }

    return(
        <div>
            <div>
                <Divider orientation="center"><h3 style={{color: "white"}}>Wishlist</h3></Divider>
                    <Row gutter={[8, 9]} justify="left">
                {row}
                </Row>
            </div>
        </div>
    );
}

export default WishList;