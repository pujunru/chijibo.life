import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_MODULE, Module } from '../../../../constants'

const HomeView: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: CHANGE_MODULE,
            targetModule: Module.HOME
        })
        return () => {
        };
    }, [])

    return (
        <p>Home</p>
    )
}

export default HomeView