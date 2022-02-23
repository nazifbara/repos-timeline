import { gql } from '@apollo/client'

export const GET_TIMELINE = gql`
  query GetTimeline($username: String!) {
    user(login: $username) {
      name
      login
      avatarUrl
    }
    repositoryOwner(login: $username) {
      repositories(orderBy: { field: CREATED_AT, direction: DESC }, first: 100) {
        edges {
          node {
            id
            name
            description
            isFork
            stargazerCount
            createdAt
          }
        }
      }
    }
  }
`
