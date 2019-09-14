import ApolloClient, { Operation } from "apollo-boost";

const apolloClient = new ApolloClient({
  clientState: {
    defaults: {
      auth: {
        __typename: "Auth",
        isLoggedIn: Boolean(localStorage.getItem("jwt"))
      }
    },
    resolvers: {
      Mutation: {
        logUserIn: (_, { token }, { cache }) => {
          localStorage.setItem("jwt", token);
          cache.writeData({
            data: {
              auth: {
                __typename: "Auth",
                isLoggedIn: true
              }
            }
          });
          return null;
        },
        logUserOut: (_, __, { cache }) => {
          localStorage.removeItem("jwt");
          cache.writeData({
            data: {
              __typename: "Auth",
              isLoggedIn: false
            }
          });
          return null;
        }
      }
    }
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        "X-JWT": localStorage.getItem("jwt") || ""
      }
    });
  },
  uri: "http://localhost:4000/graphql"
});
export default apolloClient;

// clientState 하위에 resolvers를 정의한다.
// resolvers안에서는 localStorage와 cache를 각각 사용하는데,
//  localStoage가 하드디스크 같은 저장소면 cache는 앱이 사용하는 램 같은 거라는 생각이 들었다.
//   실제로 앱에서 사용하는 값은 cache 값이다.
