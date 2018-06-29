import React from "react";
const reactFormContainer = document.querySelector('.react-form-container');

class Fetch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '', name: '', color: '', set: '', price: '',
		};
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
			method: 'POST',
		}).then(resp => resp.json())
			.then(data => {
				this.loadProducts();
			});

		if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
			return false
		}
	};

	loadProducts = () => {
		fetch('http://localhost:3000/products')
			.then(r => r.json())
			.then(data => {
				let database = {
					id: this.state.id,
					name: this.state.name,
					color: this.state.color,
					set: this.state.set,
					price: this.set.price,
				};
			});
	};


	render() {
		return (
			<div>dsfs</div>
		);

	}
	componentDidMount(){
		this.loadProducts()
	}
}


export default Fetch;

