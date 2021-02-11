import * as actions from './actionType'

export const  bugAdded = description =>( {
        type:actions.BUG_ADDED,
        payload:{
            description
        }
    }
);
export const bugRemoved = id =>({
    type:actions.BUG_REMOVED,
    payload:{
        id
    }
})
export const bugResolved = id => ({
    type:actions.BUG_RESOLVED,
    payload:{
        id
    }
})