import React from 'react';
import Gallery from 'react-grid-gallery'



class Products extends React.Component {


	render() {

		const images = [{
				src: "./../images/1.jpg",
				thumbnail: "./../images/1.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
			},
			{
				src: "./../images/2.jpg",
				thumbnail: "./../images/2.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
				tags: [{value: "Super to krzesło"}],
				caption: `"Super to krzesło" jedynie 54.30 PLN`
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
					<Gallery className ="galleryPictures" images={images}/>

		);
	}
}

export default Products;


