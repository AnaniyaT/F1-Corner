const months = {"01":"Jan", "02":"Feb", "03":"Mar", "04":"Apr", "05":"May", "06":"Jun",
                "07":"Jul", "08":"Aug", "09":"Sep", "10":"Oct", "11":"Nov", "12":"Dec"}

function formatDate(date1, date2, type=1){
    if (date1 == undefined){
        return
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

    if(type == 1) {
        return `${months[month1]} ${day1} - ${months[month2]} ${day2}`
    }
    
    return [months[month1], `${day1}-${day2}`]
}

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


export { formatDate, formatSingledate, formatTime12, changeToClientTimeZone }