import * as Scroll from 'react-scroll';
import { RootState } from '../store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAppointment } from '../ServiceActions/AppointmentActions';
import { ClearContext } from '../Actions/ClearContextAction';

export default function useConsultationViewHook() {
    let ElementScroll = Scroll.Element;
    let LinkScroll = Scroll.Link;
    const { id } = useParams();

    const dispatch = useDispatch();
    const currentServiceProvider = useSelector(
        (state: RootState) => state.CurrentServiceProviderState.serviceProvider,
    );

    useEffect(() => {
        dispatch(ClearContext());
        if (currentServiceProvider) {
            dispatch(GetAppointment(id as string));
        }
    }, [currentServiceProvider, id]);

    return {
        ElementScroll,
        LinkScroll,
    };
}
