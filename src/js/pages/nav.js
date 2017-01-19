import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
/* onlyActiveOnIndex={true} */
  render() {
    const { onlyActiveOnIndex, location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Start</IndexLink>
              </li>
              <li className="active">
                <Link to="/lexers" onClick={this.toggleCollapse.bind(this)}>Lexers</Link>
              </li>
              <li className="active">
                <Link to="/languages" onClick={this.toggleCollapse.bind(this)}>Languages</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
