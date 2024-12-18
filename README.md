# User Registration Backend Project
This is a backend project built with Express.js and MongoDB for user registration and authentication. It includes APIs for user registration, login, authentication, and basic CRUD operations for user profiles.
## Features
- User Registration API
- User Login API
- JWT Token Authentication with cookies
- Single Profile Read API
- All Profiles Read API
- Profile Update API
- Profile Delete API
## Prerequisites
Make sure you have the following installed:
- Node.js (v14 or above)
- MongoDB (local or Atlas cluster)
- Postman (for testing the APIs)
## Installation Steps

1. Clone the Repository
```bash
git clone https://github.com/siddiqua14/User_Api.git
cd User_Api
```
2. Install Dependencies
```bash
npm install
```

3. Setup Environment Variables
Create a .env file in the root of the project and add the following:
```bash
PORT=8000
MONGO_URI=mongodb://localhost:27017/user_registration_db
JWT_SECRET=your_jwt_secret
```

4. Start MongoDB Server
Make sure MongoDB is running locally or configure the connection string in .env for a remote database (e.g., MongoDB Atlas).

5. Run the Server
```bash
npm run dev
```
Additionally, export the Postman collection (JSON file) to see the endpoints working properly. 

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication