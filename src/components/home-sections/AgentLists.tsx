import React from 'react'
import { Agent } from '../../models/agent'
import image1 from '../../images/jurica-koletic-7YVZYZeITc8-unsplash.jpg'

import {
    useGetAgentsQuery
} from '../../services/agentsApi'

const AgentLists: React.FC = () => {

    //agents
    const {
        data,
        error, 
        isLoading,
        isFetching,
        isSuccess
    } = useGetAgentsQuery();

    console.log('agents', data)

    return (
        <>
            <section id="agents" className="bg-[#f8f8f8] p-32">
                <div className="mx-auto container">
                    <h1 className="text-3xl">Meet our Agents</h1>
                    <p className="mb-8">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf.</p>
                    <div className="flex align-middle justify-center columns-4 space-x-1">
                    <div className="py-5 px-6 text-center bg-white agent">
                        <img className="rounded-[50%] mb-4 mx-auto" height="150" width="150" src={image1} alt=""/>
                        <h3 className="mb-0 text-[#e57677] font-bold">John Doe</h3>
                        <p className="mb-6 font-bold">Agent, Modern Real Estate</p>
                        <p className="mb-3">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.</p>
                    </div>
                    <div className="py-5 px-6 text-center bg-white agent">
                        <img className="rounded-[50%] mb-4 mx-auto" height="150" width="150" src={image1} alt=""/>
                        <h3 className="mb-0 text-[#e57677] font-bold">John Doe</h3>
                        <p className="mb-6 font-bold">Agent, Modern Real Estate</p>
                        <p className="mb-3">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.</p>
                    </div>
                    <div className="py-5 px-6 text-center bg-white agent">
                        <img className="rounded-[50%] mb-4 mx-auto" height="150" width="150" src={image1} alt=""/>
                        <h3 className="mb-0 text-[#e57677] font-bold">John Doe</h3>
                        <p className="mb-6 font-bold">Agent, Modern Real Estate</p>
                        <p className="mb-3">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.</p>
                    </div>
                    <div className="py-5 px-6 text-center bg-white agent">
                        <img className="rounded-[50%] mb-4 mx-auto" height="150" width="150" src={image1} alt=""/>
                        <h3 className="mb-0 text-[#e57677] font-bold">John Doe</h3>
                        <p className="mb-6 font-bold">Agent, Modern Real Estate</p>
                        <p className="mb-3">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin.</p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AgentLists