interface ResourceBadgeProps{
    icon: string;
    label: string;
    value: number;
}

const ResourceBadge = ({ icon, label, value }: ResourceBadgeProps) => {
  return (
    <div className="d-flex align-items-center gap-2 px-3 py-2 border rounded shadow-sm bg-light">
      <img
        src={icon}
        alt={label}
        className="img-fluid"
        style={{ width: "24px", height: "24px" }}
      />

      <span className="fw-semibold text-black">
        {label}: <span className="fw-bold">{value}</span>
      </span>
    </div>
  );
};


export default ResourceBadge;