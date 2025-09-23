import { ChartBar, Question, CursorClick } from "@phosphor-icons/react";
import "../../styles/pages/blogDetails.css";

const WhyEmployerBrandMatters = {
  title: "¿ Por qué la Marca Empleadora es clave para pymes y startups ?",
  subtitle: "En un mercado donde el talento elige, tu Marca Empleadora ya no es un “plus”: es tu carta de presentación.",
  description: [
    <p key="p1">
      Si liderás una pyme o startup, sabés que no contás con una megaestructura,
      pero sí con algo más valioso: <strong>personas comprometidas</strong>, ideas potentes y mucho por construir.
    </p>,

    <p key="p2">
      Justamente por eso, trabajar tu <strong>Marca Empleadora</strong> hoy es una decisión estratégica, no un lujo corporativo.
    </p>,

    <ul key="list1">
      <li>
        <span className="icon-chart">
          <ChartBar size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        El 58% de las empresas reconoce que la comunicación interna moldea la percepción de la cultura.
      </li>
      <li>
        <span className="icon-chart">
          <ChartBar size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        El 84% de los líderes cree que la Marca Empleadora es clave para atraer y fidelizar talento.
      </li>
    </ul>,

    <br key="br1" />,

    <h4 key="h4"><strong>Hacete estas 4 preguntas:</strong></h4>,

    <ul key="list2">
      <li>
        <span className="icon-question">
          <Question size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        ¿Tu empresa tiene una propuesta de valor clara para el talento?
      </li>
      <li>
        <span className="icon-question">
          <Question size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        ¿Cuida cada punto de contacto con sus colaboradores?
      </li>
      <li>
        <span className="icon-question">
          <Question size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        ¿Mide y mejora la experiencia interna?
      </li>
      <li>
        <span className="icon-question">
          <Question size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        ¿Tiene un propósito que se comunica y se vive?
      </li>
    </ul>,

    <br key="br3" />,

    <p key="p3">
      Si respondiste <strong>NO</strong> a más de una, es momento de actuar.
      Tu cultura ya se está comunicando.
      En gen HR diseñamos estrategias de <strong>Marca Empleadora</strong> auténticas, sostenibles y alineadas a tu cultura real.
    </p>,

    <p key="p4">
      ¿Charlamos? 💬 <br />
      <a href="mailto:hola@genhr.com.ar">hola@genhr.com.ar<CursorClick size={24} color="#CDF26A " /></a>
    </p>
  ],
};

export default WhyEmployerBrandMatters;
