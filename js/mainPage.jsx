import React from 'react';
import SectionOne from './section1.jsx';
import Section2 from './section2.jsx';
import Section3 from './section3.jsx';
import Section4 from './section4.jsx';
import scrollToComponent from "react-scroll-to-component";





class MainPage extends React.Component {



	render() {



		return (
			<div>
				<div className='onepage'>
					<button className='tobottom' onClick={() => scrollToComponent(this.Finish, { offset: 0, align: 'top', duration: 13500, ease: 'linear'})}>˅</button>
				<SectionOne>

				</SectionOne>


				<Section2 />

				<Section3 />

				<Section4 ref={(section) => { this.Finish = section; }} />

				</div>
			</div>
				);
	}
}

export default MainPage;
