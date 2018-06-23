import React from 'react';
import ReactDOM from 'react-dom';


class GallerySearch extends React.Component {

	render() {
		return (
			<form>
				<div>
					<label>
						<input type="text" onChange={this.state.onTextChange} value={this.props.text}/>
					</label>
				</div>
				<div>
					<label>
						<input type="checkbox" onChange={this.props.onCheckboxChange} value="1" checked={this.props.set} />
						Sets
					</label>
				</div>
			</form>
		);
	}
}

export default GallerySearch;
