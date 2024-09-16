# Fruit.ai

## Project Description

Fruit.ai is a health management application designed to provide users with information about various fruits, including FAQs, a translation service, and a chatbot for interactive support. The application is built using a combination of React for the frontend and Express.js with MongoDB for the backend.

## Features

- **Login Page**: User authentication and redirection to the home page.
- **Home Page**: Central hub for accessing services including the chatbot, translator, FAQ page, and about page.
- **Chatbot Page**: An interactive chatbot that provides information about fruits.
- **Translator Page**: A translation service for converting text into regional languages.
- **FAQ Page**: A page displaying frequently asked questions related to fruits with CRUD functionality.
- **About Page**: Information about the Fruit.ai project and its creators.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- MongoDB (for local development or a MongoDB Atlas account)

### Installation

#### Backend

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Ayushgoyal0803/fruit.ai.git
    ```

2. **Navigate to the backend directory**:

    ```bash
    cd fruit-ai-backend
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Create a `.env` file** in the `fruit-ai-backend` directory and add your MongoDB connection string:

    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

5. **Run the server**:

    ```bash
    npm start
    ```

#### Frontend

1. **Navigate to the frontend directory**:

    ```bash
    cd fruit-ai-frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm start
    ```

4. **Open your browser** and go to `http://localhost:3000` to view the application.

## Usage

- **Login**: Use the provided dummy UserId and Password to log in.
- **Home Page**: Access the chatbot, translator, FAQ, and about pages.
- **Chatbot**: Interact with the chatbot to get information about different fruits.
- **Translator**: Enter text and choose a language to see the translated result.
- **FAQ Page**: View, add, update, or delete FAQs related to fruits.
- **About Page**: Learn more about the Fruit.ai project.

## API Endpoints

- **GET /api/faqs**: Fetch all FAQs
- **GET /api/faqs/:id**: Fetch a single FAQ by ID
- **POST /api/faqs**: Create a new FAQ
- **PUT /api/faqs/:id**: Update an FAQ by ID
- **DELETE /api/faqs/:id**: Delete an FAQ by ID



