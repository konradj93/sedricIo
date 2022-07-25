import { gql } from '@apollo/client';

export const LIST_POKEMONS = gql`
  query listPokemons($first: Int, $last: Int, $type: String, $after: String, $before: String) {
    pokemons(first: $first, last: $last, type: $type, after: $after, before: $before) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          name
          types

          hp
          attack
          defense
          speed
          specialAttack
          specialDefense

          image
          sprite
        }
        cursor
      }
    }
  }
`;
