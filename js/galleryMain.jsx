import React from 'react';
import './../partials/_gallery.scss'
import Products from './gallery.jsx'
import Fetch from "./fetch.jsx";



class GalleryMain extends React.Component {
	render() {
		return (
			<div>
				<Products />
				<Fetch />
			</div>
		)
	}
}

export default GalleryMain;


