import React, {Component} from 'react';
import Slider from './Slider';
import NavigationBar from './NavBar';
import MoviesCard from './MoviesCard';
import MoviesByLanguages from './MoviesByLanguages';
import MusicCard from './MusicCard';
import TrendingArtist from './TrendingArtist';
import SeriesCard from './SeriesCard';
import ShortFilm from './ShortFilmsCard';

class Home extends Component
{
	render()
	{
		return(
	        	<div className="medium-12 columns"><>
			   		<div className="main-wrapper">
				 		{/* header wrapper */}
				 			<NavigationBar/>
						{/* header wrapper */}

						{/* banenr wrapper */}
							<Slider/>
						{/* banenr wrapper */}

						{/* slider wrapper */}
							<MoviesCard/>
						{/* slider wrapper */}

						{/* slider wrapper */}
							<MoviesByLanguages/>
						{/* slider wrapper */}

						{/* slider wrapper */}
							<MusicCard/>
						{/* slider wrapper */}

						{/* crew wrapper */}
							<TrendingArtist/>
						{/* crew wrapper */}

						{/* slider wrapper */}
							<SeriesCard/>
						{/* slider wrapper */}

						{/* slider wrapper */}
							<ShortFilm/>
						{/* slider wrapper */}

						{/* footer wrapper */}
						
						{/* footer wrapper */}
			   		</div>
			   <div className="player-container lightbox" style={{display: 'none'}}>
				 <a href="#" className="close-video-player btn-lightbox-close"><i className="ti-close" /></a>
				 <div className="player">
				   <video id="video" src="https://via.placeholder.com/1330x666.png" playsInline />
				   <div className="play-btn-big" />
				   <div className="controls">
					 <div className="time"><span className="time-current" /><span className="time-total" /></div>
					 <div className="progress">
					   <div className="progress-filled" />
					 </div>
					 <div className="controls-main">
					   <div className="controls-left">
						 <div className="volume">
						   <div className="volume-btn loud">
							 <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							   <path d="M6.75497 17.6928H2C0.89543 17.6928 0 16.7973 0 15.6928V8.30611C0 7.20152 0.895431 6.30611 2 6.30611H6.75504L13.9555 0.237289C14.6058 -0.310807 15.6 0.151473 15.6 1.00191V22.997C15.6 23.8475 14.6058 24.3098 13.9555 23.7617L6.75497 17.6928Z" transform="translate(0 0.000518799)" fill="white" />
							   <path id="volume-low" d="M0 9.87787C2.87188 9.87787 5.2 7.66663 5.2 4.93893C5.2 2.21124 2.87188 0 0 0V2C1.86563 2 3.2 3.41162 3.2 4.93893C3.2 6.46625 1.86563 7.87787 0 7.87787V9.87787Z" transform="translate(17.3333 7.44955)" fill="white" />
							   <path id="volume-high" d="M0 16.4631C4.78647 16.4631 8.66667 12.7777 8.66667 8.23157C8.66667 3.68539 4.78647 0 0 0V2C3.78022 2 6.66667 4.88577 6.66667 8.23157C6.66667 11.5773 3.78022 14.4631 0 14.4631V16.4631Z" transform="translate(17.3333 4.15689)" fill="white" />
							   <path id="volume-off" d="M1.22565 0L0 1.16412L3.06413 4.0744L0 6.98471L1.22565 8.14883L4.28978 5.23853L7.35391 8.14883L8.57956 6.98471L5.51544 4.0744L8.57956 1.16412L7.35391 0L4.28978 2.91031L1.22565 0Z" transform="translate(17.3769 8.31403)" fill="white" />
							 </svg>
						   </div>
						   <div className="volume-slider">
							 <div className="volume-filled" />
						   </div>
						 </div>
					   </div>
					   <div className="play-btn paused" />
					   <div className="controls-right">
						 <div className="speed">
						   <ul className="speed-list">
							 <li className="speed-item" data-speed="0.5">0.5x</li>
							 <li className="speed-item" data-speed="0.75">0.75x</li>
							 <li className="speed-item active" data-speed={1}>1x</li>
							 <li className="speed-item" data-speed="1.5">1.5x</li>
							 <li className="speed-item" data-speed={2}>2x</li>
						   </ul>
						 </div>
						 <div className="fullscreen">
						   <svg width={30} height={22} viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							 <path d="M0 0V-1.5H-1.5V0H0ZM0 18H-1.5V19.5H0V18ZM26 18V19.5H27.5V18H26ZM26 0H27.5V-1.5H26V0ZM1.5 6.54545V0H-1.5V6.54545H1.5ZM0 1.5H10.1111V-1.5H0V1.5ZM-1.5 11.4545V18H1.5V11.4545H-1.5ZM0 19.5H10.1111V16.5H0V19.5ZM24.5 11.4545V18H27.5V11.4545H24.5ZM26 16.5H15.8889V19.5H26V16.5ZM27.5 6.54545V0H24.5V6.54545H27.5ZM26 -1.5H15.8889V1.5H26V-1.5Z" transform="translate(2 2)" fill="white" />
						   </svg>
						 </div>
					   </div>
					 </div>
				   </div>
				 </div>
			   </div>
			 </>

                </div>
				// </div>
	     );
    }
}
export default Home;