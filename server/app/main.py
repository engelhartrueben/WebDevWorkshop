# main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# There is a way to do this with regex...
# might be less annoying to just allow all origins
origin = [
        "http://localhost:*",
        "http://0.0.0.0:*",
        "http://127.0.0.1:*",
]

app.add_middleware(
        CORSMiddleware,
        # allow_origin_regex=origin,
        allow_origins=['*'],
        allow_methods=['GET', 'POST'],
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

