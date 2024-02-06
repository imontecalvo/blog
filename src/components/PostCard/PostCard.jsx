import "./postcard_style.css";

const PostCard = ({title, description}) => {
  return (
    <div className="card-container">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
    </div>
  );
};

export default PostCard;