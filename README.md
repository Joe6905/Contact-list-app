# Simple Contact List App

A **Simple Contact List** application built using **React** for the frontend and **Node.js** with **Express** for the backend. This app allows users to create, read, and delete contacts, with form validation to ensure proper email format.

## Features
- Add new contacts with name and email.
- Validate email format (`@gmail.com` requirement).
- Delete existing contacts.
- Modern UI with a **hacker theme** using **CSS Flexbox** and **Google Fonts**.

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: (Optional, can be extended to use MongoDB or another DB)
- **HTTP Client**: Axios
- **Styling**: CSS (Custom hacker theme)

## Demo

[![App Screenshot](https://i.ibb.co/gJWhKfT/Screenshot-120.png)](https://ibb.co/cQ8VnZF)

## Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/Joe6905/simple-contact-list-app.git
   cd simple-contact-list-app
Backend Setup:

Navigate to the backend folder (or root if combined) and install the required dependencies.

bash
Copy code
npm install
Frontend Setup:

If you are using a separate folder for React (like client/):

bash
Copy code
cd client
npm install
Run Backend Server:

Start the Express server:

bash
Copy code
npm start
The backend will run at http://localhost:5000.

Run Frontend:

Start the React development server:

bash
Copy code
cd client
npm start
The frontend will run at http://localhost:3000.

The backend and frontend should both be running simultaneously. Visit the app at http://localhost:3000.

API Endpoints
Base URL: http://localhost:5000/api/contacts
GET /: Retrieve all contacts.
POST /: Add a new contact (name and email).
DELETE /:id: Delete a contact by ID.
Example .env file
Create an .env file in the root folder for environment variables like port number (optional).

env
Copy code
PORT=5000
Usage
1. Adding a Contact:
Enter a name and email (only @gmail.com emails are allowed).
Click "Add Contact" to save it to the contact list.
2. Deleting a Contact:
Click the Delete button next to any contact to remove it from the list.
File Structure
bash
Copy code
/backend
    ├── /routes
    ├── /controllers
    ├── server.js
/client
    ├── /public
    ├── /src
        ├── /components
        ├── App.js
        ├── index.js
    ├── package.json
    ├── ContactList.css
Validation
The app performs email validation to ensure emails end with @gmail.com.
Empty fields are also prevented by the input validation logic.
Future Improvements
Database integration: Add a MongoDB or SQL database to persist contacts.
Authentication: Allow users to log in and manage their personal contacts.
Edit Functionality: Allow users to edit existing contacts.
Screenshots
Main UI (Hacker Theme):


Contributing
Contributions, issues, and feature requests are welcome!

Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.
License
This project is licensed under the MIT License.

Contact
GitHub: Joe6905
Email: jothishmjk.2405@gmail.com
