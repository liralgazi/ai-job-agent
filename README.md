# 🚀 AI Job Hunter

A modern AI-powered job search platform built with **React**, **Vite**, **FastAPI**, and real job provider integrations.

The platform allows users to search and filter real tech jobs based on:
- Role
- Location
- Experience level
- Technologies
- Upload time

Built with a modern dark SaaS-style UI and scalable provider architecture for future AI automation features.

---

# ✨ Features

- 🔍 Real-time job search
- 🇮🇱 Israel-focused job filtering
- 🎯 Advanced filters
- 🔥 New jobs badge
- 🟢 Junior role tags
- ⏱️ Filter by upload time
- 🌙 Modern dark-mode UI
- ⚛️ React + Vite frontend
- 🐍 FastAPI backend
- 🔗 Real provider integrations
- ⌨️ Press Enter to search
- 📱 Responsive design

---

# 🧠 Tech Stack

## Frontend
- React
- Vite
- JavaScript
- CSS

## Backend
- Python
- FastAPI
- Requests
- REST APIs

## Integrations
- Greenhouse Jobs API
- Lever Jobs API

## Planned Features
- LinkedIn integration
- AI job matching
- ATS resume tailoring
- Auto apply workflows
- Authentication system
- Saved jobs dashboard

---

# 🏗️ Architecture

```text
Frontend (React)
        ↓
FastAPI Backend
        ↓
Job Providers Layer
   ├── Greenhouse
   ├── Lever
   └── Future Providers
```

---

# ✨ Current Functionality

Users can:

- Search real jobs from multiple providers
- Filter by role
- Filter by location
- Filter by technologies
- Filter by upload time
- View job source
- Open external application links
- See recently uploaded jobs
- Browse junior-focused roles

---

# 📁 Project Structure

```bash
ai-job-agent/
│
├── backend/
│   ├── app.py
│   ├── services/
│   │   ├── greenhouse.py
│   │   └── lever.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchFilters.jsx
│   │   │   ├── JobCard.jsx
│   │   │   └── JobList.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── App.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/liralgazi/ai-job-agent.git
cd ai-job-agent
```

---

# 🖥️ Backend Setup

## 2️⃣ Create Virtual Environment

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
```

---

## 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4️⃣ Run Backend

```bash
uvicorn app:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# ⚛️ Frontend Setup

## 5️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 6️⃣ Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🚀 Future Roadmap

- LinkedIn integration
- Israeli job board integrations
- AI-powered job ranking
- Resume ATS optimization agent
- Auto-generated cover letters
- Job save/favorites system
- Authentication & dashboard
- Automated application workflows
- AI career assistant

---

# 💡 Project Goals

This project was built to practice and demonstrate:

- Fullstack development
- API integrations
- Scalable architecture
- Frontend UI/UX
- AI product thinking
- Backend service design
- Real-world automation workflows

---

# 👩‍💻 Author

## Lir Algazi

- GitHub: https://github.com/liralgazi
- LinkedIn: https://www.linkedin.com/in/lir-algazi-53804a200/
