import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_MODULE, Module } from '../../../../constants'

const DiscoverView: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: CHANGE_MODULE,
            targetModule: Module.DISCOVER
        })
        return () => {
        };
    }, [])

    return (
        <p>Discover</p>
    )
}

export default DiscoverView