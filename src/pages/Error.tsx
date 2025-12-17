const Error = () => {
  return (
    <> 
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-5 text-center">
        <h1 className="display-1 text-danger fw-bold">¡ERROR!</h1>
        <p className="fs-4 text-muted">
          Algo salió mal. Intenta nuevamente más tarde.
        </p>
        <a href="/" className="btn btn-danger btn-lg mt-3">
          Volver al inicio
        </a>
      </div>
    </div>
    </>
  );
};

export default Error;