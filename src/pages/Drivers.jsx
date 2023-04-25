import Skeleton from "react-loading-skeleton";
import { GiFlyingFlag } from "react-icons/gi";
import DriverChip from "../components/DriverChip";
import GenericSkeleton  from '../components/GenericSkeleton'

import { useEffect, useState } from 'react'

function Drivers() {
    const [drivers, setDrivers] = useState([])
    const skeletons = Array(20).fill(0)

    useEffect (
        () => {
            let url = "https://ergast.com/api/f1/current/driverStandings.json";
            fetch(url)
            .then((res) => res.json())
            .then((json) => {setDrivers(json.MRData.StandingsTable.StandingsLists[0].DriverStandings)})
        }, 
        []
    )


    return (
        <div>
            <div className="bg-white p-5 py-10 sm:p-10 my-5 sm:my-14 rounded-lg shadow-md">
                <h1 
                    className="text-2xl sm:text-3xl mb-1 font-bold flex justify-between
                ">
                    {drivers.length > 0 ? "2023 Formula 1 Season" : <span className='w-[70%]'><Skeleton/></span> }
                    <span className='text-blue-400'>
                        {drivers.length > 0 ? <GiFlyingFlag/>: ""}
                    </span></h1>
                <p className="text-xl">{ drivers.length > 0 ? "Driver Standings" : <Skeleton className='w-[30%]'/>}</p>
            </div>

            <div className="flex flex-col md:grid md:gap-6 grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    drivers.length > 0 ? drivers.map(
                        (driver) => {
                            return <DriverChip driver={driver}/>
                        }
                    ) :

                    skeletons.map(
                        () => {
                            return <GenericSkeleton/>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Drivers;