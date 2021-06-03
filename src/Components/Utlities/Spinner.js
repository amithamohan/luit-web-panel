import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';


export default function Spinner() {
    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '55vh' }}>

                    <Grid item xs={3}>
                    <CircularProgress color="secondary" />
                    </Grid>   

			</Grid>
        </div>
    )
}
