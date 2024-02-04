import ThreeJSScene from "../components/3DScene/Scene";
import Cover from "../components/Cover";
import SDEjemplo1 from "../components/SDEjemplo1";

const LandingPage = () => {
  const cover = Cover();
  const sdejemplo1 = SDEjemplo1("black");
  console.log(cover)
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px", flexDirection: "column"}}
    >
      <ThreeJSScene
        scene={cover.scene}
        camera={cover.camera}
        target={cover.target}
        timeAnimation={cover.timeAnimation}
        height="30vh"
      />
    </div>
  );
};

export default LandingPage;
