import { useDispatch } from 'react-redux'
import { Module } from '../../../../constants'
import React, { useEffect } from 'react'
import { changeModule } from '../../../../actions/ui'

const MeView: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeModule(Module.ME))
        return () => {
        };
    }, [])

    return (
        <p>Me</p>
    )
}

export default MeView