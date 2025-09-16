import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogList({ refresh }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/posts").then(res => setPosts(res.data));
  }, [refresh]);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map(p => (
        <div key={p.id} style={{border:"1px solid #ddd", margin:"10px", padding:"10px"}}>
          <h3>{p.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: p.content }} />
        </div>
      ))}
    </div>
  );
}
