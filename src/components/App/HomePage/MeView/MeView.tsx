import { useDispatch } from 'react-redux'
import { CHANGE_MODULE, Module } from '../../../../constants'
import React, { useEffect } from 'react'

const MeView: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: CHANGE_MODULE,
            targetModule: Module.ME
        })
        return () => {
        };
    }, [])

    return (
        <p>Me</p>
    )
}

export default MeView