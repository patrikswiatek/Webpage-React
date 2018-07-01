import React from 'react';
import Products from './gallery.jsx'
import Fetch from "./fetch.jsx";
import ShoppingCart from './basket.jsx'



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
					<div style={style}>
					<ShoppingCart />
					</div>
					<h1>Products</h1>
					<button className='basket' onClick={this.handleClick}>Basket</button>

					<Products />

					<Fetch/>
				</div>
			</div>
		)
	}
}

export default GalleryMain;


