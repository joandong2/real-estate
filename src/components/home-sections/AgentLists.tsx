import React from 'react'
import { Agent } from '../../models/agent'
//import image1 from '../../images/jurica-koletic-7YVZYZeITc8-unsplash.jpg'

import {
    useGetAgentsQuery
} from '../../services/agentsApi'

const AgentLists: React.FC = () => {

    const {
        data,
        error, 
        // isLoading,
        // isFetching,
        isSuccess
    } = useGetAgentsQuery();

    return (
        <>
            <section id="agents" className="bg-[#ffffff] p-32">
                <div className="mx-auto container">
                    <h2 className="text-3xl">Meet our Agents</h2>
                    <p className="mb-8">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf.</p>
                    <div className="flex align-middle justify-center columns-4 space-x-1">
                        { isSuccess ? 
                            (
                                data.map((agent) => (
                                    <div key={agent.id}>
                                        <div className="py-5 px-6 text-center bg-white agent">
                                            <img className="rounded-[50%] mb-4 mx-auto" height="150" width="150" src={agent.profile} alt=""/>
                                            <h3 className="mb-0 text-[#e57677] font-bold">{agent.name}</h3>
                                            <p className="mb-6 font-bold">Agent, {agent.company}</p>
                                            <p className="mb-3">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.</p>
                                        </div>
                                    </div>
                                ))
                            ) : 
                            (
                                <>{error}</>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AgentLists