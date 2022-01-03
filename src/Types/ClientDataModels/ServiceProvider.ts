import IServiceProviderProfile from "./ServiceProviderProfile";

export default interface IServiceProvider {
    serviceProviderId:string,
    organisationId:string,
    roles:string[],
    serviceProviderProfile:IServiceProviderProfile
}