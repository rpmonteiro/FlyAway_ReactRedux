import React, { Component } from 'react';
import { fetchFlickrImages } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class InitialForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = { initialDestination: '' };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    console.log("I've called the API");
    event.preventDefault();
    this.props.fetchFlickrImages(this.state.initialDestination);
  }

  onInputChange(event) {
    this.setState({ initialDestination: event.target.value });
  }

  render() {
    return (
      <form className="initial-form" onSubmit={this.onFormSubmit}>
        <fieldset className="form-group">
        <label htmlFor="initial_destination_input">Where shall we take you?</label>
        <input onChange={this.onInputChange} placeholder="Hawai, Amsterdam..." className="form-control" id="initial_destination_input"/>
        <small className="text-muted">We promise that we'll get you there!</small>
        </fieldset>
        <button type="submit" className="btn btn-primary">Let's go</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFlickrImages }, dispatch);
}

export default connect(null, mapDispatchToProps)(InitialForm);