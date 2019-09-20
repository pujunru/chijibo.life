import React from 'react'
import { storiesOf } from '@storybook/react'
// import Button from '../components/etc

storiesOf('button', module)
.add('something', () => {
    return <button type="submit">Submit</button>
})