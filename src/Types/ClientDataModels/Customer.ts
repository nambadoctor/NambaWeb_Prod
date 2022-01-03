export default interface ICustomerData {
    customerId: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: string
    age: string
}

export function MakeEmptyCustomerData() {
    return {
        customerId: "",
        phoneNumber: "",
        lastName: "",
        firstName: "",
        gender: "",
        dateOfBirth: "",
        age: ""
    } as ICustomerData
}