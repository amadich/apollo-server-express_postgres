import { gql } from "apollo-server-express";

export const taskTypeDefs = gql`

   type Task {
       id: ID!
       title: String!
       description: String!
       completed: Boolean!
   }


   type Query {
         getTask(id: ID!): Task
         getTasks: [Task]
   }

`; 