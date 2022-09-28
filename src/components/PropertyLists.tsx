import React from 'react'
import { Property } from '../models/property'

import {
    useGetAgentQuery
} from '../services/agentsApi'

interface Props {
    properties: Property[] | undefined;
}

const PropertyLists: React.FC<Props> = ({ properties }) => {

    console.log('data props', properties)
    const { data, error, isLoading } = useGetAgentQuery('2')

    console.log('agent propi', data)

    return (
        <>
            <h1>hello world</h1>
        </>
    )
}

export default PropertyLists