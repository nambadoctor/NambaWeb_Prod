import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useState } from 'react';

export type MobileCalendarProps = {
    onDateChange: (date: Date) => void;
};

export const MobileCalendar = (props: MobileCalendarProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);

    const setDate = (date: Date) => {
        setSelectedDate(date);
        props.onDateChange(date);
    };

    const setSideScrollDate = (directionIsLeft: boolean) => {
        let newDate = new Date();
        if (directionIsLeft) {
            newDate = new Date(new Date().setDate(selectedDate.getDate() - 1));
        } else {
            newDate = new Date(new Date().setDate(selectedDate.getDate() + 1));
        }
        setSelectedDate(newDate);
        props.onDateChange(newDate);
    };

    return (
        <div className="flex justify-center items-center gap-4">
            <ChevronLeft onClick={() => setSideScrollDate(true)} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    open={isOpen}
                    onOpen={() => setIsOpen(true)}
                    onClose={() => setIsOpen(false)}
                    renderInput={(_props) => {
                        return (
                            <span onClick={() => setIsOpen(!isOpen)}>
                                {selectedDate.toLocaleDateString('en-GB')}
                            </span>
                        );
                    }}
                    label="Date"
                    value={selectedDate}
                    onChange={(newValue) => {
                        newValue && setDate(newValue);
                    }}
                />
            </LocalizationProvider>
            <ChevronRight onClick={() => setSideScrollDate(false)} />
        </div>
    );
};

MobileCalendar.defaultProps = {};
