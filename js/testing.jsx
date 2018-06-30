import React from 'react';



class Testing extends React.Component {




	render() {





		const style11 = {
			height: '100px',
			width: '100px',
			position: 'absolute',
			top: '50vh',
			left: '30vw',
			backgroundColor: 'blue',
		};

		const style12 = {
			height: '100px',
			width: '100px',
			position: 'absolute',
			top: '50vh',
			left: '72vw',
			backgroundColor: 'yellow',
		};




		return(
			<div  className='section12'>


				<div className="parallax">
					<div className="parallax__layer parallax__layer--back">
						<span className='elo' style={{background: 'red', position: 'absolute', top: '1000px', left: '100px'}} />
					</div>
					<div className="parallax__layer parallax__layer--base">
						<span className='elo' style={{background: 'green', position: 'absolute', top: '1000px', left: '300px'}} />
					</div>
				</div>


			</div>
		);
	}
}

export default Testing;


