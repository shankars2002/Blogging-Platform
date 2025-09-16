import { useState } from "react";
import axios from "axios";

export default function BlogForm({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/posts", { title, content });
    setTitle("");
    setContent("");
    onPostCreated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br /><br />
      <textarea
        placeholder="Content (Markdown supported)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={5}
        cols={40}
      />
      <br /><br />
      <button type="submit">Create Post</button>
    </form>
  );
}
