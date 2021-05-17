import { makeStyles, withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CloseIcon from '@material-ui/icons/Close';
import PauseIcon from '@material-ui/icons/Pause';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';
import FullScreenIcon from '@material-ui/icons/Fullscreen';
import Button from '@material-ui/core/Button';
import Popover from "@material-ui/core/Popover";
import React, {forwardRef} from "react";
import { useHistory } from 'react-router';

const useStyles = makeStyles({

	controlsWrapper: {
		position: "absolute ",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		background: "rgba(0,0 0,0.6)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		zIndex: 1
	},
	controlIcons: {
    	color: "#777",
    	fontSize: 50,
    	transform: "scale(0.9)",
    	"&:hover": {
    	  	color: "#fff",
      		transform: "scale(1)",
    	},
  	},
	bottomIcons: {
		color: "#999",
		"&:hover": {
			color: "#fff",
		},
	},
	volumeSlider: {
		width: 100,
	},
});

	function valueLabelComponent(props)
	{
		const { children, open, value } = props;

		return (
			<Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
				{children}
			</Tooltip>
		);
	}

	const PrettoSlider = withStyles({
	root: {
		height: 8,
	},
	thumb: {
		height: 24,
	  	width: 24,
	  	backgroundColor: "#fff",
	  	border: "2px solid currentColor",
	  	marginTop: -8,
	  	marginLeft: -12,
	  	"&:focus, &:hover, &$active": {
			boxShadow: "inherit",
	  	},
	},
	active: {},
	valueLabel: {
		left: "calc(-50% + 4px)",
	},
	track: {
		height: 8,
	  	borderRadius: 4,
	},
	rail: {
		height: 8,
	  	borderRadius: 4,
	},
  })(Slider);


export default forwardRef(({
	title,
	onPlayPause,
	playing,
	muted,
	onMute,
	onVolumeChange,
	onVolumeSeekUp,
	volume,
	onRewind,
	onFastForward,
	playbackRate,
	onPlaybackRateChange,
	onToggleFullScreen,
	played,
	onSeek,
	onSeekMouseUp,
	onSeekMouseDown,
	ellapsedTime,
	totalDuration,
	onChangeDisplayFormat,
	}, ref)=> {

	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handlePopover = (event) =>
	{
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => 
	{
		setAnchorEl(null);
	};

    let history = useHistory();

	const close = () =>
	{
		history.push("/");
	}


	const open = Boolean(anchorEl);
	const id = open ? "playbackrate-popover" : undefined;

	const infoIcon = "https://images.pexels.com/photos/7421912/pexels-photo-7421912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

	return(

		<div className={classes.controlsWrapper} ref={ref}>
			<Grid container direction="row" alignItems="center" justify="space-between" style={{padding: "12px"}}>
				<Grid item>
					<img
						src="images/favicon.png"
						alt="Info"
						style={
						{
							width: 60,
							backgroundColor: "transparent",
							verticalAlign: "center"
						}}/>
						<span style={{color: "white", fontSize: "30px"}}>{title}</span>
				</Grid>

				<Grid item> 
					<IconButton onClick={close} className={classes.controlIcons} aria-label="reqind">
						<CloseIcon fontSize="inherit" />
					</IconButton>
				</Grid>
			</Grid>

					{/* middle controls */}

			<Grid container direaction="row" alignItems="center" justify="center">
				<IconButton onClick={onRewind} className={classes.controlIcons} aria-label="reqind">
					<FastRewindIcon fontSize="inherit" />
				</IconButton>

				<IconButton onClick={onPlayPause} className={classes.controlIcons} aria-label="reqind">
					{playing ? <PauseIcon fontSize="inherit"/> : <PlayArrowIcon fontSize="inherit" />}
				</IconButton>

				<IconButton onClick={onFastForward} className={classes.controlIcons} aria-label="reqind">
				<FastForwardIcon fontSize="inherit" />
				</IconButton>
			</Grid>

				{/* bottom controls */}
			<Grid container direction="row" justify="space-between" align="center" style={{padding: "16"}} 
				valueLabelComponent={(props) => <valueLabelComponent {...props} value = {ellapsedTime}/>}>
				<Grid item xs={12}>
					<PrettoSlider 
						min={0} 
						max={100} 
						value={played * 100}
						onChange={onSeek}
						onMouseDown={onSeekMouseDown}
						onChangeCommitted={onSeekMouseUp}
					/>
				</Grid>

				<Grid item>
					<Grid container alignItems="center" direction="row">
						<IconButton onClick={onPlayPause} className={classes.bottomIcons}>
							{playing ? <PauseIcon fontSize="large"/> :<PlayArrowIcon fontSize="large"></PlayArrowIcon>}
						</IconButton>

						<IconButton onClick={onMute} className={classes.bottomIcons}>
							{muted ? <VolumeOff fontSize="large"/> :<VolumeUp fontSize="large"></VolumeUp>}
						</IconButton>

						<Slider 
							min={0} 
							max={100} 
							volume={volume * 100} 
							className={classes.volumeSlider}
							onChange={onVolumeChange}
							onChangeCommitted={onVolumeSeekUp}
						/>

						<Button onClick={onChangeDisplayFormat} variant="text" style={{color: "#fff", marginLeft: "16"}}>
							<Typography>{ellapsedTime} / {totalDuration}</Typography>
						</Button>
					</Grid>
				</Grid>

				<Grid item>
					<Button onClick={handlePopover} variant="text" className={classes.bottomIcons}>
						<Typography>{playbackRate}X</Typography>
					</Button>

					<Popover
						id={id}
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
						vertical: "top",
						horizontal: "center",
						}}
						transformOrigin={{
						vertical: "bottom",
						horizontal: "center",
						}}
					>

					<Grid container direction="column-reverse">
						{[0.5, 1, 1.5, 2].map((rate) => (
						<Button onClick={()=> onPlaybackRateChange(rate)} variant="text" >
							<Typography color={rate === playbackRate ? "secondary" : "primary"}>{rate}</Typography>
						</Button>
						))}
					</Grid>
					</Popover>

					<IconButton onClick={onToggleFullScreen} className={classes.bottomIcons}>
						<FullScreenIcon fontSize="large" />
					</IconButton>
				</Grid>
			</Grid>
		</div>

	);
});