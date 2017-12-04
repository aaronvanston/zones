import React from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';

import { CloseButton } from '../';

import styles from './LocationInput.css';

const locations = [
  {
    location: 'Melbourne',
    gmt: +11,
  },
  {
    location: 'Meltest',
    gmt: +12,
  },
  {
    location: 'Sydney',
    gmt: +11,
  },
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : locations.filter(loc =>
    loc.location.toLowerCase().slice(0, inputLength) === inputValue,
  );
};

const getSuggestionValue = suggestion => suggestion.location;

const renderSuggestion = suggestion => (
  <div>
    <div>{suggestion.location}</div>
    <div>{suggestion.gmt}</div>
  </div>
);

class LocationInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const { handleClose } = this.props;

    const inputProps = {
      placeholder: 'Enter a location',
      value,
      onChange: this.onChange,
    };

    return (
      <div className={styles.wrapper}>
        <Autosuggest
          theme={styles}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          alwaysRenderSuggestions
        />
        <CloseButton onClick={() => handleClose()} />
      </div>
    );
  }
}

LocationInput.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default LocationInput;
