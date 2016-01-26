import React, { PropTypes, Component } from 'react'

export default class Counter extends Component {
  render() {
    return(
        <div className="counters">
    {this.props.beerCounters.map((counter,i) =>
      <div key={i} >
        <p>{counter.title} - Count {counter.count}</p>
        <button id={counter.id} onClick={this.props.add} >Add</button><button id={counter.id} onClick={this.props.sub} >Subtract</button>
        <button id={counter.id} onClick={this.props.del} >Delete</button>
      </div>
    )}
        </div>
    )
  }
};
