import IOrganisationBasic from "./OrganisationBasic";

export default interface IServiceProviderBasic {
    servieProviderId:string,
    organisations:IOrganisationBasic[]
}