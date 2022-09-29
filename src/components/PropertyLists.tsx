import React from 'react'
import { Property } from '../models/property'
import Slider from "react-slick"

import {
    useGetAgentQuery
} from '../services/agentsApi'

import { BiBed } from 'react-icons/bi';
import { TbRuler2 } from 'react-icons/tb';
import { FaShower, FaRulerCombined, FaHome } from 'react-icons/fa'

interface Props {
    properties: Property[] | undefined;
}

const PropertyLists: React.FC<Props> = ({ properties }) => {

    // console.log('data props', properties)
    // const { data, error, isLoading } = useGetAgentQuery('2')

    // console.log('agent propi', data)
    var settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
        <>
          <Slider {...settings}>
            {
              properties ?  
                (
                  properties.map((property,index) => (
                    property.featured ? (
                      <div key={property.id} className="p-2">
                        <div className="featured-box relative">
                            <a href={`/property/${property.id}`}>
                              <img className="" src={`/assets/properties/${property.profile}`} alt=""/>
                              <div className="overlay-light2"></div>
                              <div className="absolute top-2">
                                <div className="flex flex-col align-start justify-between">
                                  <div className="flex justify-between p-3 space-x-2">
                                    <p className="border bg-red-500 px-1 text-white uppercase text-xs border-red-500">Featured</p>
                                    <p className="border bg-black text-white px-1 border-black text-xs uppercase">{property.status.replace(/-/g, ' ')}</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                        </div>
                        <div className="flex flex-col justify-center align-middle mt-6">
                            <p className="font-semibold mb-2">{property.tagline}</p>
                            <div className="flex flex-wrap align-middle justify-center space-x-4 mb-1">
                              <p><BiBed className="inline-block"/> {property.bedrooms}</p>
                              <p><FaShower className="inline-block"/> {property.bathrooms}</p>
                              <p><TbRuler2 className="inline-block"/> {property['square-foot']} Sq Ft</p>
                            </div>
                            <p className="text-xs uppercase mt-3"><FaHome className="inline-block"/> {property.type.replace(/-/g, ' ')}</p>
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

export default PropertyLists