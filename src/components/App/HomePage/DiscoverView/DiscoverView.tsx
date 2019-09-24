import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Module } from '../../../../constants'
import { changeModule } from '../../../../actions/ui'

const DiscoverView: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeModule(Module.DISCOVER))
        return () => {};
    }, [])

    return (
        <p>Discover</p>
    )
}

export default DiscoverView