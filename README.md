#  Fitness / Gym Web Application (Final Project)

##  Project Overview

This project is a full-stack Fitness / Gym web application developed as a final project.  
The backend is built using Node.js and Express.js, with MongoDB as the database.

The application allows users to:
- Register and log in securely
- Manage personal workout plans
- Store fitness data in a database
- Access protected resources using JWT authentication
- Fetch exercise data from an external fitness API

A simple frontend is included to demonstrate real interaction with the backend API.

---

## Technologies Used

Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Joi
- Axios

Frontend:
- HTML
- CSS
- JavaScript

---

##  Project Structure

fitness-backend/
├── config/db.js
├── controllers/
│ ├── authController.js
│ ├── userController.js
│ ├── workoutController.js
│ └── externalApiController.js
├── middleware/
│ ├── authMiddleware.js
│ └── errorMiddleware.js
├── models/
│ ├── User.js
│ └── Workout.js
├── routes/
│ ├── authRoutes.js
│ ├── userRoutes.js
│ ├── workoutRoutes.js
│ └── externalApiRoutes.js
├── validators/
│ └── authValidator.js
├── frontend/
│ ├── index.html
│ ├── dashboard.html
│ ├── style.css
│ └── script.js
├── .env
├── server.js
├── package.json
└── README.md


1. Clone the repository:
git clone <repository-url>
cd fitness-backend


2. Install dependencies:
npm install


3. Create a `.env` file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


4. Run the backend server:
node server js


Backend runs at:
http://localhost:5000


---

##  Authentication & Security

- Passwords are hashed using bcrypt
- JWT is used for authentication
- Private routes are protected using middleware
- JWT is sent in headers as:
Authorization: Bearer <token>


---

##  API Endpoints

### Authentication (Public)
- POST `/api/auth/register` – Register a new user
- POST `/api/auth/login` – Login user

### User (Private)
- GET `/api/users/profile` – Get user profile
- PUT `/api/users/profile` – Update user profile

### Workout Resource (Private CRUD)
- POST `/api/workouts` – Create workout
- GET `/api/workouts` – Get all workouts
- GET `/api/workouts/:id` – Get workout by ID
- PUT `/api/workouts/:id` – Update workout
- DELETE `/api/workouts/:id` – Delete workout

---

##  External API Integration

- GET `/api/external/exercises/:muscle`

This endpoint fetches exercise data from an external fitness API using Axios.  
It demonstrates integration with third-party services.

---

##  Validation & Error Handling

- Joi is used to validate user input (email, password, name)
- Proper HTTP status codes are returned (400, 401, 404)
- A global error-handling middleware is implemented

---

##  Frontend

A simple frontend is included to demonstrate functionality:
- User registration and login
- JWT stored in localStorage
- Workout creation and listing

Frontend runs via Live Server:
http://localhost:5500/index.html


---

##  Deployment

The backend application is ready for deployment on:
- Render
- Railway
- Replit

All sensitive data is stored in environment variables.

---

##  Defence Explanation (What to Say)

**Project summary:**
> This project is a fitness management system built with Node.js, Express, and MongoDB.  
> It includes secure authentication, protected routes, full CRUD functionality, and external API integration.

**Why MongoDB?**
> MongoDB is flexible, scalable, and works well with JavaScript-based applications.

**Why JWT?**
> JWT allows secure stateless authentication and protects private routes.

**How is security handled?**
> Passwords are hashed with bcrypt, JWT is verified using middleware, and sensitive data is stored in environment variables.

**How validation is implemented?**
> Joi validators ensure only valid data reaches the controllers.

**External API usage:**
> An external fitness API is integrated to fetch exercise data dynamically.

---

##  Conclusion

This project demonstrates:
- RESTful API design
- Secure authentication and authorization
- MongoDB data modeling with Mongoose
- Validation and error handling
- External API integration
- Full interaction between frontend and backend

The project fully satisfies all final project requirements.