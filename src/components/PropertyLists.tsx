import React from 'react'
import { Property } from '../models/property'
import Slider from "react-slick"

import {
    useGetAgentQuery
} from '../services/agentsApi'

import { AiOutlineHome } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { FaShower, FaRulerCombined } from 'react-icons/fa'

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
                      <div key={property.id} className="p-3">
                        <div className="min-h-[150px]">
                            <a href="/">
                              <img className="relative" src={`/assets/properties/${property.profile}`} alt=""/>
                              <div className="absolute top-2">
                                <div className="flex flex-col align-start justify-between min-h-[190px] w-[100%]">
                                  <div className="flex justify-between p-3 space-x-2">
                                    <p className="border bg-red-500 px-1 text-white uppercase text-xs border-red-500">Featured</p>
                                    <p className="border bg-black text-white px-1 border-black text-xs uppercase">{property.status.replace(/-/g, ' ').replace(/^./, function(x){return x.toUpperCase()})}</p>
                                  </div>
                                  <p className="text-left ml-3 font-bold text-white">$ {property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </div>
                              </div>
                            </a>
                        </div>
                        <div className="flex flex-col justify-center align-middle mt-6">
                            <p className="font-semibold mb-2">{property.tagline}</p>
                            <div className="flex align-middle justify-center space-x-5 mb-2">
                              <p><BiBed className="inline-block"/> {property.bedrooms}</p>
                              <p><FaShower className="inline-block"/> {property.bathrooms}</p>
                              <p><FaRulerCombined className="inline-block"/> {property['square-foot']} Sq Ft</p>
                            </div>
                            
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