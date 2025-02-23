import User from "../../models/userModel";

export const userResolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await User.findByPk(id);
    },
    getUsers: async () => {
      const users = await User.findAll();
      // Convert timestamps to ISO format
      return users.map(user => ({
        ...user.toJSON(),
        createdAt: new Date(user.createdAt).toISOString(),
        updatedAt: new Date(user.updatedAt).toISOString(),
      }));
    },
  },
  Mutation: {
    createUser: async (_: any, { UserInput }: {UserInput : { username: string; email: string; password: string}}) => {
      const { username, email, password } = UserInput;
      return await User.create({ username, email , password });
    },
    updateUser: async (_: any, { UserInput }: {UserInput : { id: string; username?: string; email?: string }}) => {
      const { id, username, email } = UserInput;
      const user = await User.findByPk(id);
      if (!user) throw new Error("User not found");
      if (username) user.username = username;
      if (email) user.email = email;
      await user.save();
      return user;
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      const user = await User.findByPk(id);
      if (!user) return false;
      await user.destroy();
      return true;
    },
  },
};
