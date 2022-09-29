import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Property } from '../models/property'

export const propertiesApi = createApi({
    reducerPath: "properties", 
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3006/"}), // all request starts with this url
    tagTypes: ['Property'], 
    endpoints:(builder) => ({
        getProperties: builder.query<Property[], void>({ 
            query: () => '/properties',
            providesTags: ['Property']
        }),
        getProperty: builder.query<Property, any>({ 
            query: (id) => `/properties/${id}`, 
            providesTags: ['Property']
        }),
        // ts, first is the return, second is the parameter we passed
        // contact: builder.query<Contact, string>({
        //     query: (id) => `/contacts/${id}`,
        //     providesTags: ['Contact']
        // }),
        // addContact: builder.mutation<void, Contact>({
        //     query: contact => ({
        //         url: '/contacts',
        //         method: 'POST',
        //         body: contact
        //     }),
        //     invalidatesTags: ['Contact']
        // }),
        // updateContact: builder.mutation<void, Contact>({
        //     query: ({id, ...rest}) => ({
        //         url: `/contacts/${id}`,
        //         method: 'PUT',
        //         body: rest // rest of the parameters
        //     }),
        //     invalidatesTags: ['Contact']
        // }),
        // deleteContact: builder.mutation<void, string>({
        //     query: (id) => ({
        //         url: `/contacts/${id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Contact']
        // })
    })
})

export const { 
    useGetPropertiesQuery,
    useGetPropertyQuery,
    // useAddContactMutation,
    // useUpdateContactMutation,
    // useDeleteContactMutation
} = propertiesApi;