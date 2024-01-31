import "./index_style.css";
import { useState, useEffect } from "react";

const Index = ({ headings }) => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (index) => {
    const sectionId = `section${index}`;
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const OFFSET = 100
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Lógica para determinar la sección activa
    const newActiveSection = headings.findIndex((_, index) => {
      const sectionId = `section${index}`;
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - OFFSET; // Ajusta este valor según tus necesidades
        if (index === headings.length - 1) return scrollPosition >= sectionTop;
        const nextSectionElement = document.getElementById(`section${index+1}`);
        const sectionBottom = nextSectionElement.offsetTop - OFFSET
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      }
      return false;
    });

    if (newActiveSection >= 0 && newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, headings]);

  return (
    <div className="index-container">
      {headings ? (
        <div>
          {headings.map((h, index) => (
            <div className={h[0]}>
              <div className={activeSection === index ? "active-section" : "inactive-section"}>
                <a
                  key={index}
                  onClick={() => {
                    scrollToSection(index);
                  }}
                >
                  {h[1]}
                </a>
              </div>
              <br />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Index;