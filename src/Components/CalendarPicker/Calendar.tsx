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
import { months } from '../../Utils/CalendarConst';
import '../../Styles/CalendarStyling.css';
import { CalendarTheme } from '../../Styles/CalendarTheme';
import { generateMatrix } from '../../Utils/CalendarUtils';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { checkIfDateExists, isDatesEqual } from '../../Utils/GeneralUtils';
import ICustomDateData from '../../Types/CustomDate';
import IMatrixDateObj from '../../Types/CustomDate';

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
            if (item.hasAppointment) {
                return styles.markedDate;
            } else {
                return styles.inActiveDate;
            }
        }
    }

    function getDisplayableItem(item: ICustomDateData) {
        if (checkIfDateExists(item)) {
            return item.date.getDate()
        } else {
            return item.title;
        }
    }

    const matrix = generateMatrix(viewingDate, selectedDatesState.datesWithAppointments);

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
                            <Text
                                style={[styles.dateText, {
                                    color: colIndex == 0 ? CalendarTheme.error : CalendarTheme.text,
                                    fontWeight: (viewingDate.getMonth() == selectedDatesState.dates[0].getMonth() && item.date.getDate() == selectedDatesState.dates[0].getDate())
                                        ? 'bold' : 'normal',
                                }]}>
                                {getDisplayableItem(item)}
                            </Text>
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
                    <View style={styles.actionContainer}>
                        <button style={{ height: 30, backgroundColor: "white", border: "none" }} onClick={() => changeMonth(-1)}>
                            {<ArrowBackIosIcon style={{ fill: "blue", height: 17 }}></ArrowBackIosIcon>}
                        </button>

                        <Text style={styles.currentDate}>
                            {`${months[viewingDate.getMonth()]} ${viewingDate.getFullYear()}`}
                        </Text>

                        <button style={{ height: 30, backgroundColor: "white", border: "none" }} onClick={() => changeMonth(+1)}>
                            {<ArrowForwardIosIcon style={{ fill: "blue", height: 17 }}></ArrowForwardIosIcon>}
                        </button>
                    </View>
                    <View>{rows}</View>
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
    activeDate: { backgroundColor: CalendarTheme.primary, borderRadius: 20 },
    markedDate: { backgroundColor: CalendarTheme.markedDate, borderRadius: 20 },
    inActiveDate: { backgroundColor: '#fff' },
    dateWithAppointment: { backgroundColor: CalendarTheme.primary },
    dateText: {
        textAlign: 'center',
        fontSize: 14
    },
    actionContainer: { flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginTop: 8 },
    currentDate: { fontWeight: '600', fontSize: 23, textAlign: 'center', marginBottom: 10 },
});