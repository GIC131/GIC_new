# GetInterviewConfidence - Full-Stack Web Application

A comprehensive web platform for GetInterviewConfidence, designed to provide career counseling resources, job placement assistance, and dynamic content management for administrators. This project was built from the ground up using the MERN stack with a Next.js frontend for optimal performance and SEO.

**Live Site:** [https://www.getinterviewconfidence.com](https://www.getinterviewconfidence.com)

---

## Features

-   **User Authentication:** Secure JWT-based authentication with three distinct user roles: User, Admin, and Super Admin.
-   **Admin Dashboard:** A protected, role-based dashboard for site management.
-   **Dynamic Media Gallery:** Admins can upload, view, and delete images and videos, which are dynamically displayed on the public site.
-   **Dynamic Content Management:** Admins can add, view, and delete interview questions.
-   **Resource Pages:** SEO-optimized pages for Resume Building, Interview Questions, and Contact information.
-   **Contact Form Integration:** Seamlessly integrated with Formspree for reliable message delivery.
-   **Modern & Responsive UI:** A unique, dark-themed user interface built with Tailwind CSS, fully responsive across all devices.
-   **SEO Optimized:** Built with Next.js for server-side rendering, featuring rich metadata, schema markup, and performance best practices.

## Tech Stack

-   **Frontend:** Next.js, React, Tailwind CSS, Axios
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB with Mongoose
-   **Authentication:** JSON Web Tokens (JWT), bcryptjs
-   **Deployment:** Hostinger VPS, Nginx, PM2

---

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing.

### Prerequisites

You must have the following software installed:
-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)
-   [Git](https://git-scm.com/)
-   A MongoDB database (a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster is recommended)

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
cd your-repository-name
```

### 2. Backend Setup

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create an environment file:** Create a new file named `.env` in the `server` directory.
4.  **Add environment variables:** Open the `.env` file and add your secret keys.
    ```env
    MONGO_URI=your_mongodb_atlas_connection_string
    JWT_SECRET=your_super_secret_key_for_jwt
    ```

### 3. Frontend Setup

1.  **Navigate to the client directory from the root:**
    ```bash
    cd client
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create an environment file:** Create a new file named `.env.local` in the `client` directory.
4.  **Add environment variables:** Open the `.env.local` file and add the URL for your local backend server.
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```

### 4. Running the Application

You need to run both the backend and frontend servers simultaneously in two separate terminals.

-   **To run the backend server:**
    ```bash
    # From the /server directory
    npm run dev
    ```
    *(The backend will be running on `http://localhost:5000`)*

-   **To run the frontend server:**
    ```bash
    # From the /client directory
    npm run dev
    ```
    *(The frontend will be running on `http://localhost:3000`)*

---

## Deployment

This application is configured for deployment on a Linux VPS (like Hostinger) using Nginx as a reverse proxy and PM2 as a process manager.

-   The backend (API) runs on port `5000`.
-   The frontend (Next.js app) runs on port `3000`.
-   Nginx listens on port `80` and routes traffic to the appropriate application:
    -   Requests to `/api/*` are forwarded to the backend.
    -   All other requests are forwarded to the frontend.

## FOUNDER
-   **AYUSHE MANDAL**
- LinkedIn: linkedin.com/in/ayushe-mandal-989a1a278

## Author

-   **ABHIDEEP BONIGALA**
-   LinkedIn: linkedin.com/in/abhideepb
