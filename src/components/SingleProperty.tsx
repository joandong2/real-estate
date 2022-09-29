import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useParams } from "react-router-dom";
import { useGetPropertyQuery } from '../services/propertiesApi';

const SingleProperty: React.FC = () => {

  let { id } = useParams();
  const {
    data,
    error, 
    isLoading,
    isFetching,
    isSuccess
  } = useGetPropertyQuery(id);

  console.log(data);

  return (
    <>
        <h1>hello world</h1> 
    </>
  )
}

export default SingleProperty