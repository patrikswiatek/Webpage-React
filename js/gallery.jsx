import React from 'react';
import Gallery from 'react-grid-gallery'



class Products extends React.Component {
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

		const style = {
			display: this.state.on ? 'block' : 'none',
		};


		return (

					<Gallery className ="galleryPictures" images={images}/>


		);
	}
}

export default Products;


