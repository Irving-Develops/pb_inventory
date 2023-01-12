import {csrfFetch} from './csrf'

const GET_LOCATIONS = 'locations/GET_LOCATIONS'

const getLocations = (locations) => {
    return {
        type: GET_LOCATIONS,
        locations
    }
}

export const getLocationsThunk = () => async (dispatch) => {
    try {
        const res = await csrfFetch('/api/locations')
        if(res.ok) {
            const data = await res.json()
            dispatch(getLocations(data))
            return res
        }
    }catch(err){
        return err.message
    }
}


const locationsReducer = (state = {}, action) => {
    let newState = {...state}
    switch(action.type) {
        case GET_LOCATIONS:
            action.locations.forEach(location => {
                newState[location.id] = location
            })
            return newState
        default:
            return state
    }
}


export default locationsReducer
