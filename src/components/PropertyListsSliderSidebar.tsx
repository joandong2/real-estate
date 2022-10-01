import React from 'react'
import { Property } from '../models/property'
import Slider from "react-slick"

import {
    useGetAgentQuery
} from '../services/agentsApi'

import {
  useGetPropertiesQuery
} from '../services/propertiesApi'

import { BiBed } from 'react-icons/bi';
import { TbRuler2 } from 'react-icons/tb';
import { FaShower } from 'react-icons/fa'

interface Props {
    properties?: Property[];
}

const PropertyListsSliderSidebar: React.FC<Props> = () => {

    // console.log('data props', properties)
    // const { data, error, isLoading } = useGetAgentQuery('2')
    // console.log('agent propi', data)

    const {
      data : propertyLists,
      error, 
      isLoading,
      isSuccess
    } = useGetPropertiesQuery(undefined, {
          selectFromResult: ({data, error, isLoading, isSuccess}) => ({
              data: data?.filter((res: Property) => res.featured === true),
              error,
              isLoading,
              isSuccess
          })
    });
    
    var settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    };

    return (
        <>
          <Slider {...settings}>
            {
              propertyLists ?  
                (
                  propertyLists.map((property,index) => (
                    property.featured ? (
                      <div key={property.id}>
                        <div className="featured-box relative">
                          <img className="" src={`/assets/properties/${property.profile}`} alt=""/>
                          <div className="overlay-light2"></div>
                          <div className="absolute top-2">
                            <div className="flex flex-col align-start justify-between">
                              <div className="flex justify-between p-3 space-x-2">
                                <p className="border bg-black text-white px-1 border-black text-xs uppercase">{property.status.replace(/-/g, ' ')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center align-middle mt-2 text-center">
                          <a className="no-underline text-gray-500 hover:text-gray-700" href={`/property/${property.id}`}>{property.tagline}</a>
                        </div>
                      </div>
                    ) : null
                  ))
                ) : 
                (
                  <p>Slides not available...</p>
                )
            }
          </Slider>
        </>
    )
}

export default PropertyListsSliderSidebar