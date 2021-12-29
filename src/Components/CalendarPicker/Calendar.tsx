import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SetSelectedDateRange } from '../../Actions/SelectedDateActions';
import { RootStore } from '../../store';
import { months, weekDays } from '../../Utils/CalendarConst';
import '../../Styles/CalendarStyling.css';
import { CalendarTheme } from '../../Styles/CalendarTheme';
import { generateMatrix } from '../../Utils/CalendarUtils';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { checkIfDateExists, isDatesEqual } from '../../Utils/GeneralUtils';
import ICustomDateData from '../../Types/CustomDate';
import IMatrixDateObj from '../../Types/CustomDate';
import CircleIcon from '@mui/icons-material/Circle';

export default function Calendar() {
    const dispatch = useDispatch()
    const [viewingDate, setViewingDate] = useState(new Date());
    const selectedDatesState = useSelector((state: RootStore) => (state.SelectedDatesReducer));

    useEffect(() => {
        setDates(new Date())
    }, []);

    function setDates(date: Date) {
        dispatch(SetSelectedDateRange([date, date]))
    }

    const _onPress = (item: IMatrixDateObj) => {
        if (item.title == "" && !item.emptyDate) {
            setDates(item.date)
        }
    };

    function getActiveOrInactiveDate(item: ICustomDateData) {
        if (checkIfDateExists(item) && (viewingDate.getMonth() == selectedDatesState.dates[0].getMonth() && item.date.getDate() == selectedDatesState.dates[0].getDate())) {
            return styles.activeDate;
        } else {
            return styles.inActiveDate;
        }
    }

    function getDisplayableItem(item: ICustomDateData) {
        if (checkIfDateExists(item)) {
            return item.date.getDate()
        } else {
            return item.title;
        }
    }

    function checkIfCurrentDateSelected(item: IMatrixDateObj) {
        return (viewingDate.getMonth() == selectedDatesState.dates[0].getMonth() && item.date.getDate() == selectedDatesState.dates[0].getDate())
    }

    const matrix = generateMatrix(viewingDate, selectedDatesState.datesWithAppointments);

    function getHasAppointmentMarker() {
        return <CircleIcon style={{ fill: "blue", height: 5, width: 5 }}> </CircleIcon>
    }

    let rows = [];

    rows = matrix.map((row: any, rowIndex: number) => {
        let rowItems = row.map((item: ICustomDateData, colIndex: number) => {
            return (
                <div>
                    {selectedDatesState.dates[0] &&
                        <TouchableOpacity
                            key={colIndex}
                            onPress={() => _onPress(item)}
                            style={[
                                styles.date,
                                getActiveOrInactiveDate(item)
                            ]}>
                            <div className="textAndAppointmentIndicatorContainer">
                                <Text
                                    style={[styles.dateText, {
                                        color: (checkIfCurrentDateSelected(item) && !item.isDayHeader) ? CalendarTheme.whiteText : CalendarTheme.text,
                                        fontWeight: (checkIfCurrentDateSelected(item) || item.isDayHeader)
                                            ? 'bold' : 'normal',
                                    }]}>
                                    {getDisplayableItem(item)}
                                </Text>

                                {getActiveOrInactiveDate(item) == styles.inActiveDate && item.hasAppointment ? getHasAppointmentMarker() : <div />}
                            </div>
                        </TouchableOpacity>}
                </div>
            );
        });

        return <View key={rowIndex} style={styles.rowContainer}>{rowItems}</View>;
    });

    const changeMonth = (n: number) => {
        const newDate = new Date(viewingDate.setMonth(viewingDate.getMonth() + n));
        setViewingDate(newDate)
    };

    return (
        <div>
            {(selectedDatesState.dates[0] && selectedDatesState.datesWithAppointments) &&
                <div>
                    <div className="titleAndActionContainer">
                        <button className="actionItem" onClick={() => changeMonth(-1)}>
                            {<ArrowBackIosIcon style={{ fill: "white", height: 17 }}></ArrowBackIosIcon>}
                        </button>

                        <div className="titleItem">
                            {`${months[viewingDate.getMonth()]} ${viewingDate.getFullYear()}`}
                        </div>

                        <button className="actionItem" onClick={() => changeMonth(+1)}>
                            {<ArrowForwardIosIcon style={{ fill: "white", height: 17 }}></ArrowForwardIosIcon>}
                        </button>
                    </div>
                    <div className="datePickerBox">
                        <View>{rows}</View>
                    </div>
                </div>
            }
        </div>
    );
}

const styles = StyleSheet.create({
    container: { padding: 12 },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    date: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeDate: { color: 'white', backgroundColor: '#1672f9', borderRadius: 20 },
    markedDate: { backgroundColor: CalendarTheme.markedDate, borderRadius: 20 },
    inActiveDate: { backgroundColor: '#fff' },
    dateWithAppointment: { backgroundColor: CalendarTheme.primary },
    dateText: {
        textAlign: 'center',
        fontSize: 14
    },
});