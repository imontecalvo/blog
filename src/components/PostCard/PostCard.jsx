import "./postcard_style.css";
import Divider from "@mui/material/Divider";
import Chip from "./Chip";
import { purple } from "@mui/material/colors";

const PostCard = ({ title, description }) => {
  return (
    <div className="card-container">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Divider style={{ marginTop: "auto" }} />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        <Chip
          size="small"
          color="black"
          className="chip"
          label="Matemática"
          variant="outlined"
        />
        <Chip
          size="small"
          color="black"
          className="chip"
          label="Sistemas Dinamicos"
          variant="outlined"
        />
        <Chip
          size="small"
          color="black"
          className="chip"
          label="Sistemas Dinamicos"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default PostCard;
