import { makeExecutableSchema } from "@graphql-tools/schema";
import { userTypeDefs } from "./typeDefs/userTypeDefs";
import { userResolvers } from "./resolvers/userResolver";

import { taskTypeDefs } from "./typeDefs/taskTypeDefs";
import { taskResolvers } from "./resolvers/taskResolver";

export const schema = makeExecutableSchema({
  typeDefs: [userTypeDefs , taskTypeDefs],
  resolvers: [userResolvers , taskResolvers],
});
