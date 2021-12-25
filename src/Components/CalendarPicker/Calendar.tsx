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
import { Box, ZStack } from 'native-base';

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

    const _onPress = (item: number) => {
        if (typeof item !== 'string' && item != -1) {
            const newDate = new Date(selectedDatesState.dates[0].setDate(item));
            newDate.setMonth(viewingDate.getMonth())
            setDates(newDate)
        }
    };

    function getDateWithAppointmentIndicator() {
        return
        <ZStack alignItems="center" justifyContent="center">
            <Box bg="white" size="2" width="150" marginTop="95" />
        </ZStack>
    }

    const matrix = generateMatrix(viewingDate);

    let rows = [];

    rows = matrix.map((row: any, rowIndex: number) => {
        let rowItems = row.map((item: any, colIndex: number) => {
            return (
                <div>
                    {selectedDatesState.dates[0] &&
                        <TouchableOpacity
                            key={colIndex}
                            onPress={() => _onPress(item)}
                            style={[
                                styles.date,
                                (viewingDate.getMonth() == selectedDatesState.dates[0].getMonth() && item == selectedDatesState.dates[0].getDate())
                                    ? styles.activeDate : styles.inActiveDate]}>
                            <Text ellipsizeMode='tail'
                                style={[styles.dateText, {
                                    color: colIndex == 0 ? CalendarTheme.error : CalendarTheme.text,
                                    fontWeight: (viewingDate.getMonth() == selectedDatesState.dates[0].getMonth() && item == selectedDatesState.dates[0].getDate())
                                        ? 'bold' : 'normal',
                                }]}>
                                {item != -1 ? item : ''}
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
    inActiveDate: { backgroundColor: '#fff' },
    dateWithAppointment: { backgroundColor: CalendarTheme.primary },
    dateText: {
        textAlign: 'center',
        fontSize: 14
    },
    actionContainer: { flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginTop: 8 },
    currentDate: { fontWeight: '600', fontSize: 23, textAlign: 'center', marginBottom: 10 },
});