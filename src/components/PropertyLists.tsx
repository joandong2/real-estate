import React from 'react'
import {
    useGetPropertiesQuery
  } from '../services/propertiesApi'
import { useParams } from "react-router-dom";
import { Property } from '../models/property';

type Params = {
    name: string
}

const PropertyLists: React.FC = () => {
    let { name } = useParams<keyof Params>() as Params; // workaround

    const {
        data : propertyLists,
        error, 
        isLoading,
        isSuccess
      } = useGetPropertiesQuery(undefined, {
            selectFromResult: ({data, error, isLoading, isSuccess}) => ({
                data: data?.filter((res: Property) => res.type === name),
                error,
                isLoading,
                isSuccess
            })
      });
    
    console.log('name', name)
    console.log('prop', propertyLists);

    return (
        <>
            <section id="property-listing__slider">
                <div className="mx-auto container mb-8">
                    <div className="flex">
                        <h1 className="text-2xl capitalize">{name.replace(/-/g, ' ')}</h1>
                    </div>
                    <div className="flex columns-2">
                        <div className="w-1/4 text-left">
                            right
                        </div>
                        <div className="w-3/4 text-left">
                            {isSuccess ? 
                                (
                                    propertyLists?.map((property) => (
                                        <div key={property.id} className="flex columns-2 mb-10">
                                            <div className="">
                                                <img width="255" height="190" src={`/assets/properties/${property.profile}`} alt=""/>
                                            </div>
                                            <div className="p-4 bg-white w-full">
                                                {property.tagline}
                                            </div>
                                        </div>
                                    ))
                                ) : 
                                (
                                    <h3 className="">No results found..</h3>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PropertyLists