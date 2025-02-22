
![Screenshot_20250223_003115](https://github.com/user-attachments/assets/9a3f7a30-dca9-4de8-ba6b-d83365fe2811)

```markdown
# Backpack - User Management API

Backpack is a User Management API built with **Node.js**, **Express**, **Sequelize**, and **PostgreSQL**. It allows you to manage users with functionalities like creating users and fetching user details.

## Tech Stack

- **Node.js** (with TypeScript)
- **Express** (Web Framework)
- **PostgreSQL** (Database)
- **Sequelize** (ORM)
- **GraphQL** (API query language)

## Features

- Create new users
- Fetch users by their ID or list all users
- Input validation (ensure required fields are provided)
- Password handling (with default values, can be extended to use hashing like bcrypt)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [PostgreSQL](https://www.postgresql.org/) running locally or on a remote server
- [Yarn](https://yarnpkg.com/) (optional, but recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/backpack.git
   cd backpack
   ```

2. Install dependencies:

   Using **Yarn**:

   ```bash
   yarn install
   ```

   Or using **npm**:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the project and add the following environment variables:

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your-postgres-user
   DB_PASSWORD=your-postgres-password
   DB_NAME=backpack
   ```

   You can change the values based on your PostgreSQL setup.

4. **Start the PostgreSQL database** if it is not already running.

### Running the Server

Once your environment is set up, you can run the server using the following command:

```bash
yarn dev
```

Or with **npm**:

```bash
npm run dev
```

This will start the server and you can access it at `http://localhost:4000` (default).

### Running Migrations (Optional)

If you need to run database migrations, you can use Sequelize CLI to handle that.

1. Install Sequelize CLI globally (if not already installed):

   ```bash
   npm install -g sequelize-cli
   ```

2. Run migrations to create tables in the database:

   ```bash
   sequelize db:migrate
   ```

### Testing the API

You can now test your API using **GraphQL**.

Here are some sample GraphQL queries:

1. **Create a new user:**

   ```graphql
   mutation {
     createUser(UserInput: { username: "newuser", email: "newuser@example.com", password: "securepassword" }) {
       id
       username
       email
     }
   }
   ```

2. **Fetch all users:**

   ```graphql
   query {
     getUsers {
       id
       username
       email
     }
   }
   ```

3. **Fetch a user by ID:**

   ```graphql
   query {
     getUser(id: "1") {
       id
       username
       email
     }
   }
   ```

### Folder Structure

```plaintext
backpack/
├── src/
│   ├── resolvers/
│   ├── models/
│   ├── server.ts
├── migrations/
├── .env
├── package.json
├── tsconfig.json
├── README.md
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out with any questions or feedback. Enjoy using the Backpack API!

```
