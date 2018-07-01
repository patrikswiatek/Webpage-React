import React from 'react';

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: this.getItems(),
			cart: [],
		}
	}

	getItems = () => {

		fetch('http://localhost:3000/products/')
			.then(r => r.json())
			.then(data => {
				console.log( data );
			});


		return [
			{id: 1, name: "Frytki", price: 2.49},
			{id: 2, name: "Śliwka", price: 3.29},
			{id: 3, name: "Dżem", price: 0.49}];
	};

	addToCart = (item) => {
		let found = false;
		let updatedCart = this.state.cart.map((cartItem) => {
			if (cartItem.name == item.name) {
				found = true;
				cartItem.quantity++;
				return cartItem;
			} else {
				return cartItem;
			}
		});
		if (!found) {
			updatedCart.push({
				id: item.id, name: item.name, price: item.price, quantity: 1
			})
		}
		this.setState({
			cart: updatedCart
		});
	};

	render() {
		return (
			<div className='basketMain'>
				<nav className='basketNav'>
					<Cart cart={this.state.cart}/>
				</nav>
				<div className="products">
					{this.state.items.map((item , index) => {
						return <CartItem details={item} addToCart={this.addToCart} key={index} />
					})}
				</div>
			</div>);
	}
}


class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		}
	}
	openCart = () => {
		this.setState({
			open: !this.state.open
		})
	};

	render() {
		return (
			<div className={"cart " + (this.state.open ? "cart-Open" : "")} onClick={this.openCart} >
				<p className="title">Cart</p>
				<div>
					{this.props.cart.length > 0 ? this.props.cart.map((item, index) => {
						return <p key={index}>{item.name}{item.quantity > 1 ? <span key={index}> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
				</div>
			</div>);
	}
}

class CartItem extends React.Component {

	addToCart = () => {
		this.props.addToCart(this.props.details);
	};

	render() {

		let item = this.props.details;

		return (
			<div className="product" onClick={this.addToCart}>
				<p>{item.name}</p>
				<p>{item.price}</p>
			</div>
		);
	}
}

export default ShoppingCart;