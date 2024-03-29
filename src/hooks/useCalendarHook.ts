import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetSelectedDateRange } from '../actions/SelectedDateActions';
import { RootState } from '../store';
import {
    default as ICustomDateData,
    default as IMatrixDateObj,
} from '../types/MatrixDateObj';
import { generateMatrix } from '../utils/CalendarUtils';
import { checkIfDateExists } from '../utils/GeneralUtils';

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
                selectedDatesState.selectedDateRange[0].getMonth() &&
            item.date.getDate() ===
                selectedDatesState.selectedDateRange[0].getDate()
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
