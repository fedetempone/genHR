import { Lightning, CursorClick } from "@phosphor-icons/react";
import "../../styles/pages/blogDetails.css";

const CandidateExperienceImpact = {
  title: "El impacto real de cada instancia en la experiencia del candidato",
  subtitle:
    "En un contexto donde los colaboradores tienen múltiples alternativas para elegir dónde desarrollar su carrera, la experiencia del candidato pasó a convertirse en un factor clave que refleja la identidad de la marca empleadora.",
  description: [
    <p key="p1">
      Cada momento —desde la postulación inicial hasta el primer día dentro del equipo— moldea la percepción del candidato sobre la organización, su intención de recomendarla y hasta sus ganas de volver a intentarlo en el futuro.
    </p>,

    <p key="p2">
      Cuando el reclutamiento se piensa como una experiencia integral, empática y coherente, el impacto es tangible. Y duradero.
    </p>,

    <h4 key="h4"><strong>Tres pilares para crear una experiencia de reclutamiento memorable:</strong></h4>,

    <ul key="list1">
      <li>
        <span className="icon-number">
          <Lightning size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        Generar más conexión: la postulación es la puerta de entrada a la cultura organizacional. Simplificar lo complejo, ofrecer información valiosa desde el inicio y mostrar, de forma auténtica, quiénes somos como organización.
      </li>
      <li>
        <span className="icon-number">
          <Lightning size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        Entrevistas como instancias de encuentro: escuchar con atención, comunicar con honestidad y valorar el recorrido del otro transforma una evaluación en una conversación con propósito.
      </li>
      <li>
        <span className="icon-number">
          <Lightning size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        Feedback que deja huella: incluso si no se continúa con una persona en el proceso, demuestra consideración y respeto.
      </li>
    </ul>,

    <h4 key="h5"><strong>Onboarding: el punto de partida de una relación duradera</strong></h4>,

    <ul key="list2">
      <li>
        <span className="icon-lightning">
          <Lightning size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        Planificar cada detalle del primer día.
      </li>
      <li>
        <span className="icon-lightning">
          <Lightning size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        Acompañar activamente el proceso de adaptación.
      </li>
      <li>
        <span className="icon-lightning">
          <Lightning size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        Conectar al nuevo colaborador con la cultura y las personas que la hacen realidad.
      </li>
      <li>
        <span className="icon-lightning">
          <Lightning size={24} weight="bold" color="#CDF26A" />
        </span>{" "}
        Escuchar sus impresiones para seguir mejorando.
      </li>
    </ul>,

    <br key="br2" />,

    <p key="p3">
      La experiencia define la percepción.
      En pymes y startups, donde cada incorporación cuenta y la cultura se construye día a día, cuidar la experiencia no es solo una buena práctica: es una <strong>inversión estratégica</strong> para atraer y fidelizar al talento que hace crecer el negocio.
    </p>,

    <p key="p4">
      ¿Liderás una pyme, startup o equipo en transformación?
    </p>,

    <p key="p5">
      <strong>¿Charlamos 💬?</strong> <br />
      <a href="mailto:hola@genhr.com.ar">hola@genhr.com.ar <CursorClick size={24} color="#CDF26A" weight="bold" /></a>
    </p>
  ],
};

export default CandidateExperienceImpact;
