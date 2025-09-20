const Waves = ({ marginTop = 0, marginBottom = 0 }) => {
  return (
    <div className="waves-container" style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }}>
        
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5F0FF" /> 
            <stop offset="35%" stopColor="#EBDCFB" /> 
            <stop offset="70%" stopColor="#B783EF" /> 
            <stop offset="100%" stopColor="#171D35" /> 
          </linearGradient>

          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 
               58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>

        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill="url(#waveGradient)" opacity="0.8" />
          <use href="#gentle-wave" x="48" y="3" fill="url(#waveGradient)" opacity="0.6" />
          <use href="#gentle-wave" x="48" y="5" fill="url(#waveGradient)" opacity="0.4" />
          <use href="#gentle-wave" x="48" y="7" fill="url(#waveGradient)" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
};

export default Waves;


