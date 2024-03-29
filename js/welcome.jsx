import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Link from "react-router-dom/es/Link";



class Welcome extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			videoURL: './../videos/video3.mp4',
			filter: 'none',
		}
	}

	handleEnter = () => {
		this.setState({
			filter: 'blur(3px)',
		})
	};

	handleLeave = () => {
			this.setState({
				filter: 'none',
			})
		};


	render () {

	const style = {
		filter: this.state.filter
	};

		return (
			<div>
				<Link className="fancy-btn" onMouseEnter={ this.handleEnter } onMouseLeave={this.handleLeave} to='/Main' >
					You'll sit with the excitement</Link>


				<video style={style} id="background-video" loop autoPlay>
					<source src={this.state.videoURL} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		);
	}
}

export default Welcome;


