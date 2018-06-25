import React from "react";
import './../partials/_gallery.scss'


class Fetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			database: [],
		}
	}

	clickDelete = event => {
		fetch(`http://localhost:3000/products/${event.target.parentElement.getAttribute('id')}`, {
			method: 'DELETE',
		}).then(resp => resp.json())
			.then(data => {
				this.loadProducts();
			});
	};

	clickAdd = event => {
		fetch('http://localhost:3000/products', {
			method: 'POST', body: JSON.stringify(myData)
		}).then(resp => resp.json())
			.then(data => {
				this.loadProducts();
			});
	};

	loadProducts = () => {
		fetch('http://localhost:3000/products')
			.then(r => r.json())
			.then(data => {
				this.setState({
					database: data,
				});
				console.log(data);
			});
	};

	render(){
		return (
			<div>
				<ul>
					{this.state.database.map((el) => <li key={el.id} id={el.id}> {el.src} {el.name} {el.price} </li>)}
				</ul>
			</div>
		);
	}
	componentDidMount(){
		this.loadProducts()
	}
}
/*
class Prod extends React.Component {
	render() {
		return (
			{
				src: this.props.src,
				thumbnail: this.props.price,
				thumbnailWidth: 320,
				thumbnailHeight: 174,
				caption: this.props.name,
			});
	}
}
*/

export default Fetch;

/*
const images = [{
			src: "./../images/1.jpg",
			thumbnail: "./../images/1.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
			caption: "After Rain (Jeshu John - designerspics.com)"
		},
 */