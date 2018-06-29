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
				<span className="fancy-btn" onMouseEnter={ this.handleEnter } onMouseLeave={this.handleLeave} onClick={() => scrollToComponent(this.Finish, { offset: 0, align: 'top', duration: 1500})}>
						You'll sit with the excitement</span>


				<video style={style} id="background-video" loop autoPlay>
					<source src={this.state.videoURL} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<header className="col-12 row menu" ref={(header) => { this.Finish = header; }} />
			</div>
		);
	}
}

export default Welcome;


