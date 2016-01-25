import React, { PropTypes, Component } from 'react'

export default class InputBox extends Component {
  render() {
    return(
      <div>
        <input id="counterName" type="text" />
        <button id="counterAdd" onClick={this.props.handleCreate} >Save</button>
      </div>
    )
  }
};
