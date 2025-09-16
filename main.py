from fastapi import FastAPI
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from fastapi.middleware.cors import CORSMiddleware
import markdown2

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = "sqlite:///./blog.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)

Base.metadata.create_all(bind=engine)

class PostCreate(BaseModel):
    title: str
    content: str

@app.post("/posts")
def create_post(post: PostCreate):
    db = SessionLocal()
    db_post = Post(title=post.title, content=post.content)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return {"id": db_post.id, "title": db_post.title, "content": db_post.content}

@app.get("/posts")
def list_posts():
    db = SessionLocal()
    posts = db.query(Post).all()
    return [
        {
            "id": p.id,
            "title": p.title,
            "content": markdown2.markdown(p.content)  # Markdown → HTML
        } for p in posts
    ]
