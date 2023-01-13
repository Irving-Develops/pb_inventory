import {
    csrfFetch
} from './csrf'

const GET_KEYSTOCKS = 'keystocks/GET_KEYSTOCKS'

const getKeystocks = (keystocks) => {
    return {
        type: GET_KEYSTOCKS,
        keystocks
    }
}

export const getKeystocksThunk = () => async (dispatch) => {
    try {
        const res = await csrfFetch('/api/keystocks')
        if (res.ok) {
            const data = await res.json()
            dispatch(getKeystocks(data))
            return res
        }
    } catch (err) {
        return err.message
    }
}


const keystocksReducer = (state = {}, action) => {
    let newState = {
        ...state
    }
    switch (action.type) {
        case GET_KEYSTOCKS:
            action.keystocks.forEach(keystock => {
                newState[keystock.id] = keystock
            })
            return newState
        default:
            return state
    }
}


export default keystocksReducer
