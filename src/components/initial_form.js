import React, { Component } from 'react';

export default class InitialForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  handleClick = () => {

  }

  render() {
    return (
      <form className="initial-form">
        <fieldset className="form-group">
        <label htmlFor="initial_destination_input">Where shall we take you?</label>
        <input placeholder="Hawai, Amsterdam..." className="form-control" id="initial_destination_input"/>
        <small className="text-muted">We promise that we'll get you there!</small>
        </fieldset>
        <button onClick={handleClick(event.target.value)} type="submit" className="btn btn-primary">Let's go</button>
      </form>
    );
  }
}
