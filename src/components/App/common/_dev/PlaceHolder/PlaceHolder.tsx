import React from 'react'
import './style.css'

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
)

export default PlaceHolder