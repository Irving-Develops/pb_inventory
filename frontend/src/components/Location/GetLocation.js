import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getLocationsThunk } from '../../store/locations'

export default function GetLocations () {
     const dispatch = useDispatch();
     const locations = Object.values(useSelector(state => state.locations))


     useEffect(() => {
        dispatch(getLocationsThunk())
     }, [dispatch]);

     return (
        <div>
            TEST
            {locations?.map(loc => (
                <div key={loc.id} >
                    <Link to={`/${loc.number}`}>{loc.number}</Link>
                </div>
            ))}
        </div>
     )
}