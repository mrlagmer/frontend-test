import request from 'superagent';
import fetch from 'isomorphic-fetch'

export const CREATE_COUNTER = 'CREATE_COUNTER'
export const RECEIVE_COUNTER = 'RECEIVE_COUNTER'
export const REQUEST_COUNTER = 'REQUEST_COUNTER'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const DELETE = 'DELETE'

export function add(id) {
    return{
        type:ADD,
        id
    }
}

export function subtract(id) {
    return{
        type:SUBTRACT,
        id
    }
}

export function del(id) {
    return{
        type:DELETE,
        id
    }
}

export function createCounter(counterName) {
  return {
    type: CREATE_COUNTER,
    counterName
  }
}

export function requestCounter() {
  return {
    type: REQUEST_COUNTER
  }
}

export function receiveCounter(json) {
  return {
    type: RECEIVE_COUNTER,
    beerCounters: json.map(child => child)
  }
}

export function fetchCounter() {
    return function (dispatch) {
      dispatch(requestCounter())
      return fetch('http://localhost:4000/api/v1/counters')
        .then(response => response.json())
        .then(json =>
          dispatch(receiveCounter(json))
        )
    }
}

export function saveCounter(name) {
    return function (dispatch) {
      dispatch(createCounter(name))
      return request
      .post('http://localhost:4000/api/v1/counter')
      .send({ title: name })
      .set('Accept', 'application/json')
      .end(function(err, res){
        dispatch(fetchCounter())
      });
    }
}

export function addCounter(id) {
    return function (dispatch) {
      dispatch(add(id))
      return request
      .post('http://localhost:4000/api/v1/counter/inc')
      .send({ id: id })
      .set('Accept', 'application/json')
      .end(function(err, res){
        dispatch(fetchCounter())
      });
    }
}

export function subtractCounter(id) {
    return function (dispatch) {
      dispatch(subtract(id))
      return request
      .post('http://localhost:4000/api/v1/counter/dec')
      .send({ id: id })
      .set('Accept', 'application/json')
      .end(function(err, res){
        dispatch(fetchCounter())
      });
    }
}

export function delCounter(id) {
    return function (dispatch) {
      dispatch(del(id))
      return request
      .delete('http://localhost:4000/api/v1/counter')
      .send({ id: id })
      .set('Accept', 'application/json')
      .end(function(err, res){
        dispatch(fetchCounter())
      });
    }
}

export default function counters(state = {
  isFetching: false,
  beerCounters: []
}, action) {
  switch (action.type) {
  case REQUEST_COUNTER:
    return Object.assign({}, state, {
      isFetching: true,
    })
  case RECEIVE_COUNTER:
    return Object.assign({}, state, {
      isFetching: false,
      beerCounters: action.beerCounters
    })
  default:
    return state
  }
}
