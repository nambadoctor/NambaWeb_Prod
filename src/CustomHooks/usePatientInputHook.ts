import { useDispatch, useSelector } from "react-redux";
import { ClearAddPatientState, SetIsCheckingForCustomer } from "../Actions/AddPatientActions";
import { CheckIfCustomerExists, SetCustomer, SetCustomerAndBookAppointment } from "../ServiceActions/CustomerActions";
import { RootState } from "../store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { ICustomerProfileOutgoing } from "../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { SetCurrentCustomer } from "../Actions/CurrentCustomerActions";
import IAppointmentOutgoing from "../Types/OutgoingDataModels/AppointmentOutgoing";
import ICustomerProfileWithAppointmentOutgoingData from "../Types/OutgoingDataModels/CustomerProfileWithAppointmentOutgoing";
import { SetAppointment } from "../ServiceActions/AppointmentActions";
import IDateOfBirthData from "../Types/OutgoingDataModels/DateOfBirth";

export default function usePatientInputHook(isForPatientAndAppointment: boolean) {
    const dispatch = useDispatch()

    const addPatientState = useSelector((state: RootState) => state.AddPatientState)
    const currentCustomer = useSelector((state: RootState) => state.CurrentCustomerState.Customer)
    const currentServiceProvider = useSelector((state: RootState) => state.CurrentServiceProviderState.serviceProvider)

    useEffect(() => {
        mapCustomerToValues(currentCustomer)
    }, [currentCustomer])

    const [gender, setGender] = useState("")
    const genderOptions = ["Male", "Female", "Other"]

    const formik = useFormik({
        initialValues: {
            phonenumber: "",
            name: "",
            age: "",
            gender: "",
            dateForAppointment: new Date()
        },
        validationSchema: Yup.object({
            phonenumber: Yup.string().required().length(10),
            name: Yup.string().required(),
            age: Yup.number().positive().integer(),
            gender: Yup.string(),
            dateForAppointment: Yup.date().nullable()
        }),
        onSubmit: (values) => {
            if (isForPatientAndAppointment) {
                makeCustomerAndAppointmentRequest()
            } else {
                dispatch(SetCustomer(makeCustomerObject()))
            }
        },
    });

    //Phone Number Change Handler
    useEffect(() => {
        const number = formik.values.phonenumber;
        if (number.length == 10) {
            dispatch(CheckIfCustomerExists(number, currentServiceProvider!.serviceProviderProfile.organisationId))
        } else {
            dispatch(SetCurrentCustomer(null))
            dispatch(ClearAddPatientState())
        }
    }, [formik.values.phonenumber])

    const makeCustomerObject = () => {
        var CustomerRequestObj = {
            customerId: currentCustomer?.customerId,
            customerProfileId: currentCustomer?.customerProfileId,
            firstName: formik.values.name,
            lastName: currentCustomer?.lastName,
            phoneNumbers: currentCustomer?.phoneNumbers,
            gender: gender,
            dateOfBirth: currentCustomer?.dateOfBirth,
            emailAddress: currentCustomer?.emailAddress,
            profilePicURL: currentCustomer?.profilePicURL,
            organisationId: currentCustomer?.organisationId ?? currentServiceProvider?.serviceProviderProfile.organisationId,
            serviceProviderId: currentCustomer?.serviceProviderId ?? currentServiceProvider?.serviceProviderId
        } as ICustomerProfileOutgoing

        if (CustomerRequestObj.dateOfBirth) {
            CustomerRequestObj.dateOfBirth.age = formik.values.age;
        } else {
            CustomerRequestObj.dateOfBirth = {} as IDateOfBirthData
            CustomerRequestObj.dateOfBirth.age = formik.values.age;
        }


        return CustomerRequestObj;
    }

    function mapCustomerToValues(customer: ICustomerIncomingData | null) {
        if (customer) {
            customer.phoneNumbers && formik.setFieldValue("phonenumber", customer.phoneNumbers[0].number);
            formik.setFieldValue("name", customer.firstName + " " + customer.lastName);
            customer.dateOfBirth && formik.setFieldValue("age", customer.dateOfBirth.age);
            formik.setFieldValue("gender", customer.gender);
            setGender(customer.gender);
        } else {
            formik.resetForm()
        }
    }

    //START- NEED TO THROW THIS INTO ANOTHER CUSTOM HOOK FOR BOOKING APPOINTMENT
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
            scheduledAppointmentStartTime: formik.values.dateForAppointment,
            scheduledAppointmentEndTime: null,
            actualAppointmentStartTime: null,
            actualAppointmentEndTime: null,
        } as IAppointmentOutgoing;
    };

    //TODO: MAKE THIS A HELPER FUNCTION IN A DIFFERENCE CLASS OR ACTION
    const makeCustomerAndAppointmentRequest = () => {
        const currentCustomerRequestObj = makeCustomerObject();
        const aptObj = makeAppointmentObject();

        if (currentCustomerRequestObj.customerId) {
            dispatch(SetAppointment(aptObj))
        } else {
            const customerAndAppointmentUpload = {
                customerProfileIncoming: currentCustomerRequestObj,
                appointmentIncoming: aptObj,
            } as ICustomerProfileWithAppointmentOutgoingData
            dispatch(SetCustomerAndBookAppointment(customerAndAppointmentUpload))
        }
        return
    };
    //END

    return {
        addPatientState,
        genderOptions,
        gender,
        formik,
        setGender
    };
}
