import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createCounter, requestCounter, receiveCounter, fetchCounter, saveCounter, addCounter, subtractCounter, delCounter } from '../state/Input'
import InputBox from '../components/input.js'
import Counter from '../components/counter.js'

class CounterPage extends Component {
    constructor(props) {
      super(props)
      this.handleCreate = this.handleCreate.bind(this)
      this.handleAdd = this.handleAdd.bind(this)
      this.handleSub = this.handleSub.bind(this)
      this.handleDel = this.handleDel.bind(this)
      var total = 0;
    }

    handleCreate(e) {
      const { dispatch } = this.props
      dispatch(saveCounter(document.getElementById('counterName').value))
    }

    handleAdd(e) {
        const { dispatch } = this.props
        dispatch(addCounter(e.target.id))
    }

    handleSub(e) {
        const { dispatch } = this.props
        dispatch(subtractCounter(e.target.id))
    }

    handleDel(e) {
        const { dispatch } = this.props
        dispatch(delCounter(e.target.id))
    }

    componentDidMount() {
      const { dispatch } = this.props
      dispatch(fetchCounter())
    }
    render() {
      const {  beerCounters, isFetching } = this.props
      let counts = beerCounters.map(c => c.count);
      let total = counts.reduce((acc, c) => acc + c, 0);
      return (
        <div className="commentBox row">
          <div className="callout large">
          <div className="row column text-center">
          <h1>Stu Beer Counting App</h1>
          </div>
          </div>
          <InputBox handleCreate={this.handleCreate} />
          <hr />
          {beerCounters.length >0 &&
              <Counter beerCounters={beerCounters} add={this.handleAdd} sub={this.handleSub} del={this.handleDel}  />
          }
          <h3>Total {total}</h3>
        </div>
      );
    }
}

CounterPage.propTypes = {
  beerCounters: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    beerCounters: state.beerCounters,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(CounterPage)
