import { gql } from '@apollo/client';

export const LIST_TYPES = gql`
  query listTypes {
    types {
      edges {
        node {
          type
        }
      }
    }
  }
`;
