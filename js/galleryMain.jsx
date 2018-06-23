import React from 'react';
import Coverflow from 'react-coverflow';
import './../partials/_gallery.scss'
import Gallery from './gallery.jsx'

class GallerySlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 0
		};
	}

	render() {


		return (<div>
			<Coverflow
				width={1260}
				height={680}
				displayQuantityOfSide={2}
				navigation={false}
				enableHeading={true}
				active={this.state.active}>

				<img src='./../images/1.jpg' alt='The best chair' data-action="http://www.wp.pl"/>
				<img src='./../images/2.jpg' alt='Wow' data-action="http://passer.cc"/>
				<img src='./../images/3.jpg' alt='The next best'
				     data-action="https://doce.cc/"/>
				<img src='./../images/4.jpg' alt='Great' data-action="http://tw.yahoo.com"/>
				<img src='./../images/5.jpg' alt='Super' data-action="http://www.bbc.co.uk"/>
				<img src='./../images/6.jpg' alt='Nice one' data-action="https://medium.com"/>
				<img src='./../images/7.jpg' alt='This legs'
				     data-action="http://www.google.com"/>
				<img src='./../images/8.jpg' alt='Prestige'
				     data-action="https://facebook.github.io/react/"/>
				<img src='./../images/9.jpg' alt='Royal' data-action="http://passer.cc"/>
				<img src='./../images/10.jpg' alt='Buy it!' data-action="https://doce.cc/"/>
				<img src='./../images/11.jpg' alt='Hehe' data-action="http://tw.yahoo.com"/>

			</Coverflow>
		</div>);
	}
}

class GalleryMain extends React.Component {
	render() {
		return (
			<div>
				<Gallery />
				<GallerySlider />
			</div>
		)
	}
}

export default GalleryMain;


