import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

export default function ViewAll(params) 
{
	console.log(params.location);
	console.log(params.location.params["item"]["data"].length);

	let movie = params.location.params["item"]["data"];

    const classes = useStyles()
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ]
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={5}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {movie.map(item => (
                    <Grid item xs={12} sm={6} md={3} key={movie.indexOf(item)}>
							<Link className="slide-one" to={{pathname: "/movies_detailed_page", params:{item: {item}}}} style={{height: "200px"}}>
								<div className="slide-image">
									<img src={`${item.thumbnail}`} alt={movie["movie_title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} style={{width:"100%", height: "100%"}} />
								</div>
							</Link>
                     </Grid>
                ))}
            </Grid>
        </div>
    )
}