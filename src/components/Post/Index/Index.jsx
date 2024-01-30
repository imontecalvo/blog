import "./index_style.css";

const Index = ({ headings }) => {
  const darkMode = !true;

  const scrollToSection = (index) => {
    const sectionId = `section${index}`;
    const sectionElement = document.getElementById(sectionId);
    console.log(sectionElement)

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="index-container">
        {headings ? (
          <div>
            {headings.map((h, index) => (
              <div className={h[0]}>
                <a
                  key={index}
                  onClick={() => {
                    scrollToSection(index);
                  }}
                >
                  {h[1]}
                </a>
                <br />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Index;

{
  /* <ul>
{headings.map((h, index) => (
  <li key={index}>
    <a href={`#section${index}`}>{h[1]}</a>
  </li>
))}
</ul> */
}
