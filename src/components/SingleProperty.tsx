import React from 'react'
import { AiOutlineCalendar, AiTwotoneCar } from 'react-icons/ai';
import { BiBed, BiMapAlt } from 'react-icons/bi';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { FaShower } from 'react-icons/fa';
import { GiPencilRuler } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { useParams } from "react-router-dom";
import { useGetPropertyQuery } from '../services/propertiesApi';
import InquiryForm from './InquiryForm';

const SingleProperty: React.FC = () => {

  let { id } = useParams();
  const {
    data,
    error, 
    isLoading,
    isFetching,
    isSuccess
  } = useGetPropertyQuery(id);

  return (
    <>
      <div className="mx-auto container py-5">
        {isSuccess ? (
          <>
            <div className="flex justify-between align-middle mb-5">
              <div className="flex flex-col text-left">
                <h1 className="text-2xl mb-1">{data.tagline}</h1>
                <p className="py-2 mb-2">{data.featured ? <span className="border bg-red-500 p-2 text-white uppercase text-xs border-red-500">Featured</span> : null} <span className="border bg-black text-white p-2 border-black text-xs uppercase">{data.status.replace(/-/g, ' ')}</span></p>
                <p><GoLocation className="inline-block"/> {data.address} <a target="_blank" rel="noreferrer" href={`https://maps.google.com/maps?q=${data.address}&t=&z=13&ie=UTF8`} className="border bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400 no-underline"><BiMapAlt className="inline-block"/> View Larger Map</a></p>
              </div>
              <div className="flex flex-col text-right">
                <p className="text-3xl font-semibold mb-2">$ {data.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</p>
                <p className="text-lg font-light"><GiPencilRuler className="inline-block"/> {data['square-foot']} sq. ft</p>
              </div>
            </div>
            <div className="mb-10">
              <img src={`/assets/properties/${data.profile}`} alt="profile"/>
            </div>
            <div className="flex justify-between relative space-x-5">
              <div className="w-[70%] mt-5">
                  <div className="bg-white p-8 mb-5 text-left">
                    <h2 className="text-xl font-semibold">Overview</h2>
                    <div className="border-t-[1px] bg-gray-400 w-[100%] h-[1px] mb-5"></div>
                    <div className="flex justify-between columns-2">
                      <div className="flex flex-wrap columns-3 w-[65%]">
                        <div className="w-1/3">
                          <p className="capitalize font-semibold">{data.type.replace(/-/g, ' ')}</p>
                          <p className="font-light">Property Type</p>
                        </div>
                        <div className="w-1/3">
                          <p className="text-xl"><BiBed className="inline-block"/> {data.bedrooms}</p>
                          <p className="font-light">Bedrooms</p>
                        </div>
                        <div className="w-1/3">
                          <p className="text-xl"><FaShower className="inline-block"/> {data.bathrooms}</p>
                          <p className="font-light">Bathrooms</p>
                        </div>
                        <div className="w-full mb-8"></div>
                        <div className="w-1/3">
                          <p className="text-xl"><AiTwotoneCar className="inline-block"/> {data.garage}</p>
                          <p className="font-light">Garage</p>
                        </div>
                        <div className="w-1/3">
                          <p className="text-xl"><GiPencilRuler className="inline-block"/> {data['square-foot']}</p>
                          <p className="font-light">Sq Ft</p>
                        </div>
                        <div className="w-1/3">
                          <p className="text-xl"><AiOutlineCalendar className="inline-block"/> {data['year-built']}</p>
                          <p className="font-light">Year Built</p>
                        </div>
                      </div>
                      <p><div className="gmap_canvas"><iframe title={data.tagline} width="350" height="200" id="gmap_canvas" src={`https://maps.google.com/maps?q=${data.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no"></iframe></div></p>
                    </div>
                  </div>
                  <div className="bg-white p-8 mb-5 text-left">
                    <h2 className="text-xl font-semibold">Description</h2>
                    <div className="border-t-[1px] bg-gray-400 w-[100%] h-[1px] mb-5"></div>
                    <p>{data.description}</p>
                  </div>
                  <div className="bg-white p-8 mb-5 text-left">
                    <h2 className="text-xl font-semibold">Features</h2>
                    <div className="border-t-[1px] bg-gray-400 w-[100%] h-[1px] mb-5"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Air conditioning</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Lawn</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Swimming Pool</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Washer</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Dryer</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Kitchen Appliances</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Wifi</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Cable TV</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Barbeque</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Lawn</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Air conditioning</p>
                      <p><BsFillBookmarkCheckFill className="inline-block"/> Lawn</p>
                    </div>
                  </div>
              </div>
              <div className="max-h-[150px] w-[30%] sticky top-0">
                <div className="bg-white text-left mt-5 p-8">
                  <h3 className="text-xl font-semibold">Interested?</h3>
                  <p>Bacon ipsum dolor amet ball tip chislic beef ribs shankle sirloin meatloaf. Flank tongue turducken chicken tail jerky.</p>
                  <InquiryForm />
                </div>
              </div>
            </div>
          </>
        ) : (
          null
        )}
      </div>
    </>
  )
}

export default SingleProperty