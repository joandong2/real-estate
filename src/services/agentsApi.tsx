import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Agent } from '../models/agent'

export const agentsApi = createApi({
    reducerPath: "agents", 
    baseQuery: fetchBaseQuery({baseUrl: "https://real-estate-77445-default-rtdb.firebaseio.com/"}), // all request starts with this url
    tagTypes: ['Agent'], // auto fetching if theres a change in data
    endpoints:(builder) => ({
        // contacts should be the variable in the db object
        // contact + query = ContactsQuery Hook
        // returns a contacts array which is Contact[]
        // void mean no parameters needed
        getAgents: builder.query<Agent[], void>({ 
            query: () => '/agents.json', // endpoint
            //transformResponse: res => res.sort((a, b) => b.id - a.id), 
            providesTags: ['Agent']
        }),
        getAgent: builder.query<Agent, any>({
            query: (id) => `/agents/${id - 1}/.json`,
            providesTags: ['Agent']
        }),
    })
})

export const { 
    useGetAgentsQuery,
    useGetAgentQuery,
    // useAddContactMutation,
    // useUpdateContactMutation,
    // useDeleteContactMutation
} = agentsApi;