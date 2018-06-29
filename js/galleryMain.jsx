import React from 'react';
import './../partials/_gallery.scss'
import Gallery from './gallery.jsx'
import Fetch from "./fetch.jsx";



class GalleryMain extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			on: false,
		}
	}

	handleClick = () => {
		this.setState({
			on: !this.state.on,
		})
	};



	render() {

		const style = {
			display: this.state.on ? 'block' : 'none',
		};

		return (
			<div className="gallery">
				<div className="container">
					<div className='basketThings' style={style} />
					<h1>Galeria mega jest</h1>
					<button className='basket' onClick={this.handleClick}>Basket</button>

					<Gallery />

					<Fetch/>
				</div>
			</div>
		)
	}
}

export default GalleryMain;


