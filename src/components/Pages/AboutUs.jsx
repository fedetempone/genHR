
import { useEffect, useRef } from "react";
import '../../styles/pages/aboutUs.css';
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

const AboutUs = () => {
  const pathRef = useRef();

  useEffect(() => {
    const shapes = [
      "M362.4,59.2c41.3,31.7,73.4,69.5,88.9,121.7c16.1,54.2,2.8,111.4-23.7,163.6c-27.1,53.2-66.2,96.3-118.8,124.6c-54.2,29.3-116,40.6-177.3,27.1C9.6,488.9-51.7,422.3-51.7,351.6c0-70.6,35.2-126,89.4-171.1c54.7-45.6,117.8-71.1,192.5-98C274.5,6.1,321.1,28.6,362.4,59.2z",
      "M342.3,121.2c19.3,24.4,26.5,53.2,30.2,85.6c4,35,4.7,70-13,101.9c-16.7,30.3-46.7,57.1-81.5,70.8c-34,13.2-71.8,14.6-107.5,6.4c-35.8-8.2-68.8-26.7-91.8-51.8C-4.1,299.7,7,260.6,11.8,220.4c4.8-40.2,5.2-80.4,19.9-115.1c15-35.6,40.7-65.4,74.7-86.7C149,1.7,185.1-4.7,218.4,4.2c33.3,8.9,64.2,26.4,85.1,51.8C324.4,80.4,332.9,103.5,342.3,121.2z",
      "M320,80c30,40,50,90,40,140s-50,100-100,130c-50,30-120,40-180,20S-20,300,0,240s60-120,120-160S290,40,320,80z"
    ];

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    shapes.forEach((shape, i) => {
      tl.to(pathRef.current, {
        duration: 1,
        morphSVG: shape,
        ease: "sine.inOut"
      });
    });

    // desplazamiento horizontal del path
    gsap.to(pathRef.current, {
      duration: 2,
      x: 100,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="about-us-wrapper">
      <div className="about-us-container">
        <div className="about-us-content">
          <h2 className="about-us-title">Quiénes Somos</h2>
          <p className="about-us-text">
            En genHR acompañamos a pymes y startups en la gestión y desarrollo de su talento.<br />
            No somos una consultora tradicional: <strong>somos un equipo que combina experiencia y cercanía</strong>.<br />
            Nos involucramos de verdad en el día a día de cada empresa, para diseñar soluciones que se ajustan a su realidad y evolucionan con ella.<br />
            Contamos con <strong>más de 10 años de experiencia en Recursos Humanos, metodologías ágiles y cultura organizacional</strong>.<br />
            Nuestro propósito es claro: impulsar el crecimiento de tu negocio poniendo a las personas en el centro.
          </p>

        </div>
        <div className="about-us-image-wrapper">
          {/* imagen con clip-path para desktop */}
          <svg className="about-us-image-desktop" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <clipPath id="clip">
                <path
                  ref={pathRef}
                  d="M362.4,59.2c41.3,31.7,73.4,69.5,88.9,121.7c16.1,54.2,2.8,111.4-23.7,163.6c-27.1,53.2-66.2,96.3-118.8,124.6c-54.2,29.3-116,40.6-177.3,27.1C9.6,488.9-51.7,422.3-51.7,351.6c0-70.6,35.2-126,89.4-171.1c54.7-45.6,117.8-71.1,192.5-98C274.5,6.1,321.1,28.6,362.4,59.2z"
                />
              </clipPath>
            </defs>
            <image xlinkHref="/img/AboutUs6.png" width="500" height="500" clipPath="url(#clip)" preserveAspectRatio="xMidYMid slice" />
          </svg>

          {/* imagen normal para mobile */}
          <img className="about-us-image-mobile" src="/img/AboutUs5.png" alt="Quiénes somos" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


