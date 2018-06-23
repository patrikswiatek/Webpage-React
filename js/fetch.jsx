import React from 'react';


class Fetch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: null,
		}
	}

	render() {

		if (this.state.value === null) {
			return null;
		}

		return (<div>
				<h1>{this.state.value}</h1>
			</div>)
	}

	componentDidMount() {
		fetch('./../db')
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				} else {
					throw new Error('Błąd sieci!');
				}
			})
			.then(data => {
				console.log(data);

			}).catch(err => console.log(err));
	}
}

export default Fetch;
