from fastapi import FastAPI

app = FastAPI()  # ✅ This must be defined at the top level

@app.get("/")
def read_root():
    return {"message": "Welcome to Paparazzi App"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
