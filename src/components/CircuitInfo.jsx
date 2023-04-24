import Skeleton from "react-loading-skeleton";
import {useEffect, useState} from 'react';

function CircuitInfo({name, race, circuitId}){
    const [circuit, setCircuit] = useState({})

    useEffect(
      () => {
        console.log("bruh")
        const circuitUrl = `https://api.npoint.io/2371036e6093b0f92074/${circuitId}`
        fetch(circuitUrl)
        .then((res) => res.json())
        .then((json) => setCircuit(json))
      },
      [race]
    )
    

    return (
        <div className="bg-white p-10 my-20 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-8">{name || <Skeleton/>}</h1>
            <p className="text-7xl sm:text-8xl font-semibold mb-8 gap-3 flex items-end sm:block">
                {circuit.circuitLength?.slice(0, -2) || <Skeleton className="w-[18rem] sm:w-[30rem]"/>} 
                <span className="text-lg">{circuit.circuitLength ? "KM" : ""}</span>
            </p>
            <div className="flex justify-between gap-8 flex-wrap">
                <div>
                    <p className="text-blue-400">{circuit.numberOfLaps ? "Number Of Laps": ""}</p>
                    <p className="text-4xl ">{circuit.numberOfLaps || <Skeleton className="w-32"/>}</p>
                </div>
                <div>
                    <p className="text-blue-400">{circuit.raceDistance ? "Race Distance": ``}</p>
                    <p className="text-4xl">{circuit.raceDistance?.slice(0, -2)  || <Skeleton className="w-32"/>}</p>
                </div>
                <div>
                    <p className="text-blue-400">{circuit.lapRecord ? "Lap record": ""}</p>
                    <p className="text-4xl  flex sm:block flex-col">
                        {circuit.lapRecord?.slice(0, circuit.lapRecord?.indexOf(" ")) || <Skeleton className="w-32"/>} 
                        <span className="text-sm">{circuit.lapRecord?.slice(circuit.lapRecord?.indexOf(" "))}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CircuitInfo;