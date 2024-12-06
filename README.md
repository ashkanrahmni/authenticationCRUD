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
npm install
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
4. Run the Application
After the dependencies are installed and environment variables are configured, you can start the application:

Development Mode
To run the application in development mode (with hot-reloading), use the following command:

bash
Copy code
npm run dev
This will start the server on the port specified in your .env file (default: 3000).

Production Mode
To run the application in production mode, use the following command:

bash
Copy code
npm start
5. Accessing the Application
Once the app is running, you can access the CRUD API through:

bash
Copy code
http://localhost:3000/api
6. API Endpoints
Create (POST): /api/items – Create a new item.
Read (GET): /api/items – Get all items.
Read (GET): /api/items/:id – Get a specific item by its ID.
Update (PUT): /api/items/:id – Update an item by its ID.
Delete (DELETE): /api/items/:id – Delete an item by its ID.
7. Redis Caching
The application uses Redis to cache the results of GET requests for better performance. For example, fetching all items or a single item will first check the Redis cache. If the data is found, it will be returned from Redis; otherwise, it will be fetched from MongoDB and then cached for future requests.

8. MongoDB Database
MongoDB stores all the data persistently. The application uses the Mongoose ORM to interact with MongoDB.

9. Testing the Application
You can use tools like Postman or cURL to test the API endpoints.

