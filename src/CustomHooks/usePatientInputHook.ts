import { useDispatch, useSelector } from "react-redux";
import { SetAddPatientIsCheckingForCustomer, SetAddPatientIsCustomerExists, SetAddPatientIsInvalidNumber, SetAddPatientNameValidationError, SetAddPatientPhoneNumber, SetAddPatientPhoneNumberValidationError } from "../Actions/AddPatientActions";
import { CheckIfCustomerExists } from "../ServiceActions/CustomerActions";
import { RootState } from "../store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { ICustomerProfileOutgoing } from "../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { SetCurrentCustomer } from "../Actions/CurrentCustomerActions";
import { isNull } from "util";

export default function usePatientInputHook() {
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
        },
        validationSchema: Yup.object({
            phonenumber: Yup.string().required().length(10),
            name: Yup.string().required(),
            age: Yup.number().positive().integer(),
            gender: Yup.string(),
        }),
        onSubmit: (values) => { makeCustomerObject() },
    });

    //Phone Number Change Handler
    useEffect(() => {
        const number = formik.values.phonenumber;
        if (number.length == 10) {
            dispatch(CheckIfCustomerExists(number, currentServiceProvider!.serviceProviderProfile.organisationId))
            dispatch(SetAddPatientIsCheckingForCustomer(true))
            dispatch(SetAddPatientPhoneNumber(number));
        } else {
            dispatch(SetCurrentCustomer(null))
            dispatch(SetAddPatientPhoneNumber(number));
            dispatch(SetAddPatientIsCustomerExists(false))
            dispatch(SetAddPatientIsCheckingForCustomer(false))
            dispatch(SetAddPatientIsInvalidNumber(false))
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

        CustomerRequestObj.dateOfBirth.age = formik.values.age;

        return CustomerRequestObj;
    }

    function mapCustomerToValues(customer: ICustomerIncomingData|null) {
        if (customer) {
            formik.setFieldValue("phonenumber", customer.phoneNumbers[0].number);
            formik.setFieldValue("name", customer.firstName + " " + customer.lastName);
            formik.setFieldValue("age", customer.dateOfBirth.age);
            formik.setFieldValue("gender", customer.gender);
        } else {
            formik.resetForm()
        }
    }

    return {
        addPatientState,
        genderOptions,
        gender,
        formik,
        setGender,
        makeCustomerObject
    };
}
