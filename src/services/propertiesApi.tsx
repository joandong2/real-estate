import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Property } from '../models/property'

export const propertiesApi = createApi({
    reducerPath: "properties", 
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3006/"}), // all request starts with this url
    tagTypes: ['Property'], // auto fetching if theres a change in data
    endpoints:(builder) => ({
        // contacts should be the variable in the db object
        // contact + query = ContactsQuery Hook
        // returns a contacts array which is Contact[]
        // void mean no parameters needed
        getProperties: builder.query<Property[], void>({ 
            query: () => '/properties', // endpoint
            //transformResponse: res => res.sort((a, b) => b.id - a.id), 
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
    // useContactQuery,
    // useAddContactMutation,
    // useUpdateContactMutation,
    // useDeleteContactMutation
} = propertiesApi;