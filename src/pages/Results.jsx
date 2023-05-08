import { useEffect, useState } from "react";
import RaceResult from "../components/RaceResult";
import ResultsSideNav from "../components/ResultsSideNav";
import { GiFlyingFlag } from "react-icons/gi";

function Results(){
    const [raceInd, setRaceInd] = useState(0);
    const [races, setRaces] = useState(null);
    
    
    useEffect(() => {
        const url = "https://api.npoint.io/a76aa8fd0b3a4314435e";
        fetch(url)
        .then(response => response.json())
        .then(data => setRaces(data.races))
    }, [])

    return (
        <div>
            <div className="bg-white p-5 py-10 sm:p-10 my-5 sm:my-14 rounded-lg shadow-md">
                <h1 className="text-2xl sm:text-3xl mb-1 font-bold flex justify-between">2023 Formula 1 Season<GiFlyingFlag className="text-blue-400"/></h1>
                <p className="text-xl">Grand Prix Results</p>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-2 md:gap-8">

                <ResultsSideNav races={races} raceInd={raceInd} setRaceInd={setRaceInd}/>
                <div className="flex-grow">

                    <RaceResult race={races ? races[raceInd] : null}/>
                </div>
            </div>
            
        </div>
    )
}

export default Results;