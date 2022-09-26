import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Agent } from '../models/agent'

export const agentsApi = createApi({
    reducerPath: "agents", 
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3006/"}), // all request starts with this url
    tagTypes: ['Agent'], // auto fetching if theres a change in data
    endpoints:(builder) => ({
        // contacts should be the variable in the db object
        // contact + query = ContactsQuery Hook
        // returns a contacts array which is Contact[]
        // void mean no parameters needed
        getAgents: builder.query<Agent[], void>({ 
            query: () => '/agents', // endpoint
            //transformResponse: res => res.sort((a, b) => b.id - a.id), 
            providesTags: ['Agent']
        }),
    })
})

export const { 
    useGetAgentsQuery,
    // useContactQuery,
    // useAddContactMutation,
    // useUpdateContactMutation,
    // useDeleteContactMutation
} = agentsApi;