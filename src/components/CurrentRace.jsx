import countryCodes from '../Json/countryCodes.json'
import Skeleton from 'react-loading-skeleton'

let days = ["Fri", "Fri", "Sat", "Sat", "Sun"]

let months = {"01":"Jan", "02":"Feb", "03":"Mar", "04":"Apr", "05":"May", "06":"Jun",
            "07":"Jul", "08":"Aug", "09":"Sep", "10":"Oct", "11":"Nov", "12":"Dec"}
let eventNames = {"FirstPractice": "Practice 1", "SecondPractice": "Practice 2", "ThirdPractice": "Practice 3"}

function formatSingledate(date){
    if(date == undefined) {
        return ""
    }
    date = date.split("-")
    let day = date[2]
    let month = date[1]

    if(day[0] == "0"){
        day = day[1]
    }

    return `${months[month]} ${day}`

}


function formatDate(date1, date2){
    if(date1 == undefined || date2 == undefined)  {
        return ""
    }
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

    if (month1 == month2){
        return `${months[month1]} ${day1}-${day2}`
    }

    return `${months[month1]} ${day1} - ${months[month2]} ${day2}`
}

function getEvents(race){
    if (race.FirstPractice == undefined){
        return []
    }
    let normalOrder = ["FirstPractice", "SecondPractice", "ThirdPractice", "Qualifying"]
    let sprintOrder = ["FirstPractice", "Qualifying", "SecondPractice", "Sprint"]

    let order = normalOrder

    if (race.Sprint != undefined) {
        order = sprintOrder
    }

    let events = []

    for (let event of order) {
        let obj = {}
        obj.name = event
        obj.date = race[event]["date"]
        obj.time = race[event].time
        events.push(obj)
    }

    let raceObj = {"name": "Race", "time": race.time, "date": race.date}

    events.push(raceObj)

    return events
}

function changeToClientTimeZone(time){
    time = time.split(":").map(Number)
    let offset = -new Date().getTimezoneOffset()
    let hrOffset = Math.floor(offset / 60)
    let minOffset = (offset - (hrOffset) * 60)

    time[0] += hrOffset
    time[1] += minOffset

    if (time[1] > 59){
        time[0] += 1
        time[1] -= 60
    }

    if (time[0] > 23){
        time[0] -= 24
    }
    
    for (let ind in time){
        time[ind] = time[ind].toString()
        if (time[ind].length == 1){
            time[ind] = "0" + time[ind]
        }
    }

    return time.join(":")
}

function formatTime12(time){
    time = time.split(":")
    let suffix = "AM"

    if (Number(time[0]) > 11){
        suffix = "PM"
    }

    if (Number(time[0])> 12){
        time[0] = (Number(time[0]) - 12).toString()
    }

    if (time[0] == "00"){
        time[0] = "12"
    }

    time.pop()

    return time.join(":") + " " + suffix 
}


function ScheduleChip({name, date, time}){
    return (
        <div 
            className="flex gap-4 sm:gap-2 rounded-xl items-center bg-white 
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
    return (
        <div 
            className="bg-white p-5 py-10 sm:p-10 my-10 sm:my-20 rounded-lg shadow-md"
        >
            <p className="font-bold text-blue-600 transition-transform hover:translate-x-2">
                {race.round ?"Round " + race.round + "-  Up Next": <Skeleton/>}
            </p>
            <div className="mt-[1rem] w-full flex flex-wrap lg:flex-nowrap gap-4 sm:gap-16">
                <div className="w-full">
                    <div className="mt-4 flex justify-between align-middle">
                        <p className="text-xl sm:text-2xl">
                            {formatDate(race.FirstPractice?.date, race.date) || <Skeleton className='w-20'/>}
                        </p>
                        <div className="rounded-md overflow-hidden w-14">
                            <img 
                                className="w-full h-full 
                                " src={`https://flagcdn.com/w80/${countryCodes[race.Circuit?.Location.country]}.png`}
                            />
                        </div>
                    </div>

                    <div>
                        <h1 className="text-[2rem] sm:text-[3rem] font-bold">
                            {race.Circuit?.Location.country || <Skeleton/>}
                        </h1>
                        <h2 className="text-[1.2rem] sm:text-[1.5rem] mt-4 border-b-2 pb-2 border-gray-300">
                            {race.raceName ? "Formula 1 " + race.raceName : <Skeleton/>}
                        </h2>
                        <div className="flex max-w-[20rem] pt-8">
                            <img className="w-[20rem] bg-gray-200  transition-transform duration-500 transform hover:scale-105" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbDOv98G2XsDcMQgwD2xGzzjUrM1AhrcBYZokEZGyf9D51zQ-QmeteuNn45_AUgXTorY&usqp=CAU" alt="" />
                        </div>
                    </div>

                </div>
                <div className="text-center w-full rounded-2xl sm:p-8 sm:bg-gray-100 py-10 flex flex-col gap-4 justify-center">
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