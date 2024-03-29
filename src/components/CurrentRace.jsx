import countryCodes from '../Json/countryCodes.json'
import Skeleton from 'react-loading-skeleton'

import { formatDate, formatSingledate, formatTime12, changeToClientTimeZone } from '../util/dateTime'
import { getEvents } from '../util/events'
import { useEffect, useState } from 'react'

let days = ["Fri", "Fri", "Sat", "Sat", "Sun"]
let eventNames = {"FirstPractice": "Practice 1", "SecondPractice": "Practice 2", "ThirdPractice": "Practice 3"}

function ScheduleChip({name, date, time}){
    return (
        <div 
            className="max-w-xl w-full flex gap-4 sm:gap-2 rounded-xl items-center bg-white 
                        px-5 py-2 justify-around transition-all hover:shadow-[0_0_2rem_#ddd]
                        sm:shadow-sm border-2 sm:border-none sm:px-5
            ">
            <p className="font-semibold flex-1 text-blue-400 text-base sm:text-xl">
                {name}
            </p>
            <p className="flex-1 text-sm sm:text-lg">{date}</p>
            <p className=" flex-1 rounded-full text-sm sm:text-xl bg-gray-100 p-2">{time}</p>
        </div>
    )
}

function CurrentRace({race}){
    const [trackMap, setTrackMap] = useState()
    useEffect(() => {
        const url = `https://api.npoint.io/a76aa8fd0b3a4314435e/races/${race?.round}/trackMap`
        fetch(url)
        .then((res) => res.json())
        .then((json) => setTrackMap(json))
    }, [race])
    return (
        <div 
            className="bg-white p-5 py-10 sm:p-10 my-10 sm:my-20 rounded-lg shadow-md"
        >
            <p className="font-bold text-blue-600 transition-transform hover:translate-x-2">
                {race.round ?"Round " + race.round + " -  Up Next": <Skeleton className='h-8'/>}
            </p>
            <div className="mt-[1rem] w-full flex items-center flex-wrap lg:flex-nowrap gap-4 sm:gap-16">
                <div className="w-full">
                    <div className="mt-4 flex justify-between align-middle">
                        <p className="text-xl sm:text-2xl">
                            {formatDate(race.FirstPractice?.date, race.date) || <Skeleton className='w-28 h-8'/>}
                        </p>
                        <div className="rounded-md overflow-hidden w-14">
                             {race.Circuit ? <img 
                                className="w-full h-full bg-gray-100
                                " src={`https://flagcdn.com/w80/${countryCodes[race.Circuit?.Location.country]}.png`}
                            /> : <Skeleton className='w-14 h-8'/>} 
                        </div>
                    </div>

                    <div>
                        <h1 className="text-[2rem] sm:text-[3rem] font-bold">
                            {race.Circuit?.Location.country || <Skeleton/>}
                        </h1>
                        <h2 className="text-[1.2rem] sm:text-[1.5rem] mt-4 border-b-2 pb-2 border-gray-300">
                            {race.raceName ? "Formula 1 " + race.raceName : <Skeleton className='h-10'/>}
                        </h2>
                        <div className="grid px-4 w-full mx-auto place-items-center max-w-[30rem] lg:max-w-[25rem] pt-8">
                           { trackMap ? <img className=" transition-transform duration-500 transform hover:scale-105" src={trackMap} alt="" /> :
                            <Skeleton className='w-[20rem] h-[15rem] rounded'/>}
                           
                        </div>
                    </div>

                </div>
                <div className="text-center max-w-2xl mx-auto w-full rounded-2xl sm:p-8 sm:bg-gray-100 py-10 flex flex-col gap-4 items-center justify-center">
                       {
                         getEvents(race).map(
                            (event, ind) => {
                                return (
                                    <ScheduleChip
                                        name={eventNames[event.name] != undefined ? eventNames[event.name] : event.name}
                                        date={days[ind]+ " " + formatSingledate(event.date)}
                                        time={formatTime12(changeToClientTimeZone(event.time))}
                                    />
                                )
                            }
                         )
                       }
                </div>
            </div>
        </div>
    )
}

export default CurrentRace;