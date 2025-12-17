const Error = () => {
  return (
    <>
        <h1> Error 404</h1>
        <span className="badge d-inline-flex align-items-center gap-2 py-1 px-2 rounded-pill bg-success-subtle text-success border border-success-subtle fw-medium">
        <span className="d-inline-flex align-items-center">
            <i className="bi bi-currency-euro"></i>
        </span>
        <span className="text-nowrap">Dinero</span>
        <span className="badge bg-transparent border-0 p-0 m-0 text-nowrap">15.200 €</span>
        </span>

        <span className="badge d-inline-flex align-items-center gap-2 py-1 px-2 rounded-pill bg-warning-subtle text-warning border border-warning-subtle fw-medium">
        <span className="d-inline-flex align-items-center">
            <i className="bi bi-fuel-pump"></i>
        </span>
        <span className="text-nowrap">Combustible</span>
        <span className="badge bg-transparent border-0 p-0 m-0 text-nowrap">75%</span>
        </span>

    </>
  );
};

export default Error;