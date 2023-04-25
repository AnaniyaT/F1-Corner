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

export { getEvents }