import "./post_style.css";
import Content from "./Content";
import Index from "./Index/Index";
import { useEffect, useState } from "react";

const Post = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headings = document.querySelectorAll("h2, h3, h4");
    setHeadings(
      Array.from(headings).map((heading) => [
        heading.localName,
        heading.textContent,
      ])
    );
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Index headings={headings} />
        <div className="post-container">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Post;
