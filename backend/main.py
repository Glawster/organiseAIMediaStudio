from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def readRoot():
    return {"message": "Welcome to organiseAIMediaStudio AI backend!"}