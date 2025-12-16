import { useShip } from "../context/ShipContext";
import CharacterCard from './CardCharacter';
import ResourceBadge from "./ResourceBadge";

const CommandBridge = () => {

  const {ship} = useShip();
  //const crew = ship.crew;
  
  const crew = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1"
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2"
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: new Date("2017-11-04T18:48:46.250Z")
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1"
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/3"
    ],
    url: "https://rickandmortyapi.com/api/character/2",
    created: new Date("2017-11-04T18:50:21.651Z")
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20"
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7"
    ],
    url: "https://rickandmortyapi.com/api/character/3",
    created: new Date("2017-11-04T19:09:56.428Z")
  }
];

  if(ship.fuelLevel==0 || ship.fuelLevel<0){
    <>
      <div className="container text-center mt-5">
        <div className="alert alert-danger" role="alert">
          🚨 GAME OVER 🚨
        </div>
      </div>
    </>
  }

  if(crew.length == 0){

    return(
          <>
            <div className="container text-center mt-5">
              <div className="alert alert-warning" role="alert">
                Inviting to hire crew...
              </div>
            </div>
          </>
    );

  }else{

    return (
      <>
        <div>
          <div>
          </div>
          <div className="container mt-4">
            <h2 className="text-center mb-4">Crew Members</h2>
            <div className="row">
              {crew.map((character) => (
                <div className="col-md-4 mb-3">
                  <CharacterCard {...character} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );



  }
};

export default CommandBridge;