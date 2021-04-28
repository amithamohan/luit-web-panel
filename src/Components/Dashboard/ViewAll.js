import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid,} from '@material-ui/core/';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5)
    }
}))

export default function ViewAll(params)
{
    console.log(params.location.params["item"]["lang_name"]);

	let movie = params.location.params["item"]["data"];
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div style={{paddingBottom: "30px", paddingTop: "30px", fontSize: "40px"}}>
                <center><span style={{color: "white"}}>{params.location.params["item"]["lang_name"] === undefined ? params.location.params["item"]["actor_name"] : params.location.params["item"]["lang_name"]}</span></center>
            </div>
            <Grid
                container
                spacing={5}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">

                {movie.map(item => (
                    <Grid item xs={12} sm={6} md={3} key={movie.indexOf(item)}>
							<Link className="slide-one" to={{pathname: "/movies_detailed_page", params:{item: {item}}}} style={{height: "200px"}}>
								<div className="slide-image">
									<img src={`${item.thumbnail}`} alt={movie["movie_title"]} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} style={{width:"100%", height: "100%"}} />
					                <center><br /><span style={{color: "white"}}>{`${item.movie_title}`}</span></center>
								</div>
							</Link>
                     </Grid>
                ))}
            </Grid>
        </div>
    );
}