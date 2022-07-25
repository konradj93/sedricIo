import { ApolloClient, InMemoryCache } from '@apollo/client';

const { REACT_APP_API_ADDRESS } = process.env;
const apiClient = new ApolloClient({
  uri: REACT_APP_API_ADDRESS,
  cache: new InMemoryCache()
});

export default apiClient;
