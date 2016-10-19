import React from "react";

import Language from "./language";

export default class Languages extends React.Component {

	componentDidMount() {
	  console.log('Languages :: mounted.');
	}

	render() {
		console.log('Languages');
		var nodes = this.props.data.map(function(item) {
			return (
				<Language {...item} key={item.key}></Language>
			);
		});
		return (
			<div class="content">
        <h3>Języki</h3>
				<div class="row languages">
					<h3>Languages</h3>
	        {nodes}
				</div>
			</div>
		);
	}
};

Languages.defaultProps = {
	data: [
		{key:"1", name: "Szwedzki", code: "sve"},
		{key:"2", name: "Fiński", code: "suo"},
		{key:"3", name: "Niemiecki", code: "deu"},
		{key:"4", name: "Lakota", code: "lak"},
		{key:"5", name: "Grecki", code: "ell"},
		{key:"6", name: "Norweski", code: "nor"},
		{key:"7", name: "Gruziński", code: "sak"}
	]
};
