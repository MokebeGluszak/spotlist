import { split, map, slice } from 'lodash'
import * as moment from 'moment'

const HEADERS: string[] = [
    'Channel', 'Date',
    'Hour', 'Description',
    'Typ.1', 'Typ.2',
    'Typ.3', 'End Hour',
    '001_a_16-49_cpp', '003_a_04-12',
    '015_a_16-49', '016_a_20-44_100+',
    '045_f_20-49', '209_a_30+',
    'Universe\r'
]

class Spot {
    public dateTime: moment.Moment
    public constructor(
        public channel: string,
        public description: string,
        date: moment.Moment,
        startHour: moment.Moment,
    ) {
        this.dateTime = moment([date.year(), date.month(), date.date(), startHour.hour(), startHour.minute(), startHour.second()]) // TODO: musimy wrocic
    }
}

export function loadSpots(data: string): Spot[] {
    let spotRows = split(data, "\n")
    let spotRows_safe = slice(spotRows, 1, spotRows.length - 1)
    let spots = map(spotRows_safe, returnSpot)

    return spots
}

function returnSpot(spotRow: string): Spot {
    let spotArr: string[] = split(spotRow, ";")
    let channel = spotArr[0]
    let date: string = spotArr[1]
    let startHour: string = spotArr[2]
    let description = spotArr[3]


    let date_safe: moment.Moment = moment(date, "YYYY-MM-DD") //2010-01-01
    let startHour_safe: moment.Moment = moment(startHour, "HH:mm:ss") //02:03:48

    if (!date_safe.isValid()) {
        throw new Error("zjebałeś date")
    }

    if (!startHour_safe.isValid()) {
        throw new Error("godzine w pliku")
    }
    let spot = new Spot(channel, description, date_safe, startHour_safe)
    return spot
}

// class Spot {
//     channel: string
//     date: Date
//     startHour: Date
//     description: string

//     public constructor(lChannel: string, lDate: Date, lStarHour: Date, lDescription: string) {
//         this.channel = lChannel
//         this.date = lDate
//         this.startHour = lStarHour
//         this.description = lDescription
//     }
// }

