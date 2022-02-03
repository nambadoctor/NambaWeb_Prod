import { CircularProgress, TextField } from "@mui/material";
import { Button, ButtonGroup, Col, Row, ToggleButton } from "react-bootstrap";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import usePatientInputHook from "../../CustomHooks/usePatientInputHook";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import IAppointmentOutgoing from "../../Types/OutgoingDataModels/AppointmentOutgoing";
import ICustomerProfileWithAppointmentOutgoingData from "../../Types/OutgoingDataModels/CustomerProfileWithAppointmentOutgoing";

export default function AddPatientView() {
  const {
    addPatientState,
    genderOptions,
    gender,
    formik,
    setGender,
    makeCustomerObject,
  } = usePatientInputHook();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const currentServiceProvider = useSelector(
    (state: RootState) => state.CurrentServiceProviderState.serviceProvider
  );
  const currentCustomer = useSelector(
    (state: RootState) => state.CurrentCustomerState.Customer
  );

  const makeAppointmentObject = () => {
    return {
      appointmentId: "",
      organisationId:
        currentServiceProvider?.serviceProviderProfile.organisationId,
      serviceRequestId: "",
      serviceProviderId: currentServiceProvider?.serviceProviderId,
      customerId: currentCustomer?.customerId,
      appointmentType: "InPerson",
      addressId: "",
      status: "",
      scheduledAppointmentStartTime: selectedDate,
      scheduledAppointmentEndTime: null,
      actualAppointmentStartTime: null,
      actualAppointmentEndTime: null,
    } as IAppointmentOutgoing;
  };

  //TODO: MAKE THIS A HELPER FUNCTION IN A DIFFERENCE CLASS OR ACTION
  const makeCustomerAndAppointmentRequest = () => {
    var currentCustomerRequestObj = makeCustomerObject();
    var aptObj = makeAppointmentObject();

    return {
      customerProfileIncoming: currentCustomerRequestObj,
      appointmentIncoming: aptObj,
    } as ICustomerProfileWithAppointmentOutgoingData;
  };

  const makeAppointment = () => {
      formik.handleSubmit()
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          label="Phone Number"
          placeholder="Phone Number"
          margin="normal"
          size="small"
          {...formik.getFieldProps("phonenumber")}
          helperText={formik.touched.phonenumber && formik.errors.phonenumber}
          error={formik.touched.phonenumber && !!formik.errors.phonenumber}
        />

        {addPatientState.isCheckingNumber ? (
          <CircularProgress style={{ width: 30, height: 30, marginLeft: 5 }} />
        ) : (
          <div />
        )}

        {/* Indicator to display once customer exists check is complete
                {addPatientState.isCustomerExists ? <CheckCircleIcon style={{width: 30, height: 30, marginLeft: 5, color: '#149c4a'}}/> : <div />} */}
      </div>

      {addPatientState.isCustomerExists ? (
        <div style={{ fontSize: 12, color: "#1672f9", fontWeight: "bold" }}>
          This patient exists
        </div>
      ) : (
        <div />
      )}
      {addPatientState.isInvalidNumber ? (
        <div style={{ fontSize: 12, color: "#ff6c6c", fontWeight: "bold" }}>
          Sorry, cannot add this number
        </div>
      ) : (
        <div />
      )}

      {/* TODO: SHOW LOADER WHEN CHECKING FOR EXISTING PATIENT */}

      <TextField
        fullWidth
        label="Name"
        placeholder="Name"
        margin="normal"
        size="small"
        {...formik.getFieldProps("name")}
        helperText={formik.touched.name && formik.errors.name}
        error={formik.touched.name && !!formik.errors.name}
      />

      <Row className="align-items-center">
        <Col>
          <TextField
            fullWidth
            label="Age"
            placeholder="Age"
            margin="normal"
            size="small"
            {...formik.getFieldProps("age")}
            helperText={formik.touched.age && formik.errors.age}
            error={formik.touched.age && !!formik.errors.age}
          />
        </Col>
        <Col>
          <ButtonGroup style={{ marginTop: 3 }}>
            {genderOptions.map((genderOption, idx) => (
              <ToggleButton
                disabled={
                  addPatientState.isCustomerExists ||
                  addPatientState.isInvalidNumber
                }
                key={idx}
                id={`gender-${idx}`}
                type="radio"
                variant="outline-primary"
                name="gender"
                value={gender}
                checked={gender === genderOption}
                onChange={(e) => setGender(genderOption)}
              >
                {genderOption}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>

      {/* BOOK PATIENT COMP */}
      <Row
        style={{
          marginTop: 10,
          marginBottom: 15,
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            disabled={addPatientState.isInvalidNumber}
            renderInput={(props) => <TextField {...props} />}
            label="Appointment Date (If Needed)"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
          />
        </LocalizationProvider>
      </Row>

      <Row style={{ marginBottom: 10, marginLeft: 0, marginRight: 0 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            disabled={addPatientState.isInvalidNumber}
            style={{ padding: 10, width: "100%" }}
            type="submit"
            color="primary"
            onClick={() => {}}
          >
            Save
          </Button>

          {addPatientState.isMakingDoneCall ? (
            <CircularProgress
              style={{ width: 30, height: 30, marginLeft: 5 }}
            />
          ) : (
            <div />
          )}
        </div>
      </Row>
    </div>
  );
}
