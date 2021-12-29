import Calendar from "../CalendarPicker/Calendar"
import '../../Styles/CalendarStyling.css'

function DatePickerComponent() {

    return (
        <div className="datePickerContainer">
            <Calendar/>
        </div>
    );
}

export default DatePickerComponent;