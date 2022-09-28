import React from 'react'
import {
  useGetPropertiesQuery
} from '../services/propertiesApi'
import PropertyLists from './PropertyLists';

// home-section
import Callback1 from './home-sections/Callback1';
import Types from './home-sections/Types';
import Callback2 from './home-sections/Callback2';
import AgentLists from './home-sections/AgentLists';

const Home: React.FC = () => {
  //properties
  const {
    data : propertyLists,
    error, 
    isLoading,
    isFetching,
    isSuccess
  } = useGetPropertiesQuery();

  return (
    <>
      <section id="featured-homes" className="bg-white">
        <div className="mx-auto container px-10 py-20">
          <h2>Featured Homes</h2>
          <PropertyLists properties={propertyLists} />
        </div>
      </section>
      <Callback1 />
      <Types />
      <Callback2 />
      <AgentLists/>
    </>
  )
}

export default Home