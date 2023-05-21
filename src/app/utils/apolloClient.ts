import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_HOST_SERVER,
    cache: new InMemoryCache(),
})

export default apolloClient;