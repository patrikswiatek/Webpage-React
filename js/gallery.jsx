import React from 'react';
import GallerySearch from './gallerySearch.jsx';
import Chairs2 from './chairs.js';
import ReactDOM from 'react-dom';
import Fetch from './fetch.jsx'

class ChairItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		}
	}
		render(){
			return (<ul>
					<li>{this.props.name}</li>
					<li>{this.props.color}</li>
					<li>{this.props.price}</li>
					<li><img className='picture' src={this.props.src}/></li>
				</ul>)
		}
	}


class ChairItems extends React.Component{
	render(){
		const list = this.props.list.map( (chair, index) => {
		return (
			<ChairItem name={chair.name} colore={chair.color} price={chair.price} src={chair.src} key={index} />)
		});

		return(
			<ul>
				{list}
			</ul>)

	}
}
/*
class Chairs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: this.props.list,
		}
	}

	addProduct = chair => {
		const newList = this.state.list.slice();
		newList.push(chair);

		this.setState({
			list: newList,
		})
	};
	render() {


		return (
			<ul>
				<ChairItems onBuy={ this.addProduct } />
			</ul>
		)
	}
}

class Test extends React.Component {
	render() {
		return <Shop />
	}
}
*/

class PreGallery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
		}
	}

	handleTextChange = event => {
		this.setState({
			text: event.target.value,
		});
	};

	handleCheckboxChange = event => {
		this.setState({
			set: event.target.checked,
		});
	};

	render () {
		const list = this.state.list.filter(chair => {
			if(this.state.set && !chair.set) {
				return false;
			}
			if(this.state.text.length > 0 && chair.name.indexOf(this.state.text) === -1) {
				return false;
			}
			return true;
		});
		return (<section>
			<GallerySearch onTextChange={this.handleTextChange} onCheckboxChange={this.handleCheckboxChange} text={this.state.text} set={this.state.set} />
		</section>)
	}
}



class Gallery extends React.Component {
	render() {

		return(
			<div>
		 <ChairItems list={Chairs2}/>
		 <Fetch />
			</div>)
	}
}

export default Gallery;


