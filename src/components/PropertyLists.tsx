import React from 'react'
import { Property } from '../models/property'
import Slider from "react-slick"

import {
    useGetAgentQuery
} from '../services/agentsApi'

interface Props {
    properties: Property[] | undefined;
}

const PropertyLists: React.FC<Props> = ({ properties }) => {

    console.log('data props', properties)
    // const { data, error, isLoading } = useGetAgentQuery('2')

    // console.log('agent propi', data)
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
        <>
          <Slider {...settings}>
            <div className="mr-5">
              <img src="/assets/properties/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg" alt=""/>
            </div>
            <div>
              <img src="/assets/properties/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg" alt=""/>
            </div>
            <div>
              <img src="/assets/properties/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg" alt=""/>
            </div>
            <div>
              <img src="/assets/properties/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg" alt=""/>
            </div>
            <div>
              <img src="/assets/properties/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg" alt=""/>
            </div>
            <div>
              <img src="/assets/properties/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg" alt=""/>
            </div>
          </Slider>
        </>
    )
}

export default PropertyLists