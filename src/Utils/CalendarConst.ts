import IMatrixDateObj from '../Types/MatrixDateObj';

export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const weekDays: IMatrixDateObj[] = [
    {
        id: '1',
        date: new Date(),
        hasAppointment: false,
        title: 'Su',
        isDayHeader: true,
        emptyDate: true,
        tempCounter: 0,
    },
    {
        id: '2',
        date: new Date(),
        hasAppointment: false,
        title: 'Mo',
        isDayHeader: true,
        emptyDate: true,
        tempCounter: 0,
    },
    {
        id: '3',
        date: new Date(),
        hasAppointment: false,
        title: 'Tu',
        isDayHeader: true,
        emptyDate: true,
        tempCounter: 0,
    },
    {
        id: '4',
        date: new Date(),
        hasAppointment: false,
        title: 'We',
        isDayHeader: true,
        emptyDate: true,
        tempCounter: 0,
    },
    {
        id: '5',
        date: new Date(),
        hasAppointment: false,
        title: 'Th',
        isDayHeader: true,
        emptyDate: true,
        tempCounter: 0,
    },
    {
        id: '6',
        date: new Date(),
        hasAppointment: false,
        title: 'Fr',
        isDayHeader: true,
        emptyDate: true,
        tempCounter: 0,
    },
    {
        id: '7',
        date: new Date(),
        hasAppointment: false,
        title: 'Sa',
        isDayHeader: true,
        emptyDate: true,
        tempCounter: 0,
    },
];

export const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
