# main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origin = [
        "http://localhost:8000",
        "http://0.0.0.0:8000",
]

app.add_middleware(
        CORSMiddleware,
        allow_origins=['*'], # this is a touch danger
        allow_methods=['*'],
        allow_headers=['*']
)

class Form(BaseModel):
    fname: str
    lname: str
    email: str
    sid: str
    year: int
    event: list[str]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/submit/")
def submitForm(form: Form) -> None:
    for things in form:
        print(things)

