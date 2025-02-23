import Task from "../../models/taskModel";

export const taskResolvers = {

   Query: {
      getTask: async (_: any, { id }: { id: string }) => {
         return await Task.findByPk(id);
      },
      getTasks: async () => {
         return await Task.findAll();
      },
   },

   Mutation: {
   },

};