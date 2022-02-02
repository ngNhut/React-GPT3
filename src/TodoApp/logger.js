


export default function logger(reducer) {


    return (Prevstate, action) => {
        console.group(action.type)
        console.log( Prevstate);
        console.log(action);
        const newState = reducer(Prevstate, action)
        console.log(newState);
        console.groupEnd()
        return newState
    }

}