import { gql } from 'urql';

export const GET_USER = gql`
  query Author($id: ID!) {
    author(where: { id: $id }) {
      name
      avatar {
        url
      }
    }
  }
`;
