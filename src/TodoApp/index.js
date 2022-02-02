import React, { useState, useReducer, useEffect } from 'react'
import reducer, { initValue } from './reducer.js'
import {
    setJob,
    addJob,
    deleteJob
} from './action.js'
import logger from './logger.js'

function Todo() {
    const [state, dispatch] = useReducer(logger(reducer), initValue)
    const { job, jobs } = state

    return (
        <div>
            <input type="text"
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={() => {
                dispatch(addJob(job))
            }}>Thêm việc</button>
            <ul>
                {jobs.map((job, index) => {
                    return <li key={index}>{job}
                        <span><button onClick={() => dispatch(deleteJob(index))}>xóa</button></span>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Todo;
