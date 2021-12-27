import IMatrixDateObj from "../Types/CustomDate";

export const months = ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", 
"November", "December"];
 
export const weekDays:IMatrixDateObj[] = [
    {id: "1", date: new Date(), hasAppointment: false, title: "Su", emptyDate: true, tempCounter: 0},
    {id: "2", date: new Date(), hasAppointment: false, title: "Mo", emptyDate: true, tempCounter: 0},
    {id: "3", date: new Date(), hasAppointment: false, title: "Tu", emptyDate: true, tempCounter: 0},
    {id: "4", date: new Date(), hasAppointment: false, title: "We", emptyDate: true, tempCounter: 0},
    {id: "5", date: new Date(), hasAppointment: false, title: "Th", emptyDate: true, tempCounter: 0},
    {id: "6", date: new Date(), hasAppointment: false, title: "Fr", emptyDate: true, tempCounter: 0},
    {id: "7", date: new Date(), hasAppointment: false, title: "Sa", emptyDate: true, tempCounter: 0},
]

export const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];