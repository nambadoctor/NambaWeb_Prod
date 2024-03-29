import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useCalendarHook from '../../hooks/useCalendarHook';
import '../../styles/CalendarStyling.css';
import { CalendarTheme } from '../../styles/CalendarTheme';
import ICustomDateData from '../../types/MatrixDateObj';
import { months } from '../../utils/CalendarConst';
import { checkIfDateExists } from '../../utils/GeneralUtils';

export default function Calendar() {
    const {
        matrix,
        selectedDatesState,
        _onPress,
        checkIfCurrentDateSelected,
        getDisplayableItem,
        changeMonth,
        viewingDate,
    } = useCalendarHook();

    function getHasAppointmentMarker() {
        return (
            <CircleIcon style={{ fill: 'blue', height: 5, width: 5 }}>
                {' '}
            </CircleIcon>
        );
    }

    function getActiveOrInactiveDate(item: ICustomDateData) {
        if (
            checkIfDateExists(item) &&
            viewingDate.getMonth() ===
                selectedDatesState.selectedDateRange[0].getMonth() &&
            item.date.getDate() ===
                selectedDatesState.selectedDateRange[0].getDate()
        ) {
            return styles.activeDate;
        } else {
            return styles.inActiveDate;
        }
    }

    let rows = matrix.map((row: any, rowIndex: number) => {
        let rowItems = row.map((item: ICustomDateData, colIndex: number) => {
            return (
                <div>
                    {selectedDatesState.selectedDateRange[0] && (
                        <TouchableOpacity
                            key={colIndex}
                            onPress={() => _onPress(item)}
                            style={[styles.date, getActiveOrInactiveDate(item)]}
                        >
                            <div className="textAndAppointmentIndicatorContainer">
                                <Text
                                    style={[
                                        styles.dateText,
                                        {
                                            color:
                                                checkIfCurrentDateSelected(
                                                    item,
                                                ) && !item.isDayHeader
                                                    ? CalendarTheme.whiteText
                                                    : CalendarTheme.text,
                                            fontWeight:
                                                checkIfCurrentDateSelected(
                                                    item,
                                                ) || item.isDayHeader
                                                    ? 'bold'
                                                    : 'normal',
                                        },
                                    ]}
                                >
                                    {getDisplayableItem(item)}
                                </Text>
                                {getActiveOrInactiveDate(item) ===
                                    styles.inActiveDate &&
                                item.hasAppointment ? (
                                    getHasAppointmentMarker()
                                ) : (
                                    <div />
                                )}
                            </div>
                        </TouchableOpacity>
                    )}
                </div>
            );
        });
        return (
            <View key={rowIndex} style={styles.rowContainer}>
                {rowItems}
            </View>
        );
    });

    return (
        <div className="wholeCalendarContainer">
            {selectedDatesState.selectedDateRange[0] &&
                selectedDatesState.datesWithAppointments && (
                    <div>
                        <div className="titleAndActionContainer">
                            <button
                                className="actionItem"
                                onClick={() => changeMonth(-1)}
                            >
                                {
                                    <ArrowBackIosIcon
                                        style={{ fill: 'black', height: 17 }}
                                    ></ArrowBackIosIcon>
                                }
                            </button>

                            <div className="titleItem text-black">
                                {`${
                                    months[viewingDate.getMonth()]
                                } ${viewingDate.getFullYear()}`}
                            </div>

                            <button
                                className="actionItem"
                                onClick={() => changeMonth(+1)}
                            >
                                {
                                    <ArrowForwardIosIcon
                                        style={{ fill: 'black', height: 17 }}
                                    ></ArrowForwardIosIcon>
                                }
                            </button>
                        </div>
                        <div className="datePickerBox">
                            <View>{rows}</View>
                        </div>
                    </div>
                )}
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
    activeDate: {
        color: 'white',
        backgroundColor: '#1672f9',
        borderRadius: 20,
    },
    markedDate: { backgroundColor: CalendarTheme.markedDate, borderRadius: 20 },
    inActiveDate: { backgroundColor: '#fff' },
    dateWithAppointment: { backgroundColor: CalendarTheme.primary },
    dateText: {
        textAlign: 'center',
        fontSize: 14,
    },
});
