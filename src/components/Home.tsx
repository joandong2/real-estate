import React from 'react'
import {
  useGetPropertiesQuery
} from '../services/propertiesApi'
import PropertyListsSlider from './PropertyListsSlider';

// home-section
import Callback1 from './home-sections/Callback1';
import Types from './home-sections/Types';
import Callback2 from './home-sections/Callback2';
import AgentLists from './home-sections/AgentLists';

const Home: React.FC = () => {
  
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
        <div className="mx-auto container px-5 py-20">
          <h2 className="text-3xl">Latest & Featured Properties</h2>
          <p className="mb-8">Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
          <PropertyListsSlider properties={propertyLists} />
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