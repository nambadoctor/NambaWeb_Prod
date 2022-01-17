import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetAddPatientCustomerProfile, SetAddPatientIsCheckingForCustomer, SetAddPatientIsCustomerExists, SetAddPatientIsInvalidNumber, SetAddPatientPhoneNumber } from "../Actions/AddPatientActions";
import { SignInWithPhoneNumberHelper } from "../Actions/Common/LoginActions";
import { CheckIfCustomerExists } from "../Actions/CustomerActions";
import makeEmptyValueCustomerSetRequestData from "../Helpers/CustomerHelper";
import { RootState } from "../store";
import IPhoneNumberData from "../Types/OutgoingDataModels/PhoneNumber";

export default function usePatientInputHook() {
    const dispatch = useDispatch()

    const addPatientState = useSelector((state: RootState) => state.AddPatientState)
    const currentServiceProvider = useSelector((state: RootState) => state.CurrentServiceProviderState.serviceProvider)

    const genderOptions = ["Male", "Female", "Other"]

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length >= 10) {
            dispatch(CheckIfCustomerExists(event.target.value, currentServiceProvider!.serviceProviderProfile.organisationId))
            dispatch(SetAddPatientIsCheckingForCustomer(true))
            dispatch(SetAddPatientPhoneNumber(event.target.value));
        } else {
            dispatch(SetAddPatientCustomerProfile(makeEmptyValueCustomerSetRequestData()))
            dispatch(SetAddPatientPhoneNumber(event.target.value));
            dispatch(SetAddPatientIsCustomerExists(false))
            dispatch(SetAddPatientIsCheckingForCustomer(false))
            dispatch(SetAddPatientIsInvalidNumber(false))
        }
    };

    //TODO: FIND HOW TO CHANGE THESE VALUES DIRECTLY IN REDUCER
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var tempCustomerProfile = addPatientState.customerProfile
        tempCustomerProfile.firstName = event.target.value
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var tempCustomerProfile = addPatientState.customerProfile
        //tempCustomerProfile.age = event.target.value
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    };

    const genderOptionChange = (gender: string) => {
        var tempCustomerProfile = addPatientState.customerProfile
        tempCustomerProfile.gender = gender
        console.log(gender)
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    }

    const makeCustomerObject = () => {
        var currentCustomerRequestObj = addPatientState.customerProfile
        currentCustomerRequestObj.serviceProviderId = currentServiceProvider?.serviceProviderId ?? ""
        currentCustomerRequestObj.organisationId = currentServiceProvider?.serviceProviderProfile.organisationId ?? ""
        currentCustomerRequestObj.phoneNumbers = [{ phoneNumberId: "", countryCode: "+91", number: addPatientState.phoneNumber, type: "" } as IPhoneNumberData]

        return currentCustomerRequestObj;
    }

    return {
        addPatientState,
        genderOptions,
        handleNumberChange,
        handleNameChange,
        handleAgeChange,
        genderOptionChange,
        makeCustomerObject
    };
}
