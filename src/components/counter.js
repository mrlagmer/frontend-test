import React, { PropTypes, Component } from 'react'

export default class Counter extends Component {
  render() {
    return(
        <div className="counters row">
    {this.props.beerCounters.map((counter,i) =>
      <div className="large-6 columns" key={i} >
        <div className="callout secondary">
        <p>{counter.title}</p>
        <div className="stat">{counter.count}</div>
        <br/>
        <button type="button" className="button success" id={counter.id} onClick={this.props.add} >Add</button><button type="button" className="button warning" id={counter.id} onClick={this.props.sub} >Subtract</button>
        <button type="button" className="button alert float-right" id={counter.id} onClick={this.props.del} >Delete</button>
        </div>
      </div>
    )}
        </div>
    )
  }
};
