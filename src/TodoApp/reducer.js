import {
    SET_JOB,
    ADD_JOB,
    DELETE_JOB
} from './constant.js'
export const initValue = {
    job: '',
    jobs: []
  }
  
  const reducer = (state, action) => {
    let obj
    switch (action.type) {
      case SET_JOB:
         obj = {
          ...state,
          job: action.set
        }
        return obj
      case ADD_JOB:
         obj = {
          ...state,
          jobs:[
            ...state.jobs,
            action.add
          ]
        }
        return obj
      case DELETE_JOB:
        const newJobs = [...state.jobs]
        newJobs.splice(action.index,1)
         obj = {
          ...state,
          jobs:newJobs
        }
        return obj
    }
  }
  export default reducer
