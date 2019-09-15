import {gql} from "apollo-boost";


export const IS_LOGGED_IN = gql`
    {
        auth {
            isLoggedIn @client
        }
    }
`;

// apollo(graphql)로 데이터를 가져온다.

