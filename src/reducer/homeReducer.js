import * as types from './../constants'

const homeReducer = ( state = {
	allWorkspaces: [],
	dataReady: false,
	totalWorkSpacePages: 1,
	error: false,
	changeAvailability: false,
	loading: false
} , action) => {
	switch (action.type){
		case types.ALL_WORKSPACES + "_FULFILLED":
		let total = action.payload.count/10 + action.payload.count%10
			state = {
				...state,
				allWorkspaces: action.payload.rows,
				dataReady: true,
				totalWorkSpacePages: total
			}
			return state
		case types.ALL_WORKSPACES + '_REJECTED':
		return state
		case types.RESET:
			return state ={
				...state,
				dataReady: false,
				error: false
			}
		case types.CHANGE_AVAILABILITY + '_FULFILLED':
			let allData = state.allWorkspaces
			let index
			for(index = 0; index<allData.length; index++){
				if(allData[index].work_space.id == action.payload.workSpaceId){
					allData[index].work_space.availability = action.payload.value
					break
				}
			}
			return state = {
				...state,
				changedAvailibility: true,
				loading: false,
				error: false,
				allWorkspaces: allData
			}
		case types.CHANGE_AVAILABILITY + '_PENDING':
			return state = {
				...state,
				loading: true
			}
		case types.CHANGE_AVAILABILITY + '_REJECTED':
		return {
			...state,
			error: true,
			changeAvailability: false,
			loading: false
		}
		default:
			return state
	}
}

export default homeReducer
