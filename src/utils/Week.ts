import moment from "moment";


export const Week = () => {
    const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

    moment.updateLocale('en', {week: {dow: 1}})

    const week: string[] = []

    let i = 0
    let curDay = moment().startOf('week')
    while (i < 7) {
        week.push(curDay.format('DD'))
        curDay = curDay.add(1, 'd')
        i++
    }
    return [week, daysOfWeek]
}
