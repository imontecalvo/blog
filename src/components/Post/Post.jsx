import "./post_style.css";
import Content from "./Content";
import Index from "./Index/Index";
import { useEffect, useState } from "react";

const Post = () => {
  const darkMode = !true;
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
      <div className={darkMode ? "dark" : "light"} style={{ display: "flex" }}>
        <Index headings={headings} />
        <div className="postContainer">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Post;
