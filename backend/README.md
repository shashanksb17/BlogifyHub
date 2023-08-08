
# BlogifyHub Backend

This is the backend application for BlogifyHub, a platform for creating and managing blog posts.

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using the command:
 ```
   npm install
 ```
3. Create a `.env` file in the root directory with the necessary environment variables (e.g., DATABASE_URL, JWT_SECRET).

## Usage

Run the backend server using the command:
```
npm run server
```

The server will start on the specified port (default: 6000).

## Technologies Used

- **Node.js**: A JavaScript runtime used for building the server-side logic.
- **Express.js**: A web application framework for creating APIs and handling routes.
- **bcrypt**: Library for hashing passwords securely.
- **jsonwebtoken**: Library for creating and verifying JSON Web Tokens (JWT) for user authentication.
- **mysql2**: MySQL database driver for Node.js.
- **dotenv**: Library for loading environment variables from a `.env` file.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **MySQL**: Relational database for storing application data.

## API Endpoints

| Method | Endpoint           | Description                            |
| ------ | ------------------ | -------------------------------------- |
| GET    | `/`                | Home route                            |
| POST   | `/register`        | Register a new user                   |
| POST   | `/login`           | User login                            |
| POST   | `/post`            | Create a new blog post                |
| GET    | `/post`            | Fetch all blog posts                  |
| GET    | `/post/:id`        | Fetch a specific blog post by ID      |
| PUT    | `/post/:id`        | Update a blog post                    |
| DELETE | `/post/:id`        | Delete a blog post                    |

## Environment Variables

Create a `.env` file in the root directory and set the following variables:

- `DATABASE_URL`: MySQL database connection URL
- `JWT_SECRET`: Secret key for JWT token generation

## Authentication

- User registration and login endpoints require sending data in JSON format.
- User login returns a JWT token for authenticated routes.
- Use the `verifyUserToken` middleware for routes that require authentication.

## Error Handling

Error messages and status codes are returned for appropriate error situations.


## Contributors

- [shashanksb17](https://github.com/shashanksb17)

