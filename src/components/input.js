import React, { PropTypes, Component } from 'react'

export default class InputBox extends Component {
  render() {
    return(
      <div className="row">
      <div className="large-4 columns">
        <input id="counterName" type="text" />
        <button type="button" className="button" id="counterAdd" onClick={this.props.handleCreate} >Add Counter</button>
      </div>
      <div className="large-4 columns">
      <h3>Total Beers </h3><div className="stat">{this.props.grandTotal}</div>
      </div>
      </div>
    )
  }
};
