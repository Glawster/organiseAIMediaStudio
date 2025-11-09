# organiseAIMediaStudio

AI-powered media studio for advanced photo and video creation and editing.

## Project Structure

```
organiseAIMediaStudio/
│   README.md
│   .gitignore
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── __init__.py
│
└── frontend/
    ├── package.json
    ├── README.md
    └── src/
        ├── App.js
        └── index.js
```

## Quickstart (Windows + VS Code)

### Backend (FastAPI)
1. Open a terminal in the `backend` folder.
2. Create virtual environment:
    ```
    python -m venv venv
    venv\Scripts\activate
    ```
3. Install dependencies:
    ```
    pip install -r requirements.txt
    ```
4. Run the server:
    ```
    uvicorn main:app --reload
    ```

### Frontend (React)
1. Open new terminal in the `frontend` folder.
2. Install dependencies:
    ```
    npm install
    ```
3. Start development server:
    ```
    npm start
    ```

---

**You can open the entire folder in VS Code for best experience!**