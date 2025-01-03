# Task Manager API

A simple Task Manager application built using Django REST Framework. This application allows users to create, view, update, and delete tasks. It features user authentication for secure access.

## Features

- User Authentication: Secure login and registration.
- Task Management: Create, view, update, and delete tasks.
- RESTful API: Access task functionality via API endpoints.

## Technologies

- Python
- Django
- Django REST Framework
- SQLite (for database)
- HTML
- CSS
- JavaScript

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/saurav-tamta-sharma/Django-TaskManager.git
   cd Django-blog

2. **Create and activate a virtual environment:**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install the required packages:**

    ```bash
    pip install -r requirements.txt

4. **Apply migrations:**

    ```bash
    python manage.py migrate

5. **Create a superuser**
    ```bash
    python manage.py createsuperuser

6. **Run the development server:**

    ```bash
    python manage.py runserver

7. **Access the application:** Open your web browser and go to http://127.0.0.1:8000/.


## API Endpoints

- **POST** `/api/token/` - Obtain authentication tokens.
- **GET** `/api/tasks/` - Retrieve all tasks.
- **POST** `/api/tasks/` - Create a new task.
- **GET** `/api/tasks/<int:pk>/` - Retrieve a specific task.
- **PUT** `/api/tasks/<int:pk>/` - Update a specific task.
- **DELETE** `/api/tasks/<int:pk>/` - Delete a specific task.

## Frontend
The application includes a simple frontend for interacting with the API. You can create and view tasks through the web interface.