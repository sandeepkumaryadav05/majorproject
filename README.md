
# 🌍 WonderLust

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Framework-black?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Bootstrap-Frontend-7952B3?logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-blue" />
</p>

<h3 align="center">An Airbnb-inspired Full Stack Accommodation Booking Platform</h3>

<p align="center">
<a href="https://majorproject-7z8l.onrender.com/listings"><strong>🚀 Live Demo</strong></a> •
<a href="https://github.com/sandeepkumaryadav05/majorproject"><strong>💻 Repository</strong></a>
</p>

---

# ✨ About

WonderLust is a production-style full-stack web application inspired by Airbnb. Users can browse properties, create listings, upload images, authenticate securely, and review accommodations. The project follows the MVC architecture and demonstrates modern backend development practices.

---

# ✨ Features

- 🔐 Authentication & Authorization
- 🏠 Property Listing Management (CRUD)
- ☁️ Cloudinary Image Upload
- ⭐ Ratings & Reviews
- 📍 Location Details
- 🛡️ Joi Validation
- 📱 Responsive Bootstrap UI
- ⚡ Session Management
- 🧩 MVC Architecture
- 🌐 RESTful Routing

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | HTML5, CSS3, Bootstrap, JavaScript, EJS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | Passport.js, Express Session |
| Cloud | Cloudinary |
| Deployment | Render |

---

# 🏛 Project Architecture

```mermaid
graph TD
User --> Browser
Browser --> Express
Express --> Routes
Routes --> Controllers
Controllers --> Models
Models --> MongoDB[(MongoDB Atlas)]
Controllers --> Cloudinary
Controllers --> EJS
EJS --> Browser
```

# 🏗 MVC Flow

```mermaid
graph LR
User-->Routes-->Controller-->Model-->MongoDB
Controller-->View
View-->User
```

# 🗄 ER Diagram

```mermaid
erDiagram
USER ||--o{ LISTING : owns
USER ||--o{ REVIEW : writes
LISTING ||--o{ REVIEW : contains

USER {
 string username
 string email
 string password
}
LISTING {
 string title
 string description
 number price
 string location
 string country
 string image
}
REVIEW {
 number rating
 string comment
}
```

# 🔐 Authentication Flow

```mermaid
flowchart TD
A[User Login]
-->B[Passport Local]
B-->C{Valid?}
C--Yes-->D[Create Session]
D-->E[Dashboard]
C--No-->F[Error]
```

# 🌐 Request Lifecycle

```mermaid
sequenceDiagram
User->>Browser: Open Listings
Browser->>Express: GET /listings
Express->>Controller: Route
Controller->>MongoDB: Query
MongoDB-->>Controller: Data
Controller-->>Browser: Render EJS
Browser-->>User: Display Page
```

# 🚀 Deployment

```mermaid
graph LR
Developer-->GitHub
GitHub-->Render
Render-->MongoDB
Render-->Cloudinary
Users-->Render
```

# 📂 Folder Structure

```text
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
└── package.json
```

# ⚙ Installation

```bash
git clone https://github.com/sandeepkumaryadav05/majorproject.git
cd majorproject
npm install
```

Create a `.env` file:

```env
ATLASDB_URL=
SECRET=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

Run:

```bash
npm start
```

---

# 📸 Screenshots

Replace these placeholders after uploading images.

| Home | Listing |
|------|---------|
| ![](screenshots/home.png) | ![](screenshots/listing.png) |

| Login | Create Listing |
|------|----------------|
| ![](screenshots/login.png) | ![](screenshots/create.png) |

---

# 🎯 Learning Outcomes

- MVC Architecture
- REST APIs
- CRUD Operations
- Authentication
- MongoDB Relationships
- Cloudinary Integration
- Session Management
- Deployment on Render

---

# 🔮 Future Enhancements

- 💳 Payment Gateway
- ❤️ Wishlist
- 🗺 Google Maps
- 🔍 Advanced Search
- 📅 Booking Calendar
- 📧 Email Verification
- 👤 User Profiles
- 🛠 Admin Dashboard

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the repository and submit a pull request.

---

# 👨‍💻 Author

**Sandeep Kumar Yadav**

- GitHub: https://github.com/sandeepkumaryadav05
- LinkedIn: https://www.linkedin.com/in/sandeepkumaryadav05/

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.
