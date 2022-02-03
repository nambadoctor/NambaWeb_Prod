import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { SetSelectedDateRange } from '../Actions/SelectedDateActions';
import { RootState } from '../store';
import { generateMatrix } from '../Utils/CalendarUtils';
import { checkIfDateExists } from '../Utils/GeneralUtils';
import IMatrixDateObj from '../Types/MatrixDateObj';
import ICustomDateData from '../Types/MatrixDateObj';
import { setFilteredAppointments } from '../ServiceActions/AppointmentActions';

export default function useCalendarHook() {
    const dispatch = useDispatch();
    const [viewingDate, setViewingDate] = useState(new Date());
    const selectedDatesState = useSelector(
        (state: RootState) => state.SelectedDatesState,
    );

    useEffect(() => {
        setDates(new Date());
    }, []);

    function setDates(date: Date) {
        dispatch(SetSelectedDateRange([date, date]));
        dispatch(setFilteredAppointments());
    }

    const _onPress = (item: IMatrixDateObj) => {
        if (item.title === '' && !item.emptyDate) {
            setDates(item.date);
        }
    };

    function getDisplayableItem(item: ICustomDateData) {
        if (checkIfDateExists(item)) {
            return item.date.getDate();
        } else {
            return item.title;
        }
    }

    function checkIfCurrentDateSelected(item: IMatrixDateObj) {
        return (
            viewingDate.getMonth() ===
                selectedDatesState.selectedDateRage[0].getMonth() &&
            item.date.getDate() ===
                selectedDatesState.selectedDateRage[0].getDate()
        );
    }

    const matrix = generateMatrix(
        viewingDate,
        selectedDatesState.datesWithAppointments,
    );

    const changeMonth = (n: number) => {
        const newDate = new Date(
            viewingDate.setMonth(viewingDate.getMonth() + n),
        );
        setViewingDate(newDate);
    };

    return {
        matrix,
        selectedDatesState,
        _onPress,
        checkIfCurrentDateSelected,
        getDisplayableItem,
        changeMonth,
        viewingDate,
    };
}
