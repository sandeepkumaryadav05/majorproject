# 🌍 WonderLust

> A full-stack Airbnb-inspired accommodation booking platform built with
> **Node.js, Express.js, MongoDB, EJS, Passport.js, Cloudinary, and
> Bootstrap**.

```{=html}
<p align="center">
```
`<a href="https://majorproject-7z8l.onrender.com/listings">`{=html}🚀
Live Demo`</a>`{=html} •
`<a href="https://github.com/sandeepkumaryadav05/majorproject">`{=html}💻
Repository`</a>`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

# 📖 Overview

WonderLust is a full-stack web application where users can browse,
create, edit and manage travel accommodation listings. Registered users
can upload listing images, write reviews, and securely authenticate
using Passport.js.

------------------------------------------------------------------------

# ✨ Features

-   🔐 User Authentication (Signup/Login/Logout)
-   🏠 CRUD Operations for Listings
-   ⭐ Ratings & Reviews
-   ☁️ Cloudinary Image Upload
-   📍 Location-based Listings
-   🛡️ Server-side Validation (Joi)
-   💾 MongoDB Database
-   📱 Responsive UI using Bootstrap
-   ⚡ MVC Architecture

------------------------------------------------------------------------

# 🛠 Tech Stack

  Frontend    Backend      Database        Authentication    Deployment
  ----------- ------------ --------------- ----------------- ------------
  HTML5       Node.js      MongoDB         Passport.js       Render
  CSS3        Express.js   Mongoose        Express Session   Cloudinary
  Bootstrap   EJS          MongoDB Atlas   Passport Local    GitHub

------------------------------------------------------------------------

# 🚀 Live Demo

https://majorproject-7z8l.onrender.com/listings

# 💻 GitHub

https://github.com/sandeepkumaryadav05/majorproject

------------------------------------------------------------------------

# 🏗 System Architecture

``` mermaid
graph TD
A[Browser]
B[Express Server]
C[Routes]
D[Controllers]
E[Models]
F[(MongoDB)]
G[Cloudinary]
H[EJS Views]

A -->|HTTP| B
B --> C
C --> D
D --> E
E --> F
D --> G
D --> H
H --> A
```

# 🏗 MVC Architecture

``` mermaid
graph LR
User --> Routes --> Controllers --> Models --> MongoDB
Controllers --> Views
Views --> User
```

# 🗄 ER Diagram

``` mermaid
erDiagram

USER ||--o{ LISTING : owns
USER ||--o{ REVIEW : writes
LISTING ||--o{ REVIEW : contains

USER {
ObjectId id
string username
string email
string password
}

LISTING {
ObjectId id
string title
string description
number price
string location
string country
string image
ObjectId owner
}

REVIEW {
ObjectId id
number rating
string comment
ObjectId author
ObjectId listing
}
```

# 🔐 Authentication Flow

``` mermaid
flowchart TD
A[Signup/Login]
-->B[Passport.js]
B-->C{Valid Credentials?}
C--Yes-->D[Create Session]
D-->E[Dashboard]
C--No-->F[Error Message]
```

# 🌐 Request Lifecycle

``` mermaid
sequenceDiagram
User->>Browser: Visit Listings
Browser->>Express: GET /listings
Express->>Controller: Route
Controller->>MongoDB: Fetch Data
MongoDB-->>Controller: Listings
Controller-->>Browser: Render EJS
Browser-->>User: Display Listings
```

# 🚀 Deployment Architecture

``` mermaid
graph TD
Developer-->GitHub
GitHub-->Render
Render-->MongoDBAtlas
Render-->Cloudinary
Users-->Render
```

# 📂 Folder Structure

``` text
majorproject/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── middleware.js
├── utils/
├── init/
├── app.js
├── package.json
└── README.md
```

# ⚙️ Installation

``` bash
git clone https://github.com/sandeepkumaryadav05/majorproject.git
cd majorproject
npm install
```

Create `.env`

``` env
ATLASDB_URL=your_mongodb_uri
SECRET=your_secret
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_key
CLOUD_API_SECRET=your_secret
```

Run:

``` bash
npm start
```

Open:

    http://localhost:8080

# 📸 Screenshots

Add screenshots for:

-   Home Page
-   Listings
-   Listing Details
-   Login
-   Signup
-   Add Listing
-   Reviews

# 🎯 Learning Outcomes

-   MVC Architecture
-   REST APIs
-   CRUD Operations
-   Authentication
-   Session Management
-   Image Upload
-   MongoDB Relationships
-   Cloud Deployment
-   Error Handling
-   Responsive Design

# 🔮 Future Enhancements

-   Payment Gateway
-   Wishlist
-   Booking System
-   Google Maps Integration
-   Search & Filters
-   Email Verification
-   Forgot Password
-   Admin Dashboard

# 👨‍💻 Author

**Sandeep Kumar Yadav**

-   GitHub: https://github.com/sandeepkumaryadav05
-   LinkedIn: https://www.linkedin.com/in/sandeepkumaryadav05/

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub.

# 📄 License

This project is for educational and portfolio purposes.
