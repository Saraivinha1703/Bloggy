import { gql } from 'urql';

export const GET_POSTS = gql`
  query Query {
    posts {
      title
      content {
        raw
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;
