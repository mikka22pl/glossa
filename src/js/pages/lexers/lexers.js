import React from "react";

import Lexer from "./lexer";
import LexerForm from "./form";

export default class Lexers extends React.Component {

	/*constructor(props) {
		super(props);
		console.log('--> Lexers:constructor');
	}
	componentDidMount() {
	  console.log('Lexers :: mounted.');
	}*/

	render() {
		console.log('Lexers' + JSON.stringify(this.props));
		var nodes = this.props.data.map(function(item) {
			return (
				<Lexer {...item} key={item.key}></Lexer>
			);
		});
		return (
			<div class="content">
        <h3>Słowniki</h3>
				<div class="row lexers">
					<h3>Lexers</h3>
	        <LexerForm />
	        {nodes}
				</div>
			</div>
		);
	}
};

Lexers.defaultProps = {
	data: [
		{key:"1", name: "Języki", code: "languages"},
		{key:"2", name: "Uzytkownicy", code: "users"}
	]
};
