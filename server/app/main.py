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

class Test(BaseModel):
    name: str
    price: float
    count: int

class Simple(BaseModel):
    item: int

class Form(BaseModel):
    fname: str | None = None
    lname: str | None = None
    email: str | None = None
    sid: str | None = None
    year: str | None = None
    event_1: str | None = None
    event_2: str | None = None
    event_3: str | None = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/test/")
def test(item: Test):
    return {"congrats": "True"}

@app.post("/again/")
def again(item: Simple) -> int:
    return item.item ** 2

@app.post("/submit/")
def submitForm(form: Form) -> None:
    for things in form:
        print(things)

