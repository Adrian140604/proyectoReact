interface ResourceBadgeProps{
    icon: string;
    label: string;
    value: number;
}

const ResourceBadge=({icon, label, value}: ResourceBadgeProps)=>{
    return(
        <div className="resource-badge">
            <span className="resource-icon">{icon}</span>
            <span>
                {label}: <strong>{value}</strong>
            </span>
        </div>
    )
}

export default ResourceBadge;