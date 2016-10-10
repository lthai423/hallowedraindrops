// State tree is redudant
// Change state with actions
//Action: plain javascript object describing change
  // min representation of change of data
// Only requirement is type property (use string as it is serializable)
// Components only need to dispatch action with type, and other information (id or text. etc)
// Every click, adding test, will all be actions
// State is read-only, to change state, need to dispatch action ( network request, user action)

/*
* action types
*/

export const CHALLENGE_PROMPT = 'CHALLENGE_PROMPT'
export const CHALLENGE_SRC_CODE = 'CHALLENGE_SRC_CODE'
export const CHALLENGE_TITLE = 'CHALLENGE_TITLE'
export const CHALLENGE_ADD_TEST = 'CHALLENGE_ADD_TEST'


/*
* action creators
*/


export function challengePrompt = (text) {
  return { type: CHALLENGE_PROMPT, text};
}

export function challengeSRCCode = (text) {
  return { type: CHALLENGE_SRC_CODE, text};
}

export function challengeTitle = (text) {
  return { type: CHALLENGE_TITLE, text};
}

export function challengeAddTest = (text) {
  return { type: CHALLENGE_TITLE, text};
}
