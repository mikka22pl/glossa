import React from "react";
// import { Link } from "react-router";

import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { location } = this.props;

		return (
			<div>
		    <Nav location={location} {...this.props} />
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<Header language={this.props.language} />

							{this.props.children}

							<Footer />
						</div>
					</div>
				</div>
			</div>
		);
	}
};
