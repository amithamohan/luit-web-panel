import React, {Component} from 'react';
// import 'antd/dist/antd.css';
import { Carousel, Col, Row } from 'antd';
import { Link } from 'react-router-dom';


class Slider extends Component
{
	constructor(props)
	{
		super()
	}

	render()
	{
		const rows = [];

		for(let i = 0; i < this.props.data.length; i++)
		{
			const data = this.props.data[i];

			rows.push(
				<div className="row">
					<div className="col-sm-12">
						<div className="banner-wrap justify-content-between align-items-center">
						<div className="left-wrap">
							<span className="rnd">{data["title"]}</span>
							<h2>{data["title"]}</h2>
							<span className="tag"><b>{data["title"]}</b></span>
							<span className="tag"><b>HD</b></span>
							<span className="tag"><b>{data["title"]}+</b></span>
							{/* <span className="tag">{hour[0]} hr {hour[1]} min</span> */}
							<span className="tag">{data["title"]}</span>
							<p>{data["title"]}</p>

							<Link className="btn btn-lg"><img src="images/play.png" alt="" />Watch now</Link>

							<a href="/" className="icon-bttn"><i className="ti-plus text-white" /></a>
							<div className="icon-bttn">
							<i className="ti-sharethis text-white mr-4" />
							</div>
						</div>
						<div className="right-wrap" style={{backgroundImage: `url('${data["thumbnail"]}')`}} onError={(e)=>{e.target.onerror = null; e.target.src="https://release.luit.co.in/uploads/music_thumbnail/default.jpg"}} />
						</div>
					</div>
				</div>
			);
		}

		return(
			<div className="banner-wrapper">
				<div className="container">
					<Carousel autoplay draggable>
						{rows}
					</Carousel>
				</div>
			</div>
		);
	}
}

export default Slider;