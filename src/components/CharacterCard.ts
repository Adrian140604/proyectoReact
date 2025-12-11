let urlCharacter = "https://rickandmortyapi.com/api/character";

export interface CharacterInterface {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export default async function allCharacter(){
    let characters = await fetch(urlCharacter,{
        method:'GET'
    });

    let listCharacter = await characters.json();

    listCharacter.map((c :CharacterInterface) => (
        `<div class="col">  
                <div class="candidate-card">
                    <img src="https://via.placeholder.com/120/4b6584/ffffff?text=Alien+1" class="candidate-img" alt="Alien 1">
                    <span class="status-badge status-dead">DEAD</span>
                </div>
        </div>`
    ))
    
    return 
}