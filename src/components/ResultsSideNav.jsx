import Skeleton from "react-loading-skeleton"

function RaceOption({title, ind, raceInd, setRaceInd}){
    function changeRace(){
        setRaceInd(ind)
    }
    return (
        <div 
            onClick={changeRace}
            className="px-4 py-2 whitespace-nowrap text-sm sm:text-base font-semibold hover:bg-blue-50 cursor-pointer rounded text-center transition-colors"
            style={{
                background: raceInd == ind ? "rgba(174,215,242,0.9773242630385488)" : ""   
            }}
        >
            {title}
        </div>

    )
}

function ResultsSideNav(props){

    return (
        <div className="bg-white scrollbar-hide flex lg:flex-col overflow-x-scroll sm:gap-4 min-w-[15rem] p-4 rounded-md shadow-md">
            <h2 className="text-2xl hidden lg:block font-bold text-center pb-2 text-blue-400             
            ">Grand Prix</h2>
            {
                props.races != null ? props.races.map((race, ind) => {
                    return <RaceOption title={race.raceLocation} ind={ind} raceInd={props.raceInd} setRaceInd={props.setRaceInd} />
                }) : Array(20).fill(0).map(() => {
                    return <Skeleton className="h-8 mr-4 md:mr-0 w-28 lg:w-52"/>
                })
            }
            
        </div>
    )
}

export default ResultsSideNav;