import React from 'react'
import {
    useGetPropertiesQuery
  } from '../services/propertiesApi'
import { useParams } from "react-router-dom";
import { Property } from '../models/property';
import { GiPencilRuler } from 'react-icons/gi';

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
                                            <div className="relative w-">
                                                <img className="h-full" width="350" height="250" src={`/assets/properties/${property.profile}`} alt=""/>
                                            </div>
                                            <div className="p-4 bg-white w-full">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex space-x-2 mb-2">
                                                            <p className="inline-block bg-gray-500 text-white px-2 text-[10px] uppercase">{property.status.replace(/-/g, ' ')}</p>
                                                            {property.featured ? <p className="bg-red-500 px-1 text-white uppercase text-[10px]">Featured</p> : null}
                                                        </div>
                                                        <h3 className="text-lg font-semibold m-0">{property.tagline}</h3>
                                                        <p>{property.address}</p>
                                                        <p className="py-4"><a className="p-2 border bg-red-500 text-white no-underline hover:bg-red-400 text-[12px]" href={`/property/${property.id}`}>View Details</a></p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-semibold">$ {property.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</p>
                                                        <p className="text-xs font-semibold"><GiPencilRuler className="inline-block"/> {property['square-foot']} sq. ft</p>
                                                    </div>
                                                </div>
                                                 
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