interface ResourceBadgeProps{
    icon: string;
    label: string;
    value: number;
}

const ResourceBadge=({icon, label, value}: ResourceBadgeProps)=>{
    return(
        <div className="resource-badge">
            <span className="resource-icon">
                <img src={icon} alt="" />
            </span>
            <span>
                {label}: <strong>{value}</strong>
            </span>
        </div>
    )
}

export default ResourceBadge;