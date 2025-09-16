
# Mini Blogging Platform

A simple blogging platform built with FastAPI (backend) and React (frontend).  
Users can create blog posts (with title + content) and view all posts. Content supports **Markdown formatting**.

---

## 📂 Project Structure

```

blogging-platform/
│── backend/          # FastAPI backend
│   ├─ main.py
│   ├─ blog.db        # SQLite database
│   └─ venv/          # Python virtual environment
│── frontend/         # React frontend
│   ├─ src/
│   └─ package.json
│── .gitignore
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Backend
1. Open terminal inside `backend/` folder
2. Create virtual environment (if not already):
```powershell
python -m venv venv
.\venv\Scripts\activate   # Windows
# source venv/bin/activate  # Linux/Mac
````

3. Install dependencies:

```powershell
pip install fastapi uvicorn sqlalchemy markdown2
```

4. Run backend server:

```powershell
uvicorn main:app --reload --port 8000
```

* Backend API will be available at: `http://127.0.0.1:8000`
* Interactive docs: `http://127.0.0.1:8000/docs`

---

### 2. Frontend

1. Open terminal inside `frontend/` folder
2. Install dependencies:

```powershell
npm install
```

3. Run frontend:

```powershell
npm start
```

* Frontend will run at: `http://localhost:3000`

---

## 📝 Features Implemented

* Create blog posts (title + content)
* List all posts
* Markdown support for content (bold, italic, headings, lists, etc.)
* Backend: FastAPI + SQLite
* Frontend: React + Axios

---

## 🔗 API Endpoints (Backend)

| Method | Endpoint | Description            |
| ------ | -------- | ---------------------- |
| POST   | /posts   | Create a new blog post |
| GET    | /posts   | List all blog posts    |

---


**Frontend: Create Post Form & List of Posts**
<img width="785" height="756" alt="image" src="https://github.com/user-attachments/assets/a386c3ab-c92e-4f2e-8132-ab0fa83da344" />

---


---

## 💻 Notes

* Backend must be running on port 8000 for frontend to communicate successfully.
* React frontend automatically updates posts after creating new ones.
* Markdown content is rendered as HTML in the frontend.

