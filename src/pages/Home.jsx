import { useEffect, useState } from 'react'

import countryCodes from '../Json/countryCodes.json'

import Circuitinfo from '../components/CircuitInfo'
import CurrentRace from '../components/CurrentRace'


function Home(){
    const [race, setRace] = useState({})
    
    useEffect(
        () => {
            const url = "https://ergast.com/api/f1/current/next.json"
            fetch(url)
            .then((res) => res.json())
            .then((json) => setRace(json.MRData.RaceTable.Races[0]))
        },
        []
    )

    return (
        <div>
            <CurrentRace race={race}/>
            <Circuitinfo name={race.Circuit?.circuitName} race={race} circuitId={race.Circuit?.circuitId}/>
        </div>
    )
}

export default Home