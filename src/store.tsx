import { configureStore } from "@reduxjs/toolkit";
import { agentsApi } from "./services/agentsApi";
import { propertiesApi } from "./services/propertiesApi";
//import { usersApi } from "./services/usersApi";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [propertiesApi.reducerPath]: propertiesApi.reducer,
        [agentsApi.reducerPath]: agentsApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(propertiesApi.middleware)
    middleware:
        (getdefaultMiddleware) =>
            getdefaultMiddleware()
            .concat([
                    propertiesApi.middleware, 
                    agentsApi.middleware
                   ])
})