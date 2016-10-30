import React from "react";
import { connect } from 'react-redux';

class Header extends React.Component {
	render() {
		const lang = this.props.language;
		return (
			<header class="header">
				<h3>Header</h3>
				<p>choosen language: {lang ? lang.id : ''}</p>
			</header>
		);
	}
};

function mapStateToProps(state) {
	return ({
		language: state.language
	})
}

export default connect(mapStateToProps)(Header);
