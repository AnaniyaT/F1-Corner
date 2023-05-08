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

function sortedEvent(events){
    const keys = {
        "pos" : 1,
        "driver": 2,
        "no": 3,
        "car": 4,
        "time": 5,
        "q1": 6,
        "q2": 7,
        "q3": 8,
        "gap": 9,
        "pts": 10,
        "laps": 11,
        "time/retired": 12
    }

    const sortedEvents = events
    sortedEvents.sort((a, b) => {return keys[a] - keys[b]})
    return sortedEvents
}

function isRelevant(key){
    const notRelevant = ["no", "laps", "gap"]

    return !notRelevant.includes(key)
}


export { getEvents, sortedEvent, isRelevant }