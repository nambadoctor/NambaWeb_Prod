import { useDispatch, useSelector } from "react-redux";
import { ClearAddPatientState } from "../Actions/AddPatientActions";
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
import IPhoneNumberData from "../Types/OutgoingDataModels/PhoneNumber";

export default function usePatientInputHook(isForPatientAndAppointment: boolean) {
    const dispatch = useDispatch()

    const addPatientState = useSelector((state: RootState) => state.AddPatientState)
    const currentCustomer = useSelector((state: RootState) => state.CurrentCustomerState.Customer)
    const currentServiceProvider = useSelector((state: RootState) => state.CurrentServiceProviderState.serviceProvider)
    const bookForDoctor = useSelector((state: RootState) => state.OrgState.selectedServiceProvider)

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
            dateForAppointment: new Date(),
            dateOfBirth: new Date()
        },
        validationSchema: Yup.object({
            phonenumber: Yup.string().required().length(10),
            name: Yup.string().required(),
            age: Yup.number().positive().integer(),
            gender: Yup.string(),
            dateForAppointment: Yup.date().nullable(),
            dateOfBirth: Yup.date().nullable()
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
            customerId: currentCustomer?.customerId ?? "",
            customerProfileId: currentCustomer?.customerProfileId ?? "",
            firstName: formik.values.name,
            lastName: currentCustomer?.lastName ?? "",
            //phoneNumbers: currentCustomer?.phoneNumbers ?? { countryCode: "+91", number: formik.values.phonenumber } as IPhoneNumberData,
            gender: gender,
            dateOfBirth: currentCustomer?.dateOfBirth,
            organisationId: currentCustomer?.organisationId ?? currentServiceProvider?.serviceProviderProfile.organisationId,
        } as ICustomerProfileOutgoing

        CustomerRequestObj.dateOfBirth = {
            dateOfBirthId: "",
            date: new Date(),
            age: formik.values.age,
            createdDate: new Date()
        } as IDateOfBirthData

        CustomerRequestObj.phoneNumbers = currentCustomer?.phoneNumbers ?? [{
            phoneNumberId: "",
            countryCode: "+91",
            number: formik.values.phonenumber,
            type: ""
        } as IPhoneNumberData]

        return CustomerRequestObj;
    }

    function mapCustomerToValues(customer: ICustomerIncomingData | null) {
        if (customer) {
            customer.phoneNumbers && formik.setFieldValue("phonenumber", customer.phoneNumbers[0].number);
            customer.firstName ? formik.setFieldValue("name", (customer.firstName ?? "") + " " + (customer.lastName ?? "")) : formik.setFieldValue("name", "");
            customer.gender ? formik.setFieldValue("gender", customer.gender) : formik.setFieldValue("gender", "");

            if (customer.dateOfBirth) {
                formik.setFieldValue("age", customer.dateOfBirth.age)
                formik.setFieldValue("dateOfBirth", new Date(customer.dateOfBirth.date))
            } else {
                formik.setFieldValue("age", "")
                formik.setFieldValue("dateOfBirth", new Date())
            }

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
                bookForDoctor?.serviceProviderProfile.organisationId,
            serviceRequestId: "",
            serviceProviderId: bookForDoctor?.serviceProviderId,
            customerId: currentCustomer?.customerId ?? "",
            appointmentType: "InPerson",
            addressId: "",
            status: "",
            scheduledAppointmentStartTime: formik.values.dateForAppointment,
            scheduledAppointmentEndTime: new Date(),
            actualAppointmentStartTime: new Date(),
            actualAppointmentEndTime: new Date(),
        } as IAppointmentOutgoing;
    };

    const makeCustomerAndAppointmentRequest = () => {
        const currentCustomerRequestObj = makeCustomerObject();
        const aptObj = makeAppointmentObject();

        if (currentCustomerRequestObj.customerId) {
            dispatch(SetAppointment(aptObj))
        } else {
            const customerProfileWithAppointment = {
                customerProfileIncoming: currentCustomerRequestObj,
                appointmentIncoming: aptObj,
            } as ICustomerProfileWithAppointmentOutgoingData
            dispatch(SetCustomerAndBookAppointment(customerProfileWithAppointment))
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
