import React from 'react';
import Lightbox from 'react-native-lightbox';



class Gallery extends React.Component {


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
			<div>
		const LightboxView ({ navigator }) => (
					<Lightbox navigator={navigator}>
						<Image
							style={{ height: 300 }}
							source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
						/>
					</Lightbox>
			</div>


		);
	}
}

export default Gallery;


