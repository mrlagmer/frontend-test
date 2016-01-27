import { createCounter, requestCounter, receiveCounter, fetchCounter, saveCounter, addCounter, subtractCounter, delCounter,
REQUEST_COUNTER, RECEIVE_COUNTER } from '../src/state/Counters.js'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_COUNTER when fetching todos has been done', (done) => {
    nock('http://localhost:4000/api/v1')
      .get('/counters')
      .reply(200, { body: {beerCounters:[{id: "asdf", title: "bob", count: 0}]}})

    const expectedActions = [
      { type: REQUEST_COUNTER },
      { type: RECEIVE_COUNTER, body: {beerCounters: [{id: "asdf", title: "bob", count: 0}]  } }
    ]
    const store = mockStore({ beerCounters: [] }, expectedActions, done)
    store.dispatch(fetchCounter())
    done()
  })
})
