import React from "react";
import { connect } from "react-redux";

import Language from "./language";

class Languages extends React.Component {

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
		{key:"1", id:1, name: "Szwedzki", code: "sve"},
		{key:"2", id:2, name: "Fiński", code: "suo"},
		{key:"3", id:3, name: "Niemiecki", code: "deu"},
		{key:"4", id:4, name: "Lakota", code: "lak"},
		{key:"5", id:5, name: "Grecki", code: "ell"},
		{key:"6", id:6, name: "Norweski", code: "nor"},
		{key:"7", id:7, name: "Gruziński", code: "sak"}
	]
};

function mapStateToProps(state) {
	return ({
		language: state.language
	})
}

export default connect(mapStateToProps)(Languages);
