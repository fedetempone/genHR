const LoadingButton = ({ isLoading, children, ...props }) => {
    return (
        <button {...props} disabled={isLoading || props.disabled} className={props.className}>
            {isLoading ? (
                <>
                    <span className="loader" /> {children || "Cargando..."}
                </>
            ) : (
                children
            )}
            <style>{`
  .loader {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #cdf26a;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 8px;
    animation: spin 0.8s linear infinite;
    vertical-align: middle;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`}</style>
        </button>
    );
};

export default LoadingButton;
