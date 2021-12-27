//Data Model For Rendering Matrix
export default interface IMatrixDateObj {
    id: string,
    date: Date,
    hasAppointment: boolean
    title: string //for headers like "sun, mon, tue"
    emptyDate: boolean //for days in the presenting month without dates (the days that carry over or into previous/next months)
    tempCounter: number //using this to generate dates in the second loop until i find how to generate dates in first loop
}