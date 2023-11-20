import { gql } from 'urql';

export const GET_POSTS = gql`
  query Query {
    posts {
      id
      title
      content {
        raw
      }
      author {
        id
        name
        avatar {
          url
        }
      }
    }
  }
`;
