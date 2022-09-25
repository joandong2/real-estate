import React from 'react'
import { Property } from '../models/property'

interface Props {
    properties: Property[] | undefined;
}

const PropertyLists: React.FC<Props> = ({ properties }) => {

    console.log('data props', properties)

    return (
        <>
            <h1>hello world</h1>
        </>
    )
}

export default PropertyLists