import React from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import './suggest.css';


class Suggest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  getSuggestions(value) {
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
    const escapeRegexCharacters = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    return this.props.data.filter(item => regex.test(item[this.props.name]));
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  renderSuggestion(suggestion, { query }) {
    const matches = AutosuggestHighlightMatch(suggestion[this.props.name], query);
    const parts = AutosuggestHighlightParse(suggestion[this.props.name], matches);

    return (
      <span>
        {parts.map((part, index) => {
          const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;

          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
        <span>{this.props.details ? this.props.details(suggestion) : null}</span>
      </span>
    );
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange.bind(this)
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
        getSuggestionValue={(suggestion) => suggestion[this.props.name]}
        renderSuggestion={this.renderSuggestion.bind(this)}
        inputProps={inputProps}
      />
    );
  }
}

export default Suggest;
