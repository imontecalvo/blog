import ThreeJSScene from "../components/3DScene/Scene";
import Cover from "../components/Cover";
import { useTheme } from "../ThemeProvider";
import Input from "@mui/material/Input";
import PostCard from "../components/PostCard/PostCard";

import "./landing_style.css";

const LandingPage = () => {
  const { theme } = useTheme();
  const cover = Cover(theme);

  return (
    <div className="landing-background">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <ThreeJSScene
          scene={cover.scene}
          camera={cover.camera}
          height="20vh"
          config={{target:cover.target, timeAnimation:cover.timeAnimation, orbitControls:false}}
        />
        <div className="container">
          <h2 style={{marginTop:0}}>Mis posts</h2>
          <div className="retro-border">
            <p>Filtrar</p>
            <Input style={darkModeStyles} placeholder="Buscar"/>
          </div>
          <div style={{display:"flex", flexWrap:"wrap", gap:"1%", justifyContent:"space-around"}}>
          <PostCard title="Entre equilibrios y transformaciones: Descubriendo los Sistemas Dinamicos" description={defDescription}/>
          <PostCard title="Title" description={defDescription}/>
          <PostCard title="Title" description={defDescription2}/>
          <PostCard title="Title" description={defDescription}/>
          <PostCard title="Title" description={defDescription}/>
          <PostCard title="Title" description={defDescription}/>
          <PostCard title="Title" description={defDescription}/>

          </div>
          {/* <PaginationBar /> */}
        </div>
      </div>
    </div>
  );
};

const darkModeStyles = {
  color: "white",
  backgroundColor: "#333",
  padding: "0px 10px",
};

export default LandingPage;


const defDescription = "A very descriptive description which describes the post";

const defDescription2 = "A very descriptive description which describes the post A very descriptive description which describes the post A very descriptive description which describes the post";