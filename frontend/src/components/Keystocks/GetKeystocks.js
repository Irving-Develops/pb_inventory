import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getKeystocksThunk } from '../../store/keystocks'

export default function GetKeystocks () {
     const dispatch = useDispatch();
     const keystocks = Object.values(useSelector(state => state.keystocks))

     useEffect(() => {
        dispatch(getKeystocksThunk())
        console.log(keystocks, "/////")

     }, [dispatch]);

     return (
        <div>
            test
            {/* {keystocks?.map(loc => (
                <div key={loc.id} >
                    <Link to={`/keystocks/${loc.number}`}>{}</Link>
                </div>
            ))} */}
        </div>
     )
}