import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import "./post_style.css";
import chart1 from "./imgs/chart1.png";
import chart2 from "./imgs/chart2.png";
import chart3 from "./imgs/chart3.png";
import chart4 from "./imgs/chart4.png";
import chart5 from "./imgs/chart5.png";
import chart6 from "./imgs/chart6.png";
import chart7 from "./imgs/chart7.png";
import chart8 from "./imgs/chart8.png";

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
            k=1.2 tal que la población crece exponencialmente tendiendo al
            infinito.
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
      <ul>
        <li>Divergencia</li>
        <li>Convergencia</li>
        <li>Oscilación alrededor de un punto</li>
      </ul>
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
        espiralada al {latexInline("(0,0)")}. Decimos que este tipo de gráficos
        representa el espacio de fases, concepto que veremos a continuación.
      </p>
      <h2>Algunos conceptos claves</h2>
      <p>
        Hemos estado hablando, entre otras cosoas, de trayectorias, espacios de
        fases y puntos que tienen una influencia particular en el sistema. Antes
        de continuar, es hora fijar estos conceptos.
      </p>
      <p>
        Una <b>trayectoria</b> es el comportamiento único que tiene un sistema
        dinámico a lo largo del tiempo para una condición inicial específica. Si
        variamos el punto de partida, la trayectoria será distinta.
      </p>
      <p>
        El <b>espacio de fases</b>, concepto mencionado en el último diagrama,
        es el conjunto de todos los estados posibles que puede adquirir nuestro
        sistema. En el caso anterior, nuestro sistema estaba compuesto por dos
        variables, por lo que el espacio de fases queda definido por todas las
        combinaciones posibles de puntos {latexInline("(x,y)")}. Este espacio se
        utiliza para trazar las trayectorias y poder analizar los estados que
        adquiere el sistema de forma sencilla y rápida.
      </p>
      <p>
        Por último, nos queda pendiente hablar de aquel punto particular, el
        {latexInline("(0,0)")}. ¿Qué tiene de especial? Bueno, existen puntos en
        los que, si el sistema llegar a caer en los mismos, quedará atrapado en
        los mismos sin poder escapar. Estos puntos reciben el nombre de{" "}
        <b>puntos fijos o puntos de equilibrio</b>, dado que si el sistema cae
        en estos puntos, permanecerá en el mismo estado.
      </p>
      <p>
        Los puntos fijos pueden ejercer diferentes influencias sobre el sistema.
        Entre estos efectos se encuentran:
      </p>
      <ul>
        <li>
          <u>Atracción</u>: El sistema tiende a evolucionar hacia estos puntos,
          son atractores. Es el caso de nuestro ejemplo, donde el sistema
          evolucionaba hacia el {latexInline("(0,0)")}.
        </li>
        <li>
          <u>Repulsión</u>: El sistema tiende a evolucionar alejándose de estos
          puntos, son repulsores.
        </li>
        <li>
          <u>Ciclo límite</u>: No atraen ni repulsan al sistema, pero lo
          mantienen girando en una órbita alrededor de suyo.
        </li>
      </ul>
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
          src={chart6}
          style={{ maxWidth: "600px", maxHeight: "600px" }}
        ></img>
        <figcaption
          style={{ fontStyle: "italic", fontSize: "15px", maxWidth: "600px" }}
        >
          Fig. 6. Puntos fijos y sus efectos sobre el sistema. En el primer
          diagrama se puede ver un punto fijo atractor, en el segundo dos puntos
          atractores y siete repulsores, y en el tercero un ciclo límite.
        </figcaption>
      </div>
      <h2>Clasificación</h2>
      <p>
        Ahora bien ¿Son todos los sistemas dinámicos iguales a los dos ejemplos
        que vimos? ¿Qué tipos de sistemas dinámicos existen? Respondiendo a esta
        pregunta, podemos decir que a grandes rasgos, existen dos criterios
        principales para clasificar nuestros sistemas dinámicos
      </p>
      <ul>
        <li>
          Según la temporalidad
          <ul>
            <li>
              <p>
                <u>Tiempo dicreto</u>: El transcurso del tiempo sucede de manera
                discreta, es decir, de a saltos. A su vez, el comportamiento del
                sistema se determina a partir de ecuaciones de recurrencia.
              </p>
              <BlockMath math="x_t = F(x_t, t)" />
              <p>
                Los dos ejemplos que vimos, efectivamente, son de tiempo
                discreto.
              </p>
            </li>
            <li>
              <p>
                <u>Tiempo continuo</u>: El transcurso del tiempo sucede de
                manera continua. Además, el comportamiento del sistema queda
                definido a partir de un sistema de ecuaciones diferenciales.
              </p>

              <BlockMath math="\frac{dx}{dt} = F(x, t)" />
            </li>
          </ul>
        </li>
        <li>
          Según la linealidad
          <ul>
            <li>
              <p>
                <u>Lineales</u>: Tal como el nombre lo indica, el comportamiento
                queda definido por ecuaciones lineales. A lo sumo, tienen un
                único punto fijo
              </p>
              <p>
                Los dos ejemplos vistos, también son lineales y de hecho
                presentan un único punto fijo.
              </p>
            </li>
            <li>
              <p>
                <u>No Lineales</u>: El comportamiento queda definido por
                ecuaciones no lineales. Pueden tener múltiples puntos fijos.
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <h2>Comportamiento</h2>
      <p>
        Ya tenemos una idea más clara de qué es un sistema dinámico y los
        distintos tipos que existen. Sin embargo, dado un sistema ¿Cómo podemos
        analizar su comportamiento? ¿Cómo sabemos que puntos fijos posee y qué
        tipo de influencia ejercen sobre el sistema?
      </p>
      <p>
        Para casos sencillos, es posible disipar inmediatamente estas dudas
        mediante un gráfico, tal como hicimos al comienzo. Pero para casos más
        complejos es necesario un análisis más profundo dado que los puntos
        fijos pueden estar en cualquier parte del espacio, y en caso de que el
        sistema sea de tiempo continuo, éste quedará definido a partir de
        ecuaciones diferenciales que pueden ser complejas de resolver.
      </p>
      <h3>Detección de puntos fijos</h3>
      <p>
        Empecemos por ver cómo calcular los puntos fijos. Dependiendo de si el
        sistema es de tiempo discreto o continuo, el método usado será
        diferente.
      </p>
      <h4>En sistemas de tiempo discreto</h4>
      <p>
        Habiamos dicho que los puntos fijos son aquellos puntos en los que una
        vez que el sistema cae en los mismos, no puede salir. En otras palabras,
        si en el instance de tiempo t el sistema se encuentra en un estado X (y
        X es un punto fijo), entonces, en el estado de tiempo{" "}
        {latexInline("t+1")} el sistema permanecerá en X.
      </p>
      <p>
        Para detectar puntos fijos, simplemente debemos resolver el sistema de
        ecuaciones que define el comportamiento del sistema teniendo en cuenta
        que
      </p>
      <BlockMath math="x_t = x_{t-1}" />
      <br />
      <p>A continuación un ejemplo:</p>
      <BlockMath math="x_t = 0.5·x_{t-1} + y_{t-1} + 0.25" />
      <BlockMath math="y_t = -0.5·x_{t-1} + y_{t-1} + 0.75" />
      <p>
        Primero, reescribimos el sistema de educaciones tal que se cumpla{" "}
        {latexInline("X_t=X_{t-1}")}
      </p>
      <BlockMath math="x_t = 0.5·x_t + y_t + 0.25" />
      <BlockMath math="y_t = -0.5·x_t + y_t + 0.75" />
      <p>Luego resolvemos el sistema, que da por resultado:</p>
      <BlockMath math="x_t = 1.5" />
      <BlockMath math="y_t = 0.5" />
      <h4>En sistemas de tiempo continuo</h4>
      <p>
        Por otro lado, en sistemas de tiempo continuo, como está expresado a
        partir de ecuaciones diferenciales, vamos a decir que la ausencia de
        cambio en el sistema está dada por la derivada nula.
      </p>
      <p>
        Esto quiere decir que para detectar puntos fijos, debemos resolver el
        sistema de ecuaciones que surge de tener en cuenta que{" "}
      </p>
      <BlockMath math="dX/dt=0" />
      <p> Siendo X las variables del sistema.</p>
      <br />
      <p>
        A continuación un ejemplo. Se trata del modelo Predador-Presa de
        Lotka-Volterra y está definido por las siguientes ecuaciones:
      </p>
      <BlockMath math="\frac{dx}{dt} = x - xy" />
      <BlockMath math="\frac{dy}{dt} = -y - xy" />
      <p>
        En primer lugar, reescribimos el sistema tal que se cumpla{" "}
        {latexInline("\\frac{dX}{dt}=0")}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <BlockMath math="0 = x - xy" />
          <BlockMath math="0 = -y - xy" />
        </div>
        <p style={{ margin: 20 }}>{latexInline("\\Longrightarrow")}</p>
        <div>
          <BlockMath math="0 = x(1-y)" />
          <BlockMath math="0 = -y(1-x)" />
        </div>
      </div>
      <p>Luego, al despejar obtenemos que: </p>
      <BlockMath math="x_1 = 0 \ ; \ x_2 = 1 " />
      <BlockMath math="y_1 = 0 \ ; \ y_2 = 1 " />
      <p>
        Notar que este sistema tiene dos puntos fijos: {latexInline("(0,0)")} y{" "}
        {latexInline("(1,1)")} ya que no es lineal.
      </p>
      <h3>Efecto de puntos fijos</h3>
      Ya sabemos calcular cuáles son los puntos fijos de nuestro sistema, ahora
      veremos cómo es posible analizar el efecto o influencia de los mismos
      sobre el comportamiento que adquiere el sistema. Dependiendo si el sistema
      es lineal o no, el proceso difiere ligeramente.
      <p>Los pasos a seguir son:</p>
      <ol>
        <li>
          <ul>
            <li>
              <p>
                <b>Lineales</b>: Es el caso más simple, debemos obtener
                solamente la matriz del sistema de ecuaciones.
              </p>
            </li>
            <li>
              <p>
                <b>No lineales</b>: No podemos representar al sistema de
                ecuaciones mediante una matriz dado que no son lineales. Lo se
                debe hacer es obtener la matriz jacobiana. Esto implica que
                vamos a obtener una aproximación lineal alrededor de cada punto
                fijo. Esta es la gran diferencia ya que con sistemas lineales
                esto no es necesario, luego el procedimiento es el mismo.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <p>
                <b>Lineales</b>: A partir de la matriz obtenida, calculamos los
                autovalores.
              </p>
            </li>
            <li>
              <p>
                <b>No lineales</b>: A diferencia de los lineales, los no
                lineales pueden tener múltiples puntos fijos, por lo que por
                cada uno de estos debemos evaluar en la matriz jacobiana y
                posteriormente calcular los autovalores.
              </p>
            </li>
          </ul>
        </li>

        <li>
          Si nuestro sistema es de tiempo discreto, nos quedamos con el modulo
          del autovalor. Si es de tiempo discreto, nos quedamos con la parte
          real del autovalor.
        </li>

        <li>
          Determinar el tipo de punto fijo teniendo en cuenta:
          <ul>
            <li>
              Si es de tiempo discreto, analizar si el modulo es menor, igual o
              mayor a 1
            </li>
            <li>
              Si es de tiempo continuo, analizar si la componente real es menor,
              igual o mayor a 0
            </li>
          </ul>
          <p>
            {" "}
            Para esto, podemos usar las siguientes referencias extraídas de{" "}
            <i>
              "Introduction to the Modeling and Analysis of Complex Systems",
              Hiroki Sayama
            </i>
            .
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 50,
              marginTop: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 50,
              }}
            >
              <img
                src={chart7}
                style={{ maxWidth: "600px", maxHeight: "600px" }}
              ></img>
              <figcaption
                style={{
                  fontStyle: "italic",
                  fontSize: "15px",
                  marginLeft: 40,
                }}
              >
                Fig. 7. Análisis de estabilidad de puntos fijos para sistemas de
                tiempo discreto.
              </figcaption>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={chart8}
                style={{ maxWidth: "600px", maxHeight: "600px" }}
              ></img>
              <figcaption
                style={{
                  fontStyle: "italic",
                  fontSize: "15px",
                  marginLeft: 40,
                }}
              >
                Fig. 8. Análisis de estabilidad de puntos fijos para sistemas de
                tiempo continuo.
              </figcaption>
            </div>
          </div>
        </li>
      </ol>
      <h4>En sistemas lineales</h4>
      Continuamos con el sistema lineal utilizado previamente.
      <BlockMath math="x_t = 0.5·x_{t-1} + y_{t-1} + 0.25" />
      <BlockMath math="y_t = -0.5·x_{t-1} + y_{t-1} + 0.75" />
      Cuyo punto fijo se encuentra en {latexInline("(1.5,0.5)")}. Primero
      obtenemos la matriz del sistema.
      <BlockMath math="A = \begin{bmatrix} 0.5 & 1 \\ -0.5 & 1 \end{bmatrix} "></BlockMath>
      Los autovalores de esta matriz son:
      <BlockMath math="\lambda_1 = \frac{3}{4} + \frac{\sqrt{7}}{4}i"></BlockMath>
      <BlockMath math="\lambda_2 = \frac{3}{4} - \frac{\sqrt{7}}{4}i"></BlockMath>
      Vemos que: {latexInline("|\\lambda_1| = |\\lambda_2| = 1")}
      <br />
      <br />
      Por lo tanto, el comportamiento del punto fijo se trata de un ciclo limite
      pudiendo observar trayectorias ovaladas alrededor del punto fijo.
      Comprobemoslo.
      <h4>En sistemas no lineales</h4>
    </>
  );
};

export default Content;
