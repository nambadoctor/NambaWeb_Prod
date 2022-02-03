import IOrganisationBasic from './OrganisationBasic';

export default interface IServiceProviderBasic {
    serviceProviderId: string;
    organisations: IOrganisationBasic[];
}
