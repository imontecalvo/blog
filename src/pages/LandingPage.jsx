import ThreeJSScene from "../components/3DScene/Scene";
import Cover from "../components/Cover";
import SDEjemplo1 from "../components/SDEjemplo1";
const LandingPage = () => {
  const cover = Cover();
  const sdejemplo1 = SDEjemplo1("black");

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px", flexDirection: "column"}}
    >
      <h1 style={{ color: "black", marginTop: "100px" }}>imontecalvo's blog</h1>
      <ThreeJSScene
        scene={cover.scene}
        camera={cover.camera}
        target={cover.target}
      />
    </div>
  );
};

export default LandingPage;
