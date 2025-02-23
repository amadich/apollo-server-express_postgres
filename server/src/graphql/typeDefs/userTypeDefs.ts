import { gql } from "apollo-server-express";

export const userTypeDefs = gql`
  type User {
    id: ID!         # Old integer id
    new_id: ID!     # New UUID id
    username: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input UserUpdateInput {
    id: ID!
    new_id: ID      # Optional, to update UUID if necessary
    username: String
    email: String
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(UserInput: UserInput!): User!
    updateUser(UserInput: UserUpdateInput!): User!
    deleteUser(id: ID!): Boolean!
  }
`;
