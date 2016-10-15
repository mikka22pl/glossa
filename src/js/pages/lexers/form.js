import React from "react";

import Fields from "./fields";

export default class LexerForm extends React.Component {
  componentDidMount() {
	  console.log('LexerForm :: mounted.');
  }

  render() {
    return (
      <form class="form">
        <Fields id="name" label="Nazwa" name="name" type="text" />
        <Fields id="descr" label="Opis" name="descr" type="text" />
      </form>
    );
  }
};
