import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://fakeql.com/graphql/f037725b3ef09a327f628027c0e5caeb",
  cache: new InMemoryCache(),
});

export default client;
