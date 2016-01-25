import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createCounter, requestCounter, receiveCounter, fetchCounter, saveCounter, addCounter } from '../state/Input'
import InputBox from '../components/input.js'
import Counter from '../components/counter.js'

class CounterPage extends Component {
    constructor(props) {
      super(props)
      this.handleCreate = this.handleCreate.bind(this)
      this.handleAdd = this.handleAdd.bind(this)
    }

    handleCreate(e) {
      const { dispatch } = this.props
      dispatch(saveCounter(document.getElementById('counterName').value))
    }

    handleAdd(e) {
        const { dispatch } = this.props
        console.log(e.target.id)
        dispatch(addCounter(e.target.id))
    }

    componentDidMount() {
      const { dispatch } = this.props
      dispatch(fetchCounter())
    }
    render() {
      const {  beerCounters, isFetching } = this.props
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
              <Counter beerCounters={beerCounters} add={this.handleAdd}  />
          }
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
