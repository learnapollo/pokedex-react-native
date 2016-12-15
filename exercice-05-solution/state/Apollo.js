import ApolloClient, { createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/__PROJECT_ID__',
    dataIdFromObject: o => o.id
  }),
});

export default client;
