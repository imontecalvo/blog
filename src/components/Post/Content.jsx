import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import "./post_style.css";
import chart1 from "./imgs/chart1.png";
import chart2 from "./imgs/chart2.png";
import chart3 from "./imgs/chart3.png";
import chart4 from "./imgs/chart4.png";
import chart5 from "./imgs/chart5.png";

import SDEjemplo1 from "../SDEjemplo1";
import Scene from "../3DScene/Scene";

const Content = () => {
  const latexInline = (text) => {
    return <InlineMath math={text} />;
  };

  const sd1 = SDEjemplo1();

  return (
    <>
      <h1>Titulo</h1>
      <p>
        ¿Alguna vez te preguntaste cómo evoluciona el crecimiento de una
        población, el impacto de una epidemia, o incluso el flujo de agua que
        sale de una canilla? Todos estos eventos, y muchos más, pueden
        entenderse como sistemas dinámicos. Estos sistemas, al ser modelados,
        nos permiten analizar diferentes escenarios y las posibles evoluciones
        que podrían ocurrir, todo basado en las condiciones iniciales
        establecidas.
      </p>

      <h2>¿Qué es un sistema dinámico?</h2>
      <p>
        Comencemos por entender qué es exactamente un sistema dinámico. Se trata
        de un conjunto de partes (representadas por variables) que interactúan
        entre sí y siguen un comportamiento regido por reglas preestablecidas
        (expresadas mediante un sistema de ecuaciones). Además, es dinámico, lo
        que significa que evoluciona con el tiempo, cambiando de estado a medida
        que las variables que lo componen toman diferentes valores.
      </p>

      <h3>Modelo crecimiento poblacional simple</h3>
      <p>
        Veamos un ejemplo de un sistema dinámico que modela de forma muy simple
        el crecimiento poblacional. En este caso, la población en un instante de
        tiempo {latexInline("t")} se define como la población en el instante
        anterior {latexInline("t-1")} multiplicada por un factor{" "}
        {latexInline("k")}, de modo que la ecuación que describe el
        comportamiento del sistema es la siguiente:
      </p>
      <BlockMath math="x_t = k·x_{t-1}" />

      <p>
        Una vez fijado un valor de {latexInline("k")}, vemos que el sistema
        puede evolucionar de distintas maneras según las condiciones iniciales
        de las que parta. En este caso, la condición inicial es{" "}
        {latexInline("x_1")} que es el valor que toma {latexInline("x_t")} para
        el primer instante de tiempo ({latexInline("t=1")}). Luego el sistema
        irá evolucionando y generando una trayectoria, tal como lo vemos a
        continuacion.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: 50,
          marginTop: 40,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={chart1}
            style={{ maxWidth: "400px", maxHeight: "400px" }}
          ></img>
          <figcaption
            style={{ fontStyle: "italic", fontSize: "15px", marginLeft: 40 }}
          >
            Fig. 1. Trayectorias que sigue el sistema lo largo del tiempo cuando
            k=1.2 tal que la población crece exponencialmente.
          </figcaption>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={chart2}
            style={{ maxWidth: "400px", maxHeight: "400px" }}
          ></img>
          <figcaption
            style={{ fontStyle: "italic", fontSize: "15px", marginLeft: 40 }}
          >
            Fig. 2. Trayectorias que sigue el sistema lo largo del tiempo cuando
            k=0.8 tal que la población decrece exponencialmente convergiendo a
            0.
          </figcaption>
        </div>
      </div>

      <p>
        Además, como se puede ver en los gráficos anteriores, dependiendo del
        valor que tome el factor {latexInline("k")}, el comportamiento será
        distinto. Para este caso particular, cuando {latexInline("k>0")} el
        sistema diverge, es decir tiende al infinito. Por otro lado, cuando{" "}
        {latexInline("k<0")} el sistema converge a {latexInline("x=0")}, esto lo
        veremos más adelante con el nombre de punto fijo.
      </p>

      <p>
        Como este sistema es muy simple, el comportamiento es similar para todos
        los puntos de {latexInline("x")}, sin embargo, en sistemas más complejos
        es posible que el comportamiento del sistema cambie según la condición
        inicial de la que se parta, lo cual tomará particular importancia en
        sistemas caóticos.
      </p>

      <p>
        Se puede pensar que cada condición inicial determina una trayectoria
        específica, la forma en que evolucionará el sistema, y pequeñas
        variaciones en las condiciones iniciales pueden dar como resultado
        diferentes trayectorias a lo largo del tiempo, puediendo observar para
        cada una de estas un comportamiento distinto, tal como:
      </p>

      <lu>
        <li>Divergencia</li>
        <li>Convergencia</li>
        <li>Oscilación alrededor de un punto</li>
      </lu>

      <h3>Sistema dinámico con dos variables</h3>
      <p>
        Ahora analicemos el siguiente sistema, que si bien sigue siendo bastante
        simple, resulta un poco más interesante.
      </p>

      <BlockMath math="x_t = a·x_{t-1} + b·y_{t-1}" />
      <BlockMath math="y_t = c·x_{t-1} + d·y_{t-1}" />
      <p>
        Con &nbsp;&nbsp;&nbsp;{latexInline("a=0.1")}
        {","}&nbsp;&nbsp;&nbsp;
        {latexInline("b=-3")}
        {", "}&nbsp;&nbsp;&nbsp;
        {latexInline("c=-1")}
        {", "}&nbsp;&nbsp;&nbsp;
        {latexInline("d=0")}
      </p>

      <p>
        A diferencia del primero, este sistema posee dos variables:{" "}
        {latexInline("x")} e {latexInline("y")}, y cada una evolucionará a lo
        largo del tiempo de acuerdo al comportamiento determinado por sus
        respectivas ecuaciones. En este caso, para ver la evolución de cada
        trayectoria a lo largo del tiempo necesitamos un gráfico en 3
        dimensiones {latexInline("(x,y,t)")}. A continuación, se encuentra dicha
        representación de forma interactiva, donde el eje vertical Z determina
        el paso del tiempo, mientras que el plano horizontal X,Y representa el
        estado del sistema, es decir, los valores de las variables{" "}
        {latexInline("x")} e {latexInline("y")}.
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Scene scene={sd1.scene} camera={sd1.camera} target={sd1.target} />
      </div>

      <p>
        Si probamos posicionando la cámara en distintas direcciones, se puede
        notar que, independientemente de dónde empiece el sistema, a medida que
        transcurre el tiempo todas las trayectorias parecen conducir a un punto,
        el {latexInline("(0,0)")}.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: 50,
          marginTop: 40,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={chart3}
            style={{ maxWidth: "400px", maxHeight: "400px" }}
          ></img>
          <figcaption
            style={{ fontStyle: "italic", fontSize: "15px", marginLeft: 40 }}
          >
            Fig. 3. Trayectorias que sigue el sistema en el espacio de fases a
            lo largo del tiempo, partiendo de distintos puntos
          </figcaption>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={chart4}
            style={{ maxWidth: "400px", maxHeight: "400px" }}
          ></img>
          <figcaption
            style={{ fontStyle: "italic", fontSize: "15px", marginLeft: 40 }}
          >
            Fig. 4. Trayectorias que sigue el sistema en el espacio de fases a
            lo largo del tiempo, partiendo de distintos puntos
          </figcaption>
        </div>
      </div>

      <p>
        De alguna manera, este punto está actuando de atractor, tal que el
        sistema siempre caerá en este punto. Pero… ¿Qué hace especial a este
        punto? ¿Por qué el sistema termina siempre acercándose? ¿Pueden haber
        más puntos cómo este? Éstas y otros interrogantes serán respondidos en
        la próxima sección.
      </p>
      <p>
        Sin embargo, antes, veamos una cosa más. Evidentemente, si queremos ver
        el valor que toma las variables {latexInline("x")} e {latexInline("y")}{" "}
        en cada instante de tiempo {latexInline("t")}, necesitamos un gráfico en
        3 dimensiones. Pero usualmente, alcanza con conocer las trayectorias que
        puede seguir el sistema, sin prestarle atención al instante del tiempo.
        En este caso, alcanza con un gráfico de dos dimensiones, donde se
        representen sólo las variables {latexInline("x")} e {latexInline("y")},
        dado que nos permite extraer prácticamente la misma información.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 50,
          marginTop: 40,
        }}
      >
        <img
          src={chart5}
          style={{ maxWidth: "400px", maxHeight: "400px" }}
        ></img>
        <figcaption style={{ fontStyle: "italic", fontSize: "15px" }}>
          Fig. 5. Espacio de fases
        </figcaption>
      </div>

      <p>
        Vemos que efectivamente, el comportamiento observado corresponde al
        mismo de la Fig. 3, donde las trayectorias se acercan en forma
        espiralada al (0,0). Decimos que este tipo de gráficos representa el
        espacio de fases, concepto que veremos a continuación.
      </p>
    </>
  );
};

export default Content;
