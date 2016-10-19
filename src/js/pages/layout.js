import React from "react";
// import { Link } from "react-router";

import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

export default class Layout extends React.Component {
	render() {
		const { location } = this.props;
		return (
			<div>
		    <Nav location={location} />
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<Header />

							{this.props.children}

							<Footer />
						</div>
					</div>
				</div>
			</div>
		);
	}
};
