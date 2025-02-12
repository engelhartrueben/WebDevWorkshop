# main.py

from typing import Union, Annotated
from fastapi import FastAPI, Header, Path
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/sub/")
def addSubmission(
        item_id: Annotated[int, Path(title="title", ge=0, le=100)],
        q: str | None = None,
        item: Item | None = None,
        ):
    results = {"item_id": item_id}
    if q:
        results.update({"q":q})
    if item:
        results.update({"item":item})
    return results
