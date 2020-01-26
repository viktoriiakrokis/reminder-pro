import { ADD_REMINDER } from '../constants'

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text // from ES6 we use this form whrn key and value are same
  }

  console.log('action in addReminder', action)
  return action 
}