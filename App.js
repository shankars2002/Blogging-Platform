import { useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mini Blog</h1>
      <BlogForm onPostCreated={() => setRefresh(!refresh)} />
      <BlogList refresh={refresh} />
    </div>
  );
}

export default App;
