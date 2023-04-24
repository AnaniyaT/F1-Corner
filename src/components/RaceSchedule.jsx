import { useEffect, useState } from 'react';
import { FaFlagCheckered } from 'react-icons/fa';

const months = {"01":"Jan", "02":"Feb", "03":"Mar", "04":"Apr", "05":"May", "06":"Jun",
                "07":"Jul", "08":"Aug", "09":"Sep", "10":"Oct", "11":"Nov", "12":"Dec"}

function formatDate(date1, date2){
    date1 = date1.split("-")
    date2 = date2.split("-")

    let month1 = date1[1]
    let day1 = date1[2]
    let month2 = date2[1]
    let day2 = date2[2]

    // remove leading zero from the days
    if(day1[0] == "0"){
        day1 = day1[1]
    }

    if(day2[0] == "0"){
        day2 = day2[1]
    }

    
    return [months[month1], `${day1}-${day2}`]
    

    return [`${months[month1]}-${months[month2]}`, `${day1}-${day2}`]
}

function RaceSchedule({race, currRound}) {

    return (
        <div 
            className="bg-white p-4 rounded-md shadow-md "
            style={{
                background: race.round == currRound ? "linear-gradient(90deg, rgba(255,255,255,1) 70%, rgba(174,215,242,0.9773242630385488) 99%, rgba(95,206,230,1) 100%)" : 'white'
            }}
        >   
            <h2 className="text-sm w-full flex justify-between text-blue-400">
                Round {race.round}{parseInt(race.round )+ 0 < parseInt(currRound) ? <span><FaFlagCheckered/></span>: ""}
                {race.round == currRound ? " - Up Next" : ""}
            </h2>
            <div className="flex gap-2 mt-1">
                <div className="flex flex-col min-w-[3.5rem] pr-2 border-r-2 justify-center">
                    <span className="font-bold mb-[-.3rem]">{formatDate(race.FirstPractice.date, race.date)[0]}</span>
                    <span>{formatDate(race.FirstPractice.date, race.date)[1]}</span>
                </div>
                <div>
                    <h3 className="font-bold flex justify-between">{race.Circuit.Location.country}</h3>
                    <p className="text-[.9rem]">{race.raceName}</p>
                </div>
            </div>
        </div>
    )
}

export default RaceSchedule