import {
    SET_JOB,
    ADD_JOB,
    DELETE_JOB
} from './constant.js'
export const setJob = (job) => {
    return {
        type: SET_JOB,
        set: job
    }
}
export const addJob = (job) => {
    return {
        type: ADD_JOB,
        add: job
    }
}
export const deleteJob = (index) => {
    return {
        type: DELETE_JOB,
        index
    }
}