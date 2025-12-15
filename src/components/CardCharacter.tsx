interface CardCharacterProps{
    name:     string;
    status:   string;
    image:    string;
}

const CharacterCard=({name,status,image}:CardCharacterProps)=>{
    return(
        <div className="">
            <img src={image} className="image"></img>
            <h4>{name}</h4>
            <p>status:{status}</p>
        </div>
    )
}

export default CharacterCard;