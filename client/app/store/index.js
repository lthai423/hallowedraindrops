import { createStore } from 'redux'
import newChallenge from '../reducers/index'

let store = createStore(newChallenge);
