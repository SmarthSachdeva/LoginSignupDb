Sure, here's the updated `README.md` file for the "Login Signup Page with Database" project without the license and acknowledgements:

# Login Signup Page with Database

## Project Description

The Login Signup Page with Database is a web application built using Node.js and Express.js. The main objective of this project is to create a custom registration form that collects user data, such as name, email, password, and phone number. The form data is then processed, validated, and securely stored in a MongoDB database.

## Features

- User registration: Users can sign up for an account by providing their name, email, password, and phone number.
- Data validation: The application ensures that the provided user data is valid and meets the required criteria before storing it in the database.
- Secure password storage: User passwords are encrypted using a hashing mechanism before being stored in the database, enhancing security.
- MongoDB integration: The application uses MongoDB as the database to persist user information.

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository to your local machine or download the project files as a zip.
2. Install the project dependencies by running the following command in the project directory:

```bash
npm install
```

3. Make sure your MongoDB server is up and running.
4. Create a `.env` file in the project root directory and add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key_for_password_hashing
```

Replace `your_mongodb_connection_string` with the connection string for your MongoDB database and `your_secret_key_for_password_hashing` with a strong secret key for password hashing.

5. Start the application by running the following command:

```bash
npm start
```

6. The application should now be running on `http://localhost:3000`. Open your web browser and visit this URL to access the Login Signup page.

## Usage

### Registration

1. Open the web application in your browser.
2. Click on the "Sign Up" button to access the registration form.
3. Fill out the form with your name, email, password, and phone number.
4. Click the "Register" button to submit the form.

### Login

1. If you already have an account, click on the "Login" button on the homepage.
2. Enter your registered email and password.
3. Click the "Login" button to access your account.

### Data Storage

- User registration data, including name, email, password (hashed), and phone number, will be stored securely in the MongoDB database.

## Contribution

Contributions to the Login Signup Page with Database project are welcome! If you find any issues, have suggestions for new features, or want to improve the code, feel free to submit an issue or create a pull request.

## Contact

If you have any questions, suggestions, or feedback, you can reach out to the project maintainer:

- Name: Smarth Sachdeva
- Email: smarthsachdeva2108@gmail.com

---

Thank you for using the Login Signup Page with Database application! We hope it provides a secure and seamless user registration experience. Happy coding!
