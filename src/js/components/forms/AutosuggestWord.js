import React from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] :
}
class AutosuggestWord extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    }
  }

  onChange = (event, {newValue, method}) => {
    this.setState({
      value: newValue
    });
  }

  loadSuggestions(value) {
    // cancel the previous request
    if (this.lastRequestId !== null) {
      clearTimeout(this.lastRequestId);
    }

    this.setState({
      isLoading: true
    });


  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type a new word',
      value,
      onChange: this.onChange
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        inputProps={inputProps}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      />
    );
  }
}

export default AutosuggestWord;
