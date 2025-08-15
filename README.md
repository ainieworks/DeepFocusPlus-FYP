DeepFocus+ — Task Manager (FYP Prototype)

Short description
A lightweight prototype of the DeepFocus+ task manager for student productivity. Demonstrates basic client-side CRUD (Create / Read / Update / Delete) using browser localStorage and a simple UI to manage tasks — now enhanced with due dates and AI-inspired smart sorting for better task prioritisation.

Demo / Screenshots

Add / List tasks
Add tasks with text, importance, and due date

Edit a task (inline/prompt)
Edit task details quickly

Delete a task
Remove a task instantly

Smart Sort by AI logic
Orders tasks automatically based on importance and deadlines

Features

Add a task with:

Task text

Importance level (Low, Medium, High)

Due date (YYYY-MM-DD)

Edit an existing task (prompt / inline option)

Delete a task

AI-inspired Smart Sort:

Automatically reorders tasks by importance and nearest due date

Designed to help focus on urgent and important tasks first

Persistent storage using localStorage (JSON)

Simple, walkable code to extend later (priority scoring, AI assistant features)

Tech stack

HTML, CSS (basic), JavaScript (vanilla)

Browser localStorage for persistence

Run locally
# Clone the repo
git clone https://github.com/ainieworks/DeepFocusPlus-FYP.git
cd DeepFocusPlus-FYP

# (Optional) Start a quick local server (Python)
python -m http.server 8000


Then open http://localhost:8000 in your browser.
Or simply double-click index.html.

Key files

index.html — main page and DOM structure

app.js — task logic (add, edit, delete, smart sort, load/save to localStorage)

assets/screenshots/ — screenshots used in README

Next improvements (roadmap)

Replace prompt() with inline edit input & Save/Cancel UI

Advanced AI features:

NLP-based task analysis

Automatic importance suggestion

Distraction detection

Export logs (PDF) and analytics (graphs)

Migrate persistence to backend (Python Flask/Django + PostgreSQL)

Author
Qurat ul Ain (Aynee) — Final-year Software Engineering student
📧 Contact: ainie.developer@gmail.com

