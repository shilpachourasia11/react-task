import * as types from './../constants'
import home from './../apiCalls/home'

export function getWorkSpaces(data) {
  return {
    type: types.ALL_WORKSPACES,
    payload: home.getWorkSpaces(data)
      .then( response => {
        return response.data;
      } )
  }
}

export function reset(){
  return {
    type: types.RESET
  }
}

export function changeAvailability(value){
  return {
    type: types.CHANGE_AVAILABILITY,
    payload: home.changeAvailability(value)
      .then( response => {
        return response.data;
      }),
    value
  }
}
