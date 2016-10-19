import React from "react";

import InputField from "../../components/forms/inputfield";
//import Fields from "./fields";

export default class LexerForm extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = { name: '', descr: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('handleChange');
    this.setState({name: e.target.value});
  }

  componentDidMount() {
	  console.log('LexerForm :: mounted.');
  }

  render() {
    return (
      <form class="form">
        <div class="form-row">
          <label>name:</label>
          <InputField name="name" value={this.state.name} />
        </div>
        <div class="form-row">
          <label>Opis:</label>
          <input value={this.state.descr} type="text" onChange={this.handleChange} class="form-control" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
};
