import { ReportUploadPicker } from '../ReportUpload/ReportUploadPicker';
import ReportImageView from '../ReportUpload/ReportImageView';
import ConsultationHeader from './ConsultationHeader';
import { PrescriptionUploadPicker } from '../PrescriptionUpload/PrescriptionUploadPicker';
import PrescriptionImageView from '../PrescriptionUpload/PrescriptionImageView';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import '../../../src/App.css';
import { RootState } from '../../store';
import { AllReportImagesView } from '../ReportUpload/AllReportImagesView';
import { AllPrescriptionImagesView } from '../PrescriptionUpload/AllPrescriptionImagesView';
import { UploadReportForConsultation } from '../../ServiceActions/ReportActions';
import { UploadPrescriptionForConsultation } from '../../ServiceActions/PrescriptionActions';
import NotesView from '../Notes/NotesView';
import { GetAppointment } from '../../ServiceActions/AppointmentActions';
import { ClearContext } from '../../Actions/ClearContextAction';
import { Drawer, Box, List, ListItem } from '@mui/material';
import * as Scroll from 'react-scroll';

export default function ConsultationView() {
    let LinkScroll = Scroll.Link;
    let ElementScroll = Scroll.Element;
    const dispatch = useDispatch();
    const currentServiceProvider = useSelector(
        (state: RootState) => state.CurrentServiceProviderState.serviceProvider,
    );
    const { id } = useParams();

    useEffect(() => {
        dispatch(ClearContext());
        if (currentServiceProvider) {
            dispatch(GetAppointment(id as string));
        }
    }, [currentServiceProvider, id]);

    const SideBar = () => {
        const titles = ['Patient Details', 'Reports', 'Prescriptions', 'Notes'];
        return (
            <div style={{ display: 'flex' }}>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: 200,
                            height: 'auto',
                            boxSizing: 'border-box',
                            marginTop: '5.7em',
                        },
                    }}
                >
                    <Box sx={{ overflow: 'hidden' }}>
                        <List>
                            {titles.map((title, i) => (
                                <LinkScroll
                                    activeClass="active"
                                    to={title}
                                    spy={true}
                                    smooth={true}
                                    isDynamic={true}
                                    duration={500}
                                    offset={-100}
                                >
                                    <ListItem
                                        button
                                        id={title}
                                        key={i}
                                        style={{ margin: '15px' }}
                                    >
                                        {title}
                                    </ListItem>
                                </LinkScroll>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </div>
        );
    };

    return (
        <div>
            <SideBar />
            <div style={{ marginLeft: '11em', marginBottom: '15em' }}>
                <Row style={{ margin: 20, marginTop: 30 }}>
                    <ElementScroll id="Patient Details" name="Patient Details">
                        <ConsultationHeader />
                    </ElementScroll>
                </Row>

                <Row style={{ margin: 20, marginTop: 30 }}>
                    <ElementScroll id="Reports" name="Reports">
                        <div className="blue_filled_rounded_box_top">
                            <h3 className="blue_filled_rounded_box_top_title_item">
                                Reports
                            </h3>
                            <ReportUploadPicker
                                handlePhotoCallBack={
                                    UploadReportForConsultation
                                }
                                uploadButtonColor="white"
                            />
                        </div>
                        <div className="blue_border_rounded_white_box">
                            <ReportImageView />
                            <AllReportImagesView
                                showUploadButton={false}
                                showCancelImageButton={false}
                            />
                        </div>
                    </ElementScroll>
                </Row>

                <Row style={{ margin: 20, marginTop: 30 }}>
                    <ElementScroll id="Prescriptions" name="Prescriptions">
                        <div className="blue_filled_rounded_box_top">
                            <h3 className="blue_filled_rounded_box_top_title_item">
                                Prescriptions
                            </h3>
                            <PrescriptionUploadPicker
                                handlePhotoCallBack={
                                    UploadPrescriptionForConsultation
                                }
                                uploadButtonColor="white"
                            />
                        </div>
                        <div className="blue_border_rounded_white_box">
                            <PrescriptionImageView />
                            <AllPrescriptionImagesView
                                showUploadButton={false}
                                showCancelImageButton={false}
                            />
                        </div>
                    </ElementScroll>
                </Row>
                <Row style={{ margin: 20, marginTop: 30 }}>
                    <ElementScroll id="Notes" name="Notes">
                        <div className="blue_filled_rounded_box_top">
                            <h3 className="blue_filled_rounded_box_top_title_item">
                                Notes
                            </h3>
                        </div>
                        <div className="blue_border_rounded_white_box">
                            <NotesView />
                        </div>
                    </ElementScroll>
                </Row>
            </div>
        </div>
    );
}
