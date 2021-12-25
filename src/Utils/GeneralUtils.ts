export const getReadableDateString = (date: string) =>
    new Date(date).toLocaleDateString("default", {
        day: "2-digit",
        month: "short",
        // month: "long",
        year: "numeric",
    });

export const getReadableTimeString = (date: string) =>
    new Date(date).toLocaleTimeString("default", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

export const convertDaysIntoNearestUnit = (days: number): string => {
    if (days < 7) {
        return String(days + " days ago");
    } else if (7 < days && days < 30) {
        return String(Math.trunc(days / 7) + " weeks ago");
    } else if (30 < days) {
        return String(Math.trunc(days / 30) + " months ago");
    }

    return "";
}


export const isDatesEqual = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

export const checkDatesWithOnlyMonthAndDay = (date: Date, dates: Date[]): boolean => {
    dates.forEach(element => {
        if (isDatesEqual(date, element)) {
            return true;
        }
    });

    return false;
}

export const checkIfNumber = (o: any) => {
    const s = String(o)
    return !isNaN(+s) && isFinite(+s) && (typeof o === 'number' || !/e/i.test(s))
}