import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
import {
  LOCAL_STORAGE_NAME,
  LOCAL_STORAGE_ROLE,
  LOCAL_STORAGE_TOKEN,
} from "./constants";
import { getMainDefinition } from "@apollo/client/utilities";
import { onError } from "apollo-link-error";

const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
const role = localStorage.getItem(LOCAL_STORAGE_ROLE);
const name = localStorage.getItem(LOCAL_STORAGE_NAME);

export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);
export const authRole = makeVar(role);
export const authName = makeVar(name);

const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT;

const wsLink = new WebSocketLink({
  uri: `ws://${apiHost}:${apiPort}/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      "x-jwt": authTokenVar() || "",
    },
  },
});

const httpLink = createHttpLink({
  uri: `http://${apiHost}:${apiPort}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-jwt": authTokenVar() || "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
          role: {
            read() {
              return authRole();
            },
          },
          name: {
            read() {
              return authName();
            },
          },
        },
      },
    },
  }),
});

onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
