import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Module } from '../../../../constants'
import { changeModule } from '../../../../actions/ui'

const HomeView: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeModule(Module.HOME))
        return () => {
        };
    }, [])

    return (
        <p>Home</p>
    )
}

export default HomeView