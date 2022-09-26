import React from 'react'
import { Agent } from '../models/agent'

interface Props {
    agents: Agent[] | undefined;
}

const AgentLists: React.FC<Props> = ({ agents }) => {

    console.log('agents', agents)

    return (
        <div>AgentLists</div>
    )
}

export default AgentLists