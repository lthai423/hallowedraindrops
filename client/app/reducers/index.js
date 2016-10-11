// State mutations in app needs to be pure functions
// fn(previous state, action)  => returns next state
// does not modify the state given to it, has to return new object
// Creates a whole new object when creating new state but keeps refs to old things that are not changed
  // this makes redux fast

import {combineReducers } from 'redux'
import { CHALLENGE_PROMPT, CHALLENGE_SRC_CODE,
          CHALLENGE_TITLE, CHALLENGE_ADD_TEST,
          CHALLENGE_DIFFICULTY} from '../actions/index'

function challengePrompt(state = '', action) {
  switch(action.type) {
    case CHALLENGE_PROMPT:
      return action.text;
    default:
      return state;
  }
}

function challengeDifficulty(state = '1', action) {
  switch(action.type) {
    case CHALLENGE_DIFFICULTY:
      return action.text;
    default:
      return state;
  }
}

function challengeSRCCode(state = '', action) {
  switch(action.type) {
    case CHALLENGE_SRC_CODE:
      return action.text;
    default:
      return state;
  }
}

function challengeTitle(state = '', action) {
  switch(action.type) {
    case CHALLENGE_TITLE:
      return action.text;
    default:
      return state;
  }
}

function challengeAddTest(state = {} , action) {
  switch(action.type) {
    case CHALLENGE_ADD_TEST:
      return {
        snippet: action.obj.snippet,
        method: action.obj.method,
        answer: action.obj.answer
      };
    default:
      return state;
  }
}

const newChallenge = combineReducers({
  challengePrompt,
  challengeSRCCode,
  challengeTitle,
  challengeAddTest,
  challengeDifficulty
});

export default newChallenge
