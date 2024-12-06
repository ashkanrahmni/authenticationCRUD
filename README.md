#Auth Crud
CRUD Project with Redis and MongoDB
This project demonstrates how to build a basic CRUD (Create, Read, Update, Delete) application with Node.js, utilizing Redis for caching and MongoDB for persistent storage.

Prerequisites
Before running the application, make sure you have the following installed:

Node.js (v14 or higher)
MongoDB (or access to a MongoDB instance)
Redis (or access to a Redis server)
Getting Started
Follow these steps to set up and run the application:

1. Clone the Repository
Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/ashkanrahmni/authenticationCRUD.git
cd crud-redis-mongo
2. Install Dependencies
Run the following command to install the necessary dependencies:

bash
Copy code
<code>npm install</code>
This will install all the dependencies listed in package.json, including MongoDB and Redis clients.

3. Configure Environment Variables
Create a .env file in the root of the project and set the following environment variables:

plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/crud-db
REDIS_HOST=localhost
REDIS_PORT=6379
PORT=3000
MONGO_URI – MongoDB connection string (default: mongodb://localhost:27017/crud-db).
REDIS_HOST – Redis server host (default: localhost).
REDIS_PORT – Redis server port (default: 6379).
PORT – Port where the application will run (default: 3000).
bash
Copy code
<code>npm run dev</code>
This will start the server on the port specified in your .env file (default: 3000).

Production Mode
To run the application in production mode, use the following command:

bash
Copy code
<code>npm start</code>

8. MongoDB Database
MongoDB stores all the data persistently. The application uses the Mongoose ORM to interact with MongoDB.

