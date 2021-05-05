import React, {useState, useRef} from "react";
import Container from "@material-ui/core/Container";
import ReactPlayer from "react-player";
import { makeStyles, } from "@material-ui/core/styles";
import PlayerControls from "./PlayerControls";
import screenfull from 'screenfull';

const useStyles = makeStyles({
  	playerWrapper:
	{
    	width: "100%",
    	position: "relative",
  	},
});

const format = (seconds) =>
{
	if(isNaN(seconds))
	{
		return "00:00";
	}

	const date = new Date(seconds * 1000);
	const hh = date.getUTCHours();
	const mm = date.getUTCMinutes();
	const ss = date.getUTCSeconds().toString().padStart(2, "0");

	if(hh)
	{
		return `${hh}:${mm.toString().padStart(2,"0")}:${ss}`;
	}
	return `${mm}:${ss}`;
}

let count = 0;

function VideoPlayer (props)
{
	const classes = useStyles();
	const [state, setState] = useState({
		playing: true,
		muted: false,
		volume: 0.5,
		playbackRate: 1.0,
		played: 0,
		seeking: false
	})

	let data = props.location.params["item"];
	let title;
	let url;
	let x;

	console.log(data);

	if(data["type"] === "movie")
	{
		url = props.location.params["item"]["movie_upload"];
		title = props.location.params["item"]["movie_title"];
		let image = props.location.params["item"]["movie_upload"];
		x = image.split(' ').join('%20');
		console.log(x);
	}
	else
	{
		title = props.location.params["item"]["title"];
		x = props.location.params["item"]["upload_music"];
		console.log(x);
	}

	const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");
	const { playing, muted, volume, playbackRate, played, seeking } = state; //pause and play state

	const playerRef = useRef(null); //fast forward and rewind
	const playerContainerRef = useRef(null); //fast forward and rewind
	const controlRef = useRef(null);

	const handlePlayPause = () =>  //controls the playing and pause of video
	{
		setState({...state, playing: !state.playing});
	}


	const handleMute = () =>  //mute and unmute controls
	{
		setState({...state, muted: !state.muted});
	}

	const handleVolumeChange = (e, newValue) => //controls the audio level of video
	{
		setState({...state, volume: parseFloat(newValue / 100), muted: newValue === 0 ? true : false});
	}

	const handleVolumeSeekUp = (e, newValue) => //controls the audio level when the voulme slider is dragged
	{
		setState({...state, volume: parseFloat(newValue / 100), muted: newValue === 0 ? true : false});
	}

	const handleRewind = () => //10 seconds backward
	{
		playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
	}

	const handleFastForward = () => //10 seconds forward
	{
		playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
	}

	const handlePlaybackRateChange = (rate) => //controls the speed at whic video is played
	{
		setState({...state, playbackRate: rate});
	}

	const toogleFullScreen = () =>  //controls the change to fullscreen mode
	{
		screenfull.toggle(playerContainerRef.current);
	}

	const handleProgress = (changeState) => //controls the progress bar
	{
		if(count > 3)
		{
			controlRef.current.style.visibility = "hidden";
			count = 0;
		}

		if(controlRef.current.style.visibility === "visible")
		{
			count ++;
		}

		if(!state.seeking)
		{
			setState({...state, ...changeState})
		}
	}

	const handleSeekChange = (e, newValue) => //controls the change of progress bar while sliding it.
	{
		setState({...state, played: parseFloat(newValue / 100)})
	}

	const handleSeekMouseDown = (e) => //controls the hovering on slider
	{
		setState({...state, seeking: true})
	}

	const handleSeekMouseUp = (e, newValue) => //moves the slider when pointer is hoverd on the slider
	{
		setState({...state, seeking: false});
		playerRef.current.seekTo(newValue / 100); 
	}

	const handleChangeDisplayFormat = ()  =>
	{
		setTimeDisplayFormat(timeDisplayFormat === "normal" ? "remaining" : "normal");
	}

	const handleMouseMove = () =>
	{
		controlRef.current.style.visibility = "visible";
		count = 0;
	}

	const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : "00:00";
	const duration = playerRef.current ?playerRef.current.getDuration() : "00:00";
	const ellapsedTime = timeDisplayFormat === "normal" ? format(currentTime) : `-${format(duration - currentTime)}`;
	const totalDuration = format(duration);

  	return (
    	<div style={{background: "black"}}>
      		<Container maxWidth="lg" style={{background:"black", display: "table", width: "fit-content", height: "fit-content"
		}}>
        		<div 
					ref={playerContainerRef} 
					className={classes.playerWrapper}
					onMouseMove={handleMouseMove}
				>
          			<ReactPlayer
					  	ref = {playerRef }
						width={"100%"}
						height="100%"
						url={x}
						// url="https://release.luit.co.in/uploads/movies/1610199429DEMPHOLOR%20COMPANYR%20%20SAKORI%20(%20JONBAI%205%20).mp4"
						muted={muted}
						playing={playing}
						volume={volume}
						playbackRate={playbackRate}
						onProgress={handleProgress}
					/>
          			<PlayerControls
					  	title={title}
					  	ref={controlRef}
						onPlayPause = {handlePlayPause} 
						playing={playing}
						muted={muted}
						onMute={handleMute}
						onVolumeChange={handleVolumeChange}
						volume={volume}
						onVolumeSeekUp={handleVolumeSeekUp}
						onRewind={handleRewind}
						onFastForward={handleFastForward}
						playbackRate={playbackRate}
						onPlaybackRateChange={handlePlaybackRateChange}
						onToggleFullScreen={toogleFullScreen}
						played={played}
						onSeek={handleSeekChange}
						onSeekMouseUp={handleSeekMouseUp}
						onSeekMouseDown={handleSeekMouseDown}
						ellapsedTime={ellapsedTime}
						totalDuration={totalDuration}
						onChangeDisplayFormat={handleChangeDisplayFormat}
					/>
        		</div>
      		</Container>
	  	</div>
  	);
}

export default VideoPlayer;