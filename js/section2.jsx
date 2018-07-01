import React from 'react';
import Fade from 'react-reveal/Fade';


class Section2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}



	render() {





		return(
			<section className='section2'>
				<Fade left>
					<div className="elo" />
					</Fade>
				<Fade right>
					<div className="elo2" />
				</Fade>
			</section>
		);
	}
}

export default Section2;


