import React from 'react';
import Rotate from 'react-reveal/Rotate';



class Section3 extends React.Component {
	render() {



		return(
			<section className='section3'>
				<Rotate bottom left>
					<div className="elo3" />
				</Rotate>
				<Rotate bottom right>
					<div className="elo4" />
				</Rotate>

			</section>
		);
	}
}

export default Section3;


