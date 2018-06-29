import React from "react";


class Testing extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '', name: '', color: '', set: '', price: '',
		};


	}

	handleChange = (e) => {
		let newState = {};

		newState[e.target.id] = e.target.value;

		this.setState(newState)
	};

	clickDelete = event => {
		fetch(`http://localhost:3000/products/${event.target.parentElement.getAttribute('id')}`, {
			method: 'DELETE',
		}).then(resp => resp.json())
			.then(data => {
				this.loadProducts();
			});
	};

	clickAdd = event => {
		event.preventDefault();


		fetch('http://localhost:3000/products', {
			method: 'POST',
		}).then(resp => resp.json())
			.then(data => {
				this.loadProducts();
			});
	};

	loadProducts = () => {
		fetch('http://localhost:3000/products')
			.then(r => r.json())
			.then(data => {
				let database = data;
					this.setState ({
						id: database.id,
						name: database.name,
						color: database.color,
						set: database.set,
						price: database.price,
				});
			});
	};


	render() {
		return (

			<form onSubmit={this.clickAdd}>



					<input name='name' type='text' onChange={this.handleChange} value={this.state.id} />



					<input name='email' type='email' onChange={this.handleChange} value={this.state.name} />



					<input name='subject' type='text' onChange={this.handleChange} value={this.state.color} />



					<input name='subject' type='text' onChange={this.handleChange} value={this.state.set} />



					<input name='subject' type='text' onChange={this.handleChange} value={this.state.price} />
				<input className='btn' type='submit' placeholder='Send message' />

			</form>
		);

	}
	componentDidMount(){
		this.loadProducts()
	}
}

export default Testing;

