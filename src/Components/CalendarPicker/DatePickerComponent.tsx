import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { SetSelectedDateRange } from '../../Actions/SelectedDateActions';

function DatePickerComponent() {
    const dispatch = useDispatch();

    const [date, setDate] = useState([
        new Date(),
        new Date(),
    ]);

    useEffect(() => {
        dispatch(SetSelectedDateRange(date))
    }, [date])

    return (
        <div className='app'>
            <div className='calendar-container'>
                <Calendar
                    onChange={setDate}
                    selectRange={true}
                    defaultValue={date}
                />
            </div>
        </div>
    );
}

export default DatePickerComponent;