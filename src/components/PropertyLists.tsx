import React from 'react'
import {
    useGetPropertiesQuery
  } from '../services/propertiesApi'
import { useParams } from "react-router-dom";
import { Property } from '../models/property';
import { GiPencilRuler } from 'react-icons/gi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import PropertyListsSliderSidebar from './PropertyListsSliderSidebar'

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
                    <div className="flex columns-2 space-x-8">
                        <div className="w-1/4 text-left">
                            <div className="bg-white p-6 mb-5 text-left">
                                <h2 className="font-semibold mb-3">Featured Property</h2>
                                <div className="border-t-[1px] bg-gray-400 w-[100%] h-[1px] mb-3"></div>
                                <PropertyListsSliderSidebar />
                            </div>
                            <div className="bg-white p-6 mb-5 text-left">
                                <h2 className="font-semibold mb-3">Property Types</h2>
                                <div className="border-t-[1px] bg-gray-400 w-[100%] h-[1px] mb-3"></div>
                                <ul>
                                    <li className="mb-2"><a href="/property-type/single-family" className="no-underline text-gray-500 hover:text-gray-700"><BsFillArrowRightCircleFill className="inline-block"/> Single Family</a></li>
                                    <li className="mb-2"><a className="no-underline text-gray-500 hover:text-gray-700" href="/property-type/multi-family"><BsFillArrowRightCircleFill className="inline-block"/> Multi Family</a></li>
                                    <li className="mb-2"><a className="no-underline text-gray-500 hover:text-gray-700" href="/property-type/apartments"><BsFillArrowRightCircleFill className="inline-block"/> Apartments</a></li>
                                    <li className="mb-2"><a className="no-underline text-gray-500 hover:text-gray-700" href="/property-type/studio"><BsFillArrowRightCircleFill className="inline-block"/> Studio</a></li>
                                    <li className="mb-2"><a className="no-underline text-gray-500 hover:text-gray-700" href="/property-type/condo"><BsFillArrowRightCircleFill className="inline-block"/> Condo</a></li>
                                    <li className="mb-2"><a className="no-underline text-gray-500 hover:text-gray-700" href="/property-type/office"><BsFillArrowRightCircleFill className="inline-block"/> Office</a></li>
                                </ul>
                            </div>
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
                                                        <p className="py-4"><a className="p-2 border bg-red-500 text-white no-underline hover:bg-red-400 text-[12px]" href={`/property/${property.id}`}>View Property</a></p>
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