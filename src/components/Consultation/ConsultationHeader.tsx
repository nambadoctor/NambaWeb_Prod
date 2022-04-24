import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import '../../App.css';
import { RootState } from '../../store';
import { getReadableDateAndTimeString } from '../../utils/GeneralUtils';

export default function ConsultationHeader() {
    const currentConsultation = useSelector(
        (state: RootState) => state.ConsultationState,
    );
    const currentCustomer = useSelector(
        (state: RootState) => state.CurrentCustomerState.Customer,
    );

    return (
        <div className="card p-4 mt-8">
            {currentCustomer && (
                <div className="flex gap-4">
                    <img
                        src={
                            currentCustomer?.gender?.toLowerCase() == 'male'
                                ? '/assets/male.svg'
                                : '/assets/female.svg'
                        }
                        height={84}
                        width={96}
                    />
                    <div className="flex flex-col">
                        <span className="t__body--b1 font-semibold">
                            {currentConsultation.Appointment?.customerName ??
                                currentCustomer.firstName}
                        </span>
                        <span className="t__body--b2">
                            +91
                            {currentCustomer?.phoneNumbers[0].number ?? ''}
                        </span>
                        <span className="t__body--b2">
                            {currentCustomer?.dateOfBirth.age ?? ''}
                        </span>
                        <span className="t__body--b2">
                            {currentConsultation.Appointment
                                ?.scheduledAppointmentStartTime
                                ? getReadableDateAndTimeString(
                                      currentConsultation.Appointment
                                          ?.scheduledAppointmentStartTime ?? '',
                                  )
                                : null}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
