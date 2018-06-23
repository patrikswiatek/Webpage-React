import React from 'react';
import './../partials/welcomePage.scss'

class Welcome extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			videoURL: '../videos/videochair.mp4'
		}
	}



	render () {
		return (
			<div className='welcome'>
					<button  className='welcomebutton' onClick={this.handleClick}></button>
				<video height={'780px'} width={'1420px'} id="background-video" loop autoPlay>
					<source src={this.state.videoURL} type="video/mp4" />
				</video>
			</div>

		)
	}

	handleClick() {
			$('.welcome').animate({
					scrollTop: $(".menu").offset().top},
				'slow');
	}


}

export default Welcome;