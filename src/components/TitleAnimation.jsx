import React, { useEffect } from "react";

const TitleAnimation = ({ text }) => {
  const animationDuration = 1.2; // duración de cada letra
  const delayPerLetter = 0.1; // retraso entre letras
  const extraPause = 3; // segundos extra antes de reiniciar

  useEffect(() => {
    const element = document.querySelector(".title-animate");
    if (!element) return;

    const spans = element.querySelectorAll("span");
    const totalTime =
      (animationDuration + delayPerLetter * (spans.length - 1) + extraPause) * 1000;

    const restartAnimation = () => {
      spans.forEach((span) => {
        const delay = span.style.animationDelay;
        span.style.animation = "none";
        void span.offsetWidth; // fuerza reflow
        span.style.animation = `dropVanish ${animationDuration}s forwards ${delay}`;
      });
    };

    restartAnimation();
    const interval = setInterval(restartAnimation, totalTime);

    return () => clearInterval(interval);
  }, [text]);

  const letters = text.split("").map((char, i) => (
    <span
      key={i}
      style={{
        animationDelay: `${i * delayPerLetter}s`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <>
      <div className="title-animate">{letters}</div>

      <style jsx>{`
        .title-animate {
          display: inline-block;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }

        .title-animate::after {
          content: "";
          position: absolute;
          display: block;
          width: 20%;
          height: 3px;
          background: #cdf26a;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .title-animate span {
          display: inline-block;
          color: #000;
          opacity: 0;
          transform: translate(0, -100px) rotate(360deg) scale(0);
          animation: dropVanish ${animationDuration}s forwards;
        }

        @keyframes dropVanish {
          30% {
            transform: translate(0, -50px) rotate(180deg) scale(1);
          }
          50% {
            transform: translate(0, 20px) scale(0.8) rotate(0deg);
            opacity: 1;
          }
          80% {
            transform: translate(-100px, -100px) scale(1.5) rotate(-180deg);
            opacity: 0;
          }
          100% {
            transform: translate(0) scale(1) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default TitleAnimation;
