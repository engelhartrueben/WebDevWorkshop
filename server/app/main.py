# main.py

from typing import Union, Annotated
from fastapi import FastAPI, Header

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/post/")
def submit(token: Annotated[list[str] | None, Header()]= None):
    return {"token_return": token}

