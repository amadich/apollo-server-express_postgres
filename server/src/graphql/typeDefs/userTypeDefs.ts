import { gql } from "apollo-server-express";

export const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(UserInput: UserInput!): User!
    # updateUser(id: ID!, username: String, email: String): User!
    # deleteUser(id: ID!): Boolean!
  }
`;
