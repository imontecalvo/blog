import "./index_style.css";

const Index = ({ headings }) => {
  return (
    <div className="index-container">
      {headings ? (
        <div>
          {headings.map((h, index) => (
            <div className={h[0]}>
              <a key={index} href={`#section${index}`}>
                {h[1]}
              </a>
              <br />
            </div>
          ))}
        </div>
      ) : null}
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
