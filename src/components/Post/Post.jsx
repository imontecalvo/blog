import "./post_style.css";
import Content from "./Content";

const Post = () => {
  const darkMode = !!true;
  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <div className="postContainer">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Post;
