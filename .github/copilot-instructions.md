# GitHub Copilot Instructions for organiseAIMediaStudio

## Project Overview

organiseAIMediaStudio is a web-based application for AI-powered photo and video creation, editing, and montage assembly. Users can upload images, generate video montages, and perform advanced media edits (such as clothing replacement or attribute changes) while preserving faces and core appearance.

- **Frontend:** React + Material UI
- **Backend:** FastAPI (Python)
- **AI/ML Integration:** Uses Python libraries and models for image/video processing, inpainting, generation, and montage.

## Architecture & Key Components

### Directory Structure

- `backend/` - FastAPI backend (REST API, Python business logic, all AI/ML-related Python code)
    - `main.py` (FastAPI app entrypoint)
    - `requirements.txt` (backend dependencies)
- `frontend/` - React app (Material UI, all user interface logic)
    - `src/` - React components and entrypoints
        - `App.js`, `index.js`
- `.github/copilot-instructions.md` - This file, for Copilot guidance

### Core Technologies

- **Backend**: Python 3.x, FastAPI, Pillow, Uvicorn, (AI/ML models: e.g., Stable Diffusion, OpenCV, moviepy, etc.)
- **Frontend**: React (with JS or TS), Material UI
- **Media Processing**: PIL/Pillow (Python), OpenCV, moviepy, rembg, etc.
- **Video Generation**: moviepy, Stable Diffusion or equivalent

## Development & Code Style

- **Formatting**:
    - Python code: PEP8, format with `black`
    - JavaScript/React: Prettier (standard React/Eslint rules)
- **Linting**: Use flake8 for Python, ESLint for JS/React if possible
- **Pre-commit hooks**: Recommended for both codebases

### Naming Conventions

- **Classes**: PascalCase (e.g., `MediaEditor`, `UploadController`)
- **Functions/Variables**: camelCase (e.g., `processUpload`, `handleVideoRequest`)
- **Constants**: UPPERCASE_WITH_UNDERSCORES (e.g., `MAX_UPLOAD_SIZE`)
- **React Components**: PascalCase and .js files in src/

### File Organization

- Separate backend and frontend logic entirely.
- Backend: API endpoints in `main.py` or under submodules, ML models/utilities under corresponding backend/ directories.
- Frontend: All components, hooks, context, etc., under frontend/src/.

## API/Backend Development Guidelines

- Use FastAPI for all API endpoints.
- Design endpoints:
    - `/upload/` for file uploads (accepts images/videos, POST)
    - `/edit/` for AI-powered edits (change clothing, modify attributes)
    - `/montage/` for creating montages/videos
    - `/status/` for job tracking (if using background jobs)
- Validate incoming requests (file type, size, format)
- Serve static/media files securely (if needed)

## Frontend Development Guidelines

- Use React (with JS or TS), leveraging Material UI for layout and controls.
- Store API URLs/config in environment or config files for easy switching.
- Use functional components and hooks for logic.
- Write clear, user-friendly UI for uploads and displaying results.
- Handle loading, errors, and job statuses gracefully.
- Provide responsive layout for desktop and tablet/mobile if possible.

## Media Processing Guidelines

- **Supported types**: JPEG, PNG images; MP4 video (extend as needed)
- **AI Editing**: Use established models for inpainting/clothing swap, maintain facial integrity.
- **Montage Creation**: Use moviepy (or similar) for photo-to-video and combining segments.
- **EXIF/Metadata**: Preserve when possible.
- **Security**: Validate, never execute/process untrusted code.

## Testing Requirements

- **Backend**: pytest (test endpoints, edge cases, invalid requests, large files).
- **Frontend**: (optional) React Testing Library/Jest for critical UI flows.
- **Coverage**: Focus on core AI/model endpoints and file upload/edit APIs.

## Error Handling

- Always provide clear API error messages (JSON with `detail` or similar)
- Log backend errors for tracing/debug
- User-friendly frontend error banners/messages

## Example: FastAPI Endpoint

```python
from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.post("/upload/")
async def uploadMedia(file: UploadFile = File(...)):
    # Validate file type/size, store in upload dir, return file id/path
    ...
```

## Example: React File Upload (with MUI)

```javascript
import React, { useState } from "react";
import { Button } from "@mui/material";

function UploadButton() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);
  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    await fetch("/upload/", { method: "POST", body: formData });
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}
```

## Security Considerations

- Never hard-code secrets or credentials
- If using third-party AI/APIs, secure tokens/keys
- Limit upload size and sanitize files if processed

## When Contributing

- Run/test code in your environment before PR
- Ensure all appropriate tests pass
- Update/extend documentation for new features and API endpoints
- Use consistent naming and code style as above

---

This file supersedes any Tkinter/iCloud/desktop patterns used in other projects.