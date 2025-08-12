# DeepFocus+ — Task Manager (FYP Prototype)

**Short description**  
A lightweight prototype of the DeepFocus+ task manager for student productivity. Demonstrates basic client-side CRUD (Create / Read / Update / Delete) using browser `localStorage` and a simple UI to manage tasks.

---

## Demo / Screenshots

**Add / List tasks**  
![Add tasks](/01-ui-add.png)

**Edit a task (inline/prompt)**  
![Edit task](02-ui-edit.png)

**Delete a task**  
![Delete task](03-ui-delete.png)



---

## Features
- Add a task (text input)
- Edit an existing task (prompt / inline option)
- Delete a task
- Persistent storage using `localStorage` (JSON)
- Simple, walkable code to extend later (priority, completion, AI features)

---

## Tech stack
- HTML, CSS (basic), JavaScript (vanilla)
- Browser `localStorage` for persistence

---

## Run locally
1. Clone the repo:
git clone https://github.com/ainieworks/DeepFocusPlus-FYP.git
cd DeepFocusPlus-FYP
git clone https://github.com/your-username/DeepFocusPlus-FYP.git
cd DeepFocusPlus-FYP
2.Open index.html in your browser (double-click or use a simple server):
# optional: quick local server (python)
python -m http.server 8000
# then open http://localhost:8000
Key files
index.html — main page and DOM structure

app.js — task logic (add, edit, delete, load/save to localStorage)

assets/screenshots/ — screenshots used in README
Next improvements (roadmap)
Replace prompt with inline edit input & Save/Cancel UI

Add task metadata: priority, deadline, completed flag

Export logs (PDF) and analytics (graphs)

Integrate simple AI features (smart prioritization, motivational prompts)

Migrate persistence to backend (Python Flask/Django + PostgreSQL)
Author
Qurat ul Ain (Aynee) — Final-year Software Engineering student
Contact: ainie.developer@gmail.com
