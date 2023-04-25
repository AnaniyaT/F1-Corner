import {useEffect, useState} from 'react'

import Skeleton from 'react-loading-skeleton';
import ConstructorChip from '../components/ConstructorChip';
import { GiFlyingFlag } from 'react-icons/gi';
import GenericSkeleton from '../components/GenericSkeleton';


function Constructors(){
    const [constructors, setConstructors] = useState([])
    const skeletons = Array(10).fill(0)

    useEffect (
        () => {
            const url = "https://ergast.com/api/f1/current/constructorStandings.json"
            fetch(url)
            .then((res) => res.json())
            .then((json) => setConstructors(json.MRData.StandingsTable.StandingsLists[0].ConstructorStandings))
        },
        []
    )

    return (
        <div>
            <div className="bg-white p-5 py-10 sm:p-10 my-5 sm:my-14 rounded-lg shadow-md">
                <h1 
                    className="text-2xl sm:text-3xl mb-1 font-bold flex justify-between
                ">
                    {constructors.length > 0 ? "2023 Formula 1 Season" : <span className='w-[70%]'> <Skeleton/></span> }
                    <span className='text-blue-400'>
                        {constructors.length > 0 ? <GiFlyingFlag/>: ""}
                    </span></h1>
                <p className="text-xl">{ constructors.length > 0 ? "Constructor Standings" : <Skeleton className='w-[30%]'/>}</p>
            </div>

            <div className="flex flex-col md:grid md:gap-6 grid-cols-2 lg:grid-cols-3 gap-2"> 
                {
                    constructors.length > 0 ? constructors.map(
                        (constructor) => {
                            return <ConstructorChip constructor={constructor}/>
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

export default Constructors;