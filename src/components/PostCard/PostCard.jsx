import "./postcard_style.css";
import Divider from "@mui/material/Divider";
import Chip from "./Chip";
import { purple } from "@mui/material/colors";
import { useTheme } from "../../ThemeProvider";

const PostCard = ({ title, description }) => {

  const {theme} = useTheme( )

  return (
    <div className="card-container">
      <div style={{position: "relative"}}>
        <img style={{display: "block", maxWidth: "100%" }} src="/post_cover.jpg" />
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">{description}</p>
      {/* <Divider style={{ marginTop: "auto" }} /> */}
      <div className="tag-container">
        <Chip
          size="small"
          color={theme === "light" ? "black" : "white"}
          className="chip"
          label="Matemática"
          variant="outlined"
        />
        <Chip
          size="small"
          color={theme === "light" ? "black" : "white"}
          className="chip"
          label="Sistemas Dinamicos"
          variant="outlined"
        />
        <Chip
          size="small"
          color={theme === "light" ? "black" : "white"}
          className="chip"
          label="Sistemas Dinamicos"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default PostCard;
