import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://faker.graphqleditor.com/aaf65814-4d3b-4c1f-a602-82654863b4a1/graphql",
  cache: new InMemoryCache(),
});

export default client;
