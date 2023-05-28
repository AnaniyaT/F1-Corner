import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import LoadingSpinner from "./LoadingSpinner";

import { sortedEvent, isRelevant } from "../util/events";

function handleName(name) {
    const splitName = name.split(" ")

    return (
        <p>
            <span className="hidden font-semibold sm:block">{splitName.slice(0, -1).join(" ")}</span>
            <span className="sm:hidden font-semibold">{splitName.slice(-1)}</span>
        </p>
    )
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function ResultNavItem({eventName, ind, setEventInd, eventInd}){
    function changeEvent(){
        setEventInd(ind)
    }
    return (
        <div onClick={changeEvent} className="cursor-pointer px-1 hover:text-blue-400 text-center whitespace-nowrap text-sm  md:text-base pb-[.3rem]"
            style={{
                borderBottom: ind == eventInd ? "2px solid rgb(96 165 250)" : "none"
            }}
        >
            {eventName}
        </div>
    )
}

function RaceResult({race}){
    const [eventInd, setEventInd] = useState(4)
    return (
        <div className="flex flex-col h-full gap-2 sm:gap-4">
            <div className="bg-white p-8 text-lg font-bold rounded-md shadow-sm">
                {race ? race.raceName : <Skeleton className="h-8"/>}
            </div>
            <div className="bg-white h-full flex flex-col px-4 sm:px-8 py-8 rounded-md shadow-sm gap-8">
                <div className="flex gap-2 sm:gap-8 scrollbar-hide overflow-x-scroll">
                    {
                        race ? race?.events.map((event, index) => {
                            return <ResultNavItem ind={index} eventInd={eventInd} setEventInd={setEventInd} eventName={event.title} />
                        }) :
                        Array(5).fill(0).map(() => {
                            return <Skeleton className="h-8 mr-3 w-28"/>
                        })
                    }
                </div>

                <div className="h-full">
                    <table className="w-full h-full min-h-[30rem] text-xs sm:text-sm md:text-base">
                        <thead>
                            <tr className=" text-blue-500">
                                {
                                    race?.events[eventInd]?.results ? sortedEvent(Object.keys(race?.events[eventInd].results[0])).map(
                                        (key, ind) => {
                                            return <th className={`text-left px-2 py-4 font-semibold ${isRelevant(key) ? "" : "hidden md:table-cell"}`}>{capitalize(key)}</th>
                                        }
                                    ) : ""
                                }
                            </tr>
                        </thead>
                        <tbody className="h-full">
                                {
                                    race ?
                                    race?.events[eventInd]?.results ? race?.events[eventInd].results.map(
                                        (res, ind) => {
                                            return <tr className="even:bg-blue-50 align-middle justify-center my-4">
                                                    {sortedEvent(Object.keys(res)).map((r, i) => {
                                                        return <td className={`py-3 sm:py-4 h-full px-2 ${isRelevant(r) ? "" : "hidden md:table-cell"}`}>
                                                             {r == "driver" ? handleName(res[r]) : res[r]}
                                                             
                                                            </td>
                                                    })}
                                                </tr>
                                        }
                                    ) : <div className="h-[50%] text-2xl flex justify-center items-center">No results Yet :(</div> :
                                    <div className="h-[50%] text-2xl flex justify-center items-center"><LoadingSpinner/></div>
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RaceResult;