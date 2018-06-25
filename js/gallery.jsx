import React from 'react';
import GallerySearch from './gallerySearch.jsx';
import Gallery from 'react-grid-gallery';
import './../partials/_gallery.scss'
import Fetch from './fetch.jsx'


class Products extends React.Component {

	render() {

		const images = [{
			src: "./../images/1.jpg",
			thumbnail: "./../images/1.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
			caption: "After Rain (Jeshu John - designerspics.com)"
		},
		{
			src: "./../images/2.jpg",
			thumbnail: "./../images/2.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212,
			tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			caption: "Boats (Jeshu John - designerspics.com)"
		},
		{
			src: "./../images/3.jpg",
			thumbnail: "./../images/3.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			src: "./../images/4.jpg",
			thumbnail: "./../images/4.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			src: "./../images/5.jpg",
			thumbnail: "./../images/5.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			src: "./../images/6.jpg",
			thumbnail: "./../images/6.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			src: "./../images/7.jpg",
			thumbnail: "./../images/7.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			src: "./../images/8.jpg",
			thumbnail: "./../images/8.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			src: "./../images/9.jpg",
			thumbnail: "./../images/9.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			src: "./../images/10.jpg",
			thumbnail: "./../images/10.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			src: "./../images/11.jpg",
			thumbnail: "./../images/11.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},


		];

		return (
			<div className="gallery">
				<div className="container">
					<h1>Galeria mega jest</h1>
					<Gallery className ="galleryPictures" images={images}/>
				</div>
			</div>

		);
	}
}

export default Products;


