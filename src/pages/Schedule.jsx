import { useEffect, useState } from 'react'

import { GiFlyingFlag } from 'react-icons/gi'
import RaceSchedule from '../components/RaceSchedule'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import GenericSkeleton from '../components/GenericSkeleton'

function Schedule() {
    const [races, setRaces] = useState([])
    const [currRound, setCurrRound] = useState("0")
    const skeletons = Array(20).fill(0)
    
    useEffect(
        () => {
            
            let url = "https://ergast.com/api/f1/current.json"

            fetch(url)
            .then((response) => response.json())
            .then((json) => {setRaces(json.MRData.RaceTable.Races)});
            
            let url1 = "https://ergast.com/api/f1/current/next.json"

            fetch(url1)
            .then((response) => response.json())
            .then((json) => {setCurrRound(json.MRData.RaceTable.Races[0].round)});
        },
        []
    )
    return (
        <div className="">
            <div className="bg-white p-5 py-10 sm:p-10 my-5 sm:my-14 rounded-lg shadow-md">
                <h1 
                    className="text-2xl sm:text-3xl mb-1 font-bold flex justify-between
                ">
                    {races.length > 0 ? races[0].season + " Formula 1 Season" : <span className='w-[70%]'><Skeleton/></span> }
                    <span className='text-blue-400'>
                        {races.length > 0 ? <GiFlyingFlag/>: ""}
                    </span></h1>
                <p className="text-xl">{races.length > 0 ? "Schedule" : <Skeleton className='w-[30%]'/>}</p>
            </div>

            <div className='flex flex-col gap-2 md:gap-6 md:grid md:grid-cols-2 lg:grid-cols-3'>
                {
                   races.length > 0 ? races.map(
                        (race) => {
                            return <RaceSchedule race={race} currRound={currRound}/>
                        }
                    ) : skeletons.map(
                        () => {
                            return <GenericSkeleton/>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Schedule