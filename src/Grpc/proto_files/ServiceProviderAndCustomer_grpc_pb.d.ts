// package: nd.v1
// file: ServiceProviderAndCustomer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ServiceProviderAndCustomer_pb from "./ServiceProviderAndCustomer_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

interface IRatingAndReviewWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setRating: IRatingAndReviewWorkerV1Service_ISetRating;
    getRating: IRatingAndReviewWorkerV1Service_IGetRating;
}

interface IRatingAndReviewWorkerV1Service_ISetRating extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.RatingAndReviewMessage, ServiceProviderAndCustomer_pb.StringMessage> {
    path: "/nd.v1.RatingAndReviewWorkerV1/SetRating";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.RatingAndReviewMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.RatingAndReviewMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.StringMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.StringMessage>;
}
interface IRatingAndReviewWorkerV1Service_IGetRating extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.RatingRequestMessage, ServiceProviderAndCustomer_pb.RatingAndReviewMessage> {
    path: "/nd.v1.RatingAndReviewWorkerV1/GetRating";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.RatingRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.RatingRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.RatingAndReviewMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.RatingAndReviewMessage>;
}

export const RatingAndReviewWorkerV1Service: IRatingAndReviewWorkerV1Service;

export interface IRatingAndReviewWorkerV1Server {
    setRating: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.RatingAndReviewMessage, ServiceProviderAndCustomer_pb.StringMessage>;
    getRating: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.RatingRequestMessage, ServiceProviderAndCustomer_pb.RatingAndReviewMessage>;
}

export interface IRatingAndReviewWorkerV1Client {
    setRating(request: ServiceProviderAndCustomer_pb.RatingAndReviewMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    setRating(request: ServiceProviderAndCustomer_pb.RatingAndReviewMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    setRating(request: ServiceProviderAndCustomer_pb.RatingAndReviewMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getRating(request: ServiceProviderAndCustomer_pb.RatingRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.RatingAndReviewMessage) => void): grpc.ClientUnaryCall;
    getRating(request: ServiceProviderAndCustomer_pb.RatingRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.RatingAndReviewMessage) => void): grpc.ClientUnaryCall;
    getRating(request: ServiceProviderAndCustomer_pb.RatingRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.RatingAndReviewMessage) => void): grpc.ClientUnaryCall;
}

export class RatingAndReviewWorkerV1Client extends grpc.Client implements IRatingAndReviewWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setRating(request: ServiceProviderAndCustomer_pb.RatingAndReviewMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public setRating(request: ServiceProviderAndCustomer_pb.RatingAndReviewMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public setRating(request: ServiceProviderAndCustomer_pb.RatingAndReviewMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getRating(request: ServiceProviderAndCustomer_pb.RatingRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.RatingAndReviewMessage) => void): grpc.ClientUnaryCall;
    public getRating(request: ServiceProviderAndCustomer_pb.RatingRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.RatingAndReviewMessage) => void): grpc.ClientUnaryCall;
    public getRating(request: ServiceProviderAndCustomer_pb.RatingRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.RatingAndReviewMessage) => void): grpc.ClientUnaryCall;
}

interface IServiceProviderAppointmentWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setAppointment: IServiceProviderAppointmentWorkerV1Service_ISetAppointment;
    getAppointment: IServiceProviderAppointmentWorkerV1Service_IGetAppointment;
    getAppointments: IServiceProviderAppointmentWorkerV1Service_IGetAppointments;
    getCustomerAppointments: IServiceProviderAppointmentWorkerV1Service_IGetCustomerAppointments;
    getAppointmentPayments: IServiceProviderAppointmentWorkerV1Service_IGetAppointmentPayments;
    getPayments: IServiceProviderAppointmentWorkerV1Service_IGetPayments;
}

interface IServiceProviderAppointmentWorkerV1Service_ISetAppointment extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.ServiceProviderAppointmentWorkerV1/SetAppointment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface IServiceProviderAppointmentWorkerV1Service_IGetAppointment extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage> {
    path: "/nd.v1.ServiceProviderAppointmentWorkerV1/GetAppointment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage>;
}
interface IServiceProviderAppointmentWorkerV1Service_IGetAppointments extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList> {
    path: "/nd.v1.ServiceProviderAppointmentWorkerV1/GetAppointments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList>;
}
interface IServiceProviderAppointmentWorkerV1Service_IGetCustomerAppointments extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList> {
    path: "/nd.v1.ServiceProviderAppointmentWorkerV1/GetCustomerAppointments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList>;
}
interface IServiceProviderAppointmentWorkerV1Service_IGetAppointmentPayments extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage> {
    path: "/nd.v1.ServiceProviderAppointmentWorkerV1/GetAppointmentPayments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage>;
}
interface IServiceProviderAppointmentWorkerV1Service_IGetPayments extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage> {
    path: "/nd.v1.ServiceProviderAppointmentWorkerV1/GetPayments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage>;
}

export const ServiceProviderAppointmentWorkerV1Service: IServiceProviderAppointmentWorkerV1Service;

export interface IServiceProviderAppointmentWorkerV1Server {
    setAppointment: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    getAppointment: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage>;
    getAppointments: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList>;
    getCustomerAppointments: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList>;
    getAppointmentPayments: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage>;
    getPayments: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage>;
}

export interface IServiceProviderAppointmentWorkerV1Client {
    setAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    getAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage) => void): grpc.ClientUnaryCall;
    getAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage) => void): grpc.ClientUnaryCall;
    getAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage) => void): grpc.ClientUnaryCall;
    getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    getCustomerAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    getCustomerAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    getCustomerAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    getAppointmentPayments(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentPayments(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentPayments(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    getPayments(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    getPayments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    getPayments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
}

export class ServiceProviderAppointmentWorkerV1Client extends grpc.Client implements IServiceProviderAppointmentWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public getAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage) => void): grpc.ClientUnaryCall;
    public getAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage) => void): grpc.ClientUnaryCall;
    public getAppointment(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage) => void): grpc.ClientUnaryCall;
    public getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    public getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    public getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    public getCustomerAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    public getCustomerAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    public getCustomerAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList) => void): grpc.ClientUnaryCall;
    public getAppointmentPayments(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentPayments(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentPayments(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    public getPayments(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    public getPayments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
    public getPayments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage) => void): grpc.ClientUnaryCall;
}

interface IServiceProviderCustomerWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setCustomerProfile: IServiceProviderCustomerWorkerV1Service_ISetCustomerProfile;
    getCustomerProfile: IServiceProviderCustomerWorkerV1Service_IGetCustomerProfile;
    getCustomers: IServiceProviderCustomerWorkerV1Service_IGetCustomers;
    getCustomerAppointmentSummary: IServiceProviderCustomerWorkerV1Service_IGetCustomerAppointmentSummary;
}

interface IServiceProviderCustomerWorkerV1Service_ISetCustomerProfile extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.ServiceProviderCustomerWorkerV1/SetCustomerProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface IServiceProviderCustomerWorkerV1Service_IGetCustomerProfile extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage> {
    path: "/nd.v1.ServiceProviderCustomerWorkerV1/GetCustomerProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage>;
}
interface IServiceProviderCustomerWorkerV1Service_IGetCustomers extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList> {
    path: "/nd.v1.ServiceProviderCustomerWorkerV1/GetCustomers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList>;
}
interface IServiceProviderCustomerWorkerV1Service_IGetCustomerAppointmentSummary extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage> {
    path: "/nd.v1.ServiceProviderCustomerWorkerV1/GetCustomerAppointmentSummary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage>;
}

export const ServiceProviderCustomerWorkerV1Service: IServiceProviderCustomerWorkerV1Service;

export interface IServiceProviderCustomerWorkerV1Server {
    setCustomerProfile: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    getCustomerProfile: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage>;
    getCustomers: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList>;
    getCustomerAppointmentSummary: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage>;
}

export interface IServiceProviderCustomerWorkerV1Client {
    setCustomerProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setCustomerProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setCustomerProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    getCustomers(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList) => void): grpc.ClientUnaryCall;
    getCustomers(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList) => void): grpc.ClientUnaryCall;
    getCustomers(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList) => void): grpc.ClientUnaryCall;
    getCustomerAppointmentSummary(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage) => void): grpc.ClientUnaryCall;
    getCustomerAppointmentSummary(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage) => void): grpc.ClientUnaryCall;
    getCustomerAppointmentSummary(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage) => void): grpc.ClientUnaryCall;
}

export class ServiceProviderCustomerWorkerV1Client extends grpc.Client implements IServiceProviderCustomerWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setCustomerProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setCustomerProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setCustomerProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    public getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    public getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    public getCustomers(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList) => void): grpc.ClientUnaryCall;
    public getCustomers(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList) => void): grpc.ClientUnaryCall;
    public getCustomers(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList) => void): grpc.ClientUnaryCall;
    public getCustomerAppointmentSummary(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage) => void): grpc.ClientUnaryCall;
    public getCustomerAppointmentSummary(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage) => void): grpc.ClientUnaryCall;
    public getCustomerAppointmentSummary(request: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage) => void): grpc.ClientUnaryCall;
}

interface IServiceProviderPrescriptionWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPrescription: IServiceProviderPrescriptionWorkerV1Service_IGetPrescription;
    setPrescription: IServiceProviderPrescriptionWorkerV1Service_ISetPrescription;
    downloadPrescriptionMedia: IServiceProviderPrescriptionWorkerV1Service_IDownloadPrescriptionMedia;
    getPrescriptionPdf: IServiceProviderPrescriptionWorkerV1Service_IGetPrescriptionPdf;
}

interface IServiceProviderPrescriptionWorkerV1Service_IGetPrescription extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage> {
    path: "/nd.v1.ServiceProviderPrescriptionWorkerV1/GetPrescription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage>;
}
interface IServiceProviderPrescriptionWorkerV1Service_ISetPrescription extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.ServiceProviderPrescriptionWorkerV1/SetPrescription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface IServiceProviderPrescriptionWorkerV1Service_IDownloadPrescriptionMedia extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage> {
    path: "/nd.v1.ServiceProviderPrescriptionWorkerV1/DownloadPrescriptionMedia";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.StringMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.StringMessage>;
}
interface IServiceProviderPrescriptionWorkerV1Service_IGetPrescriptionPdf extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.RequestPdf, ServiceProviderAndCustomer_pb.ResponsePdf> {
    path: "/nd.v1.ServiceProviderPrescriptionWorkerV1/GetPrescriptionPdf";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.RequestPdf>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.RequestPdf>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ResponsePdf>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ResponsePdf>;
}

export const ServiceProviderPrescriptionWorkerV1Service: IServiceProviderPrescriptionWorkerV1Service;

export interface IServiceProviderPrescriptionWorkerV1Server {
    getPrescription: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage>;
    setPrescription: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    downloadPrescriptionMedia: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage>;
    getPrescriptionPdf: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.RequestPdf, ServiceProviderAndCustomer_pb.ResponsePdf>;
}

export interface IServiceProviderPrescriptionWorkerV1Client {
    getPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage) => void): grpc.ClientUnaryCall;
    getPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage) => void): grpc.ClientUnaryCall;
    getPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage) => void): grpc.ClientUnaryCall;
    setPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
    getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
    getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
}

export class ServiceProviderPrescriptionWorkerV1Client extends grpc.Client implements IServiceProviderPrescriptionWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage) => void): grpc.ClientUnaryCall;
    public getPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage) => void): grpc.ClientUnaryCall;
    public getPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage) => void): grpc.ClientUnaryCall;
    public setPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setPrescription(request: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
    public getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
    public getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
}

interface IServiceProviderReportWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCustomerReports: IServiceProviderReportWorkerV1Service_IGetCustomerReports;
    getAppointmentReports: IServiceProviderReportWorkerV1Service_IGetAppointmentReports;
    setReport: IServiceProviderReportWorkerV1Service_ISetReport;
    downloadReportMedia: IServiceProviderReportWorkerV1Service_IDownloadReportMedia;
}

interface IServiceProviderReportWorkerV1Service_IGetCustomerReports extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage> {
    path: "/nd.v1.ServiceProviderReportWorkerV1/GetCustomerReports";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage>;
}
interface IServiceProviderReportWorkerV1Service_IGetAppointmentReports extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage> {
    path: "/nd.v1.ServiceProviderReportWorkerV1/GetAppointmentReports";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage>;
}
interface IServiceProviderReportWorkerV1Service_ISetReport extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.ServiceProviderReportWorkerV1/SetReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface IServiceProviderReportWorkerV1Service_IDownloadReportMedia extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage> {
    path: "/nd.v1.ServiceProviderReportWorkerV1/DownloadReportMedia";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.StringMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.StringMessage>;
}

export const ServiceProviderReportWorkerV1Service: IServiceProviderReportWorkerV1Service;

export interface IServiceProviderReportWorkerV1Server {
    getCustomerReports: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage>;
    getAppointmentReports: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage>;
    setReport: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    downloadReportMedia: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage>;
}

export interface IServiceProviderReportWorkerV1Client {
    getCustomerReports(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    getCustomerReports(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    getCustomerReports(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentReports(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentReports(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentReports(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    setReport(request: ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setReport(request: ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setReport(request: ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
}

export class ServiceProviderReportWorkerV1Client extends grpc.Client implements IServiceProviderReportWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getCustomerReports(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    public getCustomerReports(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    public getCustomerReports(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentReports(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentReports(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentReports(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage) => void): grpc.ClientUnaryCall;
    public setReport(request: ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setReport(request: ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setReport(request: ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
}

interface IServiceProviderWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setServiceProviderProfile: IServiceProviderWorkerV1Service_ISetServiceProviderProfile;
    getServiceProviderProfile: IServiceProviderWorkerV1Service_IGetServiceProviderProfile;
    setServiceProviderAvailability: IServiceProviderWorkerV1Service_ISetServiceProviderAvailability;
    getServiceProviderAvailablity: IServiceProviderWorkerV1Service_IGetServiceProviderAvailablity;
    getAutoFillMedicines: IServiceProviderWorkerV1Service_IGetAutoFillMedicines;
    setAutoFillMedicines: IServiceProviderWorkerV1Service_ISetAutoFillMedicines;
}

interface IServiceProviderWorkerV1Service_ISetServiceProviderProfile extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.ServiceProviderWorkerV1/SetServiceProviderProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface IServiceProviderWorkerV1Service_IGetServiceProviderProfile extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage> {
    path: "/nd.v1.ServiceProviderWorkerV1/GetServiceProviderProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage>;
}
interface IServiceProviderWorkerV1Service_ISetServiceProviderAvailability extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.ServiceProviderWorkerV1/SetServiceProviderAvailability";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface IServiceProviderWorkerV1Service_IGetServiceProviderAvailablity extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList> {
    path: "/nd.v1.ServiceProviderWorkerV1/GetServiceProviderAvailablity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList>;
}
interface IServiceProviderWorkerV1Service_IGetAutoFillMedicines extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage> {
    path: "/nd.v1.ServiceProviderWorkerV1/GetAutoFillMedicines";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage>;
}
interface IServiceProviderWorkerV1Service_ISetAutoFillMedicines extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.ServiceProviderWorkerV1/SetAutoFillMedicines";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}

export const ServiceProviderWorkerV1Service: IServiceProviderWorkerV1Service;

export interface IServiceProviderWorkerV1Server {
    setServiceProviderProfile: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    getServiceProviderProfile: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage>;
    setServiceProviderAvailability: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest, ServiceProviderAndCustomer_pb.IdMessage>;
    getServiceProviderAvailablity: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList>;
    getAutoFillMedicines: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage>;
    setAutoFillMedicines: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList, ServiceProviderAndCustomer_pb.IdMessage>;
}

export interface IServiceProviderWorkerV1Client {
    setServiceProviderProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setServiceProviderProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setServiceProviderProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    setServiceProviderAvailability(request: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setServiceProviderAvailability(request: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setServiceProviderAvailability(request: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    getAutoFillMedicines(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage) => void): grpc.ClientUnaryCall;
    getAutoFillMedicines(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage) => void): grpc.ClientUnaryCall;
    getAutoFillMedicines(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage) => void): grpc.ClientUnaryCall;
    setAutoFillMedicines(request: ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setAutoFillMedicines(request: ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setAutoFillMedicines(request: ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
}

export class ServiceProviderWorkerV1Client extends grpc.Client implements IServiceProviderWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setServiceProviderProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setServiceProviderProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setServiceProviderProfile(request: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    public setServiceProviderAvailability(request: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setServiceProviderAvailability(request: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setServiceProviderAvailability(request: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    public getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    public getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    public getAutoFillMedicines(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage) => void): grpc.ClientUnaryCall;
    public getAutoFillMedicines(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage) => void): grpc.ClientUnaryCall;
    public getAutoFillMedicines(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage) => void): grpc.ClientUnaryCall;
    public setAutoFillMedicines(request: ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setAutoFillMedicines(request: ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setAutoFillMedicines(request: ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
}

interface IServiceProviderServiceRequestWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setServiceRequest: IServiceProviderServiceRequestWorkerV1Service_ISetServiceRequest;
    getServiceRequest: IServiceProviderServiceRequestWorkerV1Service_IGetServiceRequest;
}

interface IServiceProviderServiceRequestWorkerV1Service_ISetServiceRequest extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.ServiceProviderServiceRequestWorkerV1/SetServiceRequest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface IServiceProviderServiceRequestWorkerV1Service_IGetServiceRequest extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage> {
    path: "/nd.v1.ServiceProviderServiceRequestWorkerV1/GetServiceRequest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage>;
}

export const ServiceProviderServiceRequestWorkerV1Service: IServiceProviderServiceRequestWorkerV1Service;

export interface IServiceProviderServiceRequestWorkerV1Server {
    setServiceRequest: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    getServiceRequest: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage>;
}

export interface IServiceProviderServiceRequestWorkerV1Client {
    setServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    getServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage) => void): grpc.ClientUnaryCall;
    getServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage) => void): grpc.ClientUnaryCall;
    getServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage) => void): grpc.ClientUnaryCall;
}

export class ServiceProviderServiceRequestWorkerV1Client extends grpc.Client implements IServiceProviderServiceRequestWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public getServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage) => void): grpc.ClientUnaryCall;
    public getServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage) => void): grpc.ClientUnaryCall;
    public getServiceRequest(request: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage) => void): grpc.ClientUnaryCall;
}

interface ILoggingWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setLog: ILoggingWorkerV1Service_ISetLog;
}

interface ILoggingWorkerV1Service_ISetLog extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.VoidMessage, ServiceProviderAndCustomer_pb.BoolMessage> {
    path: "/nd.v1.LoggingWorkerV1/SetLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.VoidMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.VoidMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.BoolMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.BoolMessage>;
}

export const LoggingWorkerV1Service: ILoggingWorkerV1Service;

export interface ILoggingWorkerV1Server {
    setLog: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.VoidMessage, ServiceProviderAndCustomer_pb.BoolMessage>;
}

export interface ILoggingWorkerV1Client {
    setLog(request: ServiceProviderAndCustomer_pb.VoidMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
    setLog(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
    setLog(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
}

export class LoggingWorkerV1Client extends grpc.Client implements ILoggingWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setLog(request: ServiceProviderAndCustomer_pb.VoidMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
    public setLog(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
    public setLog(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
}

interface INotificationWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendNotification: INotificationWorkerV1Service_ISendNotification;
}

interface INotificationWorkerV1Service_ISendNotification extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.NotificationRequestMessage, ServiceProviderAndCustomer_pb.BoolMessage> {
    path: "/nd.v1.NotificationWorkerV1/SendNotification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.NotificationRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.NotificationRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.BoolMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.BoolMessage>;
}

export const NotificationWorkerV1Service: INotificationWorkerV1Service;

export interface INotificationWorkerV1Server {
    sendNotification: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.NotificationRequestMessage, ServiceProviderAndCustomer_pb.BoolMessage>;
}

export interface INotificationWorkerV1Client {
    sendNotification(request: ServiceProviderAndCustomer_pb.NotificationRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
    sendNotification(request: ServiceProviderAndCustomer_pb.NotificationRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
    sendNotification(request: ServiceProviderAndCustomer_pb.NotificationRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
}

export class NotificationWorkerV1Client extends grpc.Client implements INotificationWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendNotification(request: ServiceProviderAndCustomer_pb.NotificationRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
    public sendNotification(request: ServiceProviderAndCustomer_pb.NotificationRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
    public sendNotification(request: ServiceProviderAndCustomer_pb.NotificationRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.BoolMessage) => void): grpc.ClientUnaryCall;
}

interface ITwilioWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTwilioVideoAuthToken: ITwilioWorkerV1Service_IGetTwilioVideoAuthToken;
    getTwilioChatAuthToken: ITwilioWorkerV1Service_IGetTwilioChatAuthToken;
}

interface ITwilioWorkerV1Service_IGetTwilioVideoAuthToken extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.TwilioAuthRequest, ServiceProviderAndCustomer_pb.StringMessage> {
    path: "/nd.v1.TwilioWorkerV1/GetTwilioVideoAuthToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.TwilioAuthRequest>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.TwilioAuthRequest>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.StringMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.StringMessage>;
}
interface ITwilioWorkerV1Service_IGetTwilioChatAuthToken extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage> {
    path: "/nd.v1.TwilioWorkerV1/GetTwilioChatAuthToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.StringMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.StringMessage>;
}

export const TwilioWorkerV1Service: ITwilioWorkerV1Service;

export interface ITwilioWorkerV1Server {
    getTwilioVideoAuthToken: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.TwilioAuthRequest, ServiceProviderAndCustomer_pb.StringMessage>;
    getTwilioChatAuthToken: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage>;
}

export interface ITwilioWorkerV1Client {
    getTwilioVideoAuthToken(request: ServiceProviderAndCustomer_pb.TwilioAuthRequest, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getTwilioVideoAuthToken(request: ServiceProviderAndCustomer_pb.TwilioAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getTwilioVideoAuthToken(request: ServiceProviderAndCustomer_pb.TwilioAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getTwilioChatAuthToken(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getTwilioChatAuthToken(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getTwilioChatAuthToken(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
}

export class TwilioWorkerV1Client extends grpc.Client implements ITwilioWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTwilioVideoAuthToken(request: ServiceProviderAndCustomer_pb.TwilioAuthRequest, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getTwilioVideoAuthToken(request: ServiceProviderAndCustomer_pb.TwilioAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getTwilioVideoAuthToken(request: ServiceProviderAndCustomer_pb.TwilioAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getTwilioChatAuthToken(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getTwilioChatAuthToken(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getTwilioChatAuthToken(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
}

interface IUserTypeWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserType: IUserTypeWorkerV1Service_IGetUserType;
}

interface IUserTypeWorkerV1Service_IGetUserType extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.VoidMessage, ServiceProviderAndCustomer_pb.StringMessage> {
    path: "/nd.v1.UserTypeWorkerV1/GetUserType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.VoidMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.VoidMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.StringMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.StringMessage>;
}

export const UserTypeWorkerV1Service: IUserTypeWorkerV1Service;

export interface IUserTypeWorkerV1Server {
    getUserType: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.VoidMessage, ServiceProviderAndCustomer_pb.StringMessage>;
}

export interface IUserTypeWorkerV1Client {
    getUserType(request: ServiceProviderAndCustomer_pb.VoidMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getUserType(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getUserType(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
}

export class UserTypeWorkerV1Client extends grpc.Client implements IUserTypeWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUserType(request: ServiceProviderAndCustomer_pb.VoidMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getUserType(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getUserType(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
}

interface ICustomerAppointmentWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setAppointment: ICustomerAppointmentWorkerV1Service_ISetAppointment;
    getAppointment: ICustomerAppointmentWorkerV1Service_IGetAppointment;
    getAppointments: ICustomerAppointmentWorkerV1Service_IGetAppointments;
    getAppointmentPayments: ICustomerAppointmentWorkerV1Service_IGetAppointmentPayments;
    setNewPayment: ICustomerAppointmentWorkerV1Service_ISetNewPayment;
}

interface ICustomerAppointmentWorkerV1Service_ISetAppointment extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerAppointmentMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.CustomerAppointmentWorkerV1/SetAppointment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerAppointmentMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerAppointmentMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface ICustomerAppointmentWorkerV1Service_IGetAppointment extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, ServiceProviderAndCustomer_pb.CustomerAppointmentMessage> {
    path: "/nd.v1.CustomerAppointmentWorkerV1/GetAppointment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerAppointmentMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerAppointmentMessage>;
}
interface ICustomerAppointmentWorkerV1Service_IGetAppointments extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerAppointmentList> {
    path: "/nd.v1.CustomerAppointmentWorkerV1/GetAppointments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerAppointmentList>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerAppointmentList>;
}
interface ICustomerAppointmentWorkerV1Service_IGetAppointmentPayments extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, ServiceProviderAndCustomer_pb.CustomerPaymentListMessage> {
    path: "/nd.v1.CustomerAppointmentWorkerV1/GetAppointmentPayments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerPaymentListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerPaymentListMessage>;
}
interface ICustomerAppointmentWorkerV1Service_ISetNewPayment extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.CustomerAppointmentWorkerV1/SetNewPayment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}

export const CustomerAppointmentWorkerV1Service: ICustomerAppointmentWorkerV1Service;

export interface ICustomerAppointmentWorkerV1Server {
    setAppointment: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerAppointmentMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    getAppointment: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, ServiceProviderAndCustomer_pb.CustomerAppointmentMessage>;
    getAppointments: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerAppointmentList>;
    getAppointmentPayments: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, ServiceProviderAndCustomer_pb.CustomerPaymentListMessage>;
    setNewPayment: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage, ServiceProviderAndCustomer_pb.IdMessage>;
}

export interface ICustomerAppointmentWorkerV1Client {
    setAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    getAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage) => void): grpc.ClientUnaryCall;
    getAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage) => void): grpc.ClientUnaryCall;
    getAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage) => void): grpc.ClientUnaryCall;
    getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentList) => void): grpc.ClientUnaryCall;
    getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentList) => void): grpc.ClientUnaryCall;
    getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentList) => void): grpc.ClientUnaryCall;
    getAppointmentPayments(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPaymentListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentPayments(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPaymentListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentPayments(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPaymentListMessage) => void): grpc.ClientUnaryCall;
    setNewPayment(request: ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setNewPayment(request: ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setNewPayment(request: ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
}

export class CustomerAppointmentWorkerV1Client extends grpc.Client implements ICustomerAppointmentWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public getAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage) => void): grpc.ClientUnaryCall;
    public getAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage) => void): grpc.ClientUnaryCall;
    public getAppointment(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage) => void): grpc.ClientUnaryCall;
    public getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentList) => void): grpc.ClientUnaryCall;
    public getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentList) => void): grpc.ClientUnaryCall;
    public getAppointments(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAppointmentList) => void): grpc.ClientUnaryCall;
    public getAppointmentPayments(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPaymentListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentPayments(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPaymentListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentPayments(request: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPaymentListMessage) => void): grpc.ClientUnaryCall;
    public setNewPayment(request: ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setNewPayment(request: ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setNewPayment(request: ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
}

interface ICustomerWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setCustomerProfile: ICustomerWorkerV1Service_ISetCustomerProfile;
    getCustomerProfile: ICustomerWorkerV1Service_IGetCustomerProfile;
    getLatestFollowUpWithServiceProvider: ICustomerWorkerV1Service_IGetLatestFollowUpWithServiceProvider;
    setChildProfile: ICustomerWorkerV1Service_ISetChildProfile;
    getTrustScore: ICustomerWorkerV1Service_IGetTrustScore;
}

interface ICustomerWorkerV1Service_ISetCustomerProfile extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.CustomerWorkerV1/SetCustomerProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface ICustomerWorkerV1Service_IGetCustomerProfile extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage> {
    path: "/nd.v1.CustomerWorkerV1/GetCustomerProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage>;
}
interface ICustomerWorkerV1Service_IGetLatestFollowUpWithServiceProvider extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage, ServiceProviderAndCustomer_pb.CustomerFollowUpMessage> {
    path: "/nd.v1.CustomerWorkerV1/GetLatestFollowUpWithServiceProvider";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerFollowUpMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerFollowUpMessage>;
}
interface ICustomerWorkerV1Service_ISetChildProfile extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.CustomerWorkerV1/SetChildProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface ICustomerWorkerV1Service_IGetTrustScore extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage, ServiceProviderAndCustomer_pb.IntMessage> {
    path: "/nd.v1.CustomerWorkerV1/GetTrustScore";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IntMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IntMessage>;
}

export const CustomerWorkerV1Service: ICustomerWorkerV1Service;

export interface ICustomerWorkerV1Server {
    setCustomerProfile: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    getCustomerProfile: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage>;
    getLatestFollowUpWithServiceProvider: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage, ServiceProviderAndCustomer_pb.CustomerFollowUpMessage>;
    setChildProfile: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    getTrustScore: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage, ServiceProviderAndCustomer_pb.IntMessage>;
}

export interface ICustomerWorkerV1Client {
    setCustomerProfile(request: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setCustomerProfile(request: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setCustomerProfile(request: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    getLatestFollowUpWithServiceProvider(request: ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerFollowUpMessage) => void): grpc.ClientUnaryCall;
    getLatestFollowUpWithServiceProvider(request: ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerFollowUpMessage) => void): grpc.ClientUnaryCall;
    getLatestFollowUpWithServiceProvider(request: ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerFollowUpMessage) => void): grpc.ClientUnaryCall;
    setChildProfile(request: ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setChildProfile(request: ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setChildProfile(request: ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    getTrustScore(request: ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IntMessage) => void): grpc.ClientUnaryCall;
    getTrustScore(request: ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IntMessage) => void): grpc.ClientUnaryCall;
    getTrustScore(request: ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IntMessage) => void): grpc.ClientUnaryCall;
}

export class CustomerWorkerV1Client extends grpc.Client implements ICustomerWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setCustomerProfile(request: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setCustomerProfile(request: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setCustomerProfile(request: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    public getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    public getCustomerProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage) => void): grpc.ClientUnaryCall;
    public getLatestFollowUpWithServiceProvider(request: ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerFollowUpMessage) => void): grpc.ClientUnaryCall;
    public getLatestFollowUpWithServiceProvider(request: ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerFollowUpMessage) => void): grpc.ClientUnaryCall;
    public getLatestFollowUpWithServiceProvider(request: ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerFollowUpMessage) => void): grpc.ClientUnaryCall;
    public setChildProfile(request: ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setChildProfile(request: ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setChildProfile(request: ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public getTrustScore(request: ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IntMessage) => void): grpc.ClientUnaryCall;
    public getTrustScore(request: ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IntMessage) => void): grpc.ClientUnaryCall;
    public getTrustScore(request: ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IntMessage) => void): grpc.ClientUnaryCall;
}

interface ICustomerPrescriptionWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPrescription: ICustomerPrescriptionWorkerV1Service_IGetPrescription;
    setPrescription: ICustomerPrescriptionWorkerV1Service_ISetPrescription;
    downloadPrescriptionMedia: ICustomerPrescriptionWorkerV1Service_IDownloadPrescriptionMedia;
    getPrescriptionPdf: ICustomerPrescriptionWorkerV1Service_IGetPrescriptionPdf;
}

interface ICustomerPrescriptionWorkerV1Service_IGetPrescription extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage> {
    path: "/nd.v1.CustomerPrescriptionWorkerV1/GetPrescription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage>;
}
interface ICustomerPrescriptionWorkerV1Service_ISetPrescription extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.CustomerPrescriptionWorkerV1/SetPrescription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface ICustomerPrescriptionWorkerV1Service_IDownloadPrescriptionMedia extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage> {
    path: "/nd.v1.CustomerPrescriptionWorkerV1/DownloadPrescriptionMedia";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.StringMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.StringMessage>;
}
interface ICustomerPrescriptionWorkerV1Service_IGetPrescriptionPdf extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.RequestPdf, ServiceProviderAndCustomer_pb.ResponsePdf> {
    path: "/nd.v1.CustomerPrescriptionWorkerV1/GetPrescriptionPdf";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.RequestPdf>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.RequestPdf>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.ResponsePdf>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.ResponsePdf>;
}

export const CustomerPrescriptionWorkerV1Service: ICustomerPrescriptionWorkerV1Service;

export interface ICustomerPrescriptionWorkerV1Server {
    getPrescription: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage>;
    setPrescription: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    downloadPrescriptionMedia: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage>;
    getPrescriptionPdf: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.RequestPdf, ServiceProviderAndCustomer_pb.ResponsePdf>;
}

export interface ICustomerPrescriptionWorkerV1Client {
    getPrescription(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage) => void): grpc.ClientUnaryCall;
    getPrescription(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage) => void): grpc.ClientUnaryCall;
    getPrescription(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage) => void): grpc.ClientUnaryCall;
    setPrescription(request: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setPrescription(request: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setPrescription(request: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
    getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
    getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
}

export class CustomerPrescriptionWorkerV1Client extends grpc.Client implements ICustomerPrescriptionWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPrescription(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage) => void): grpc.ClientUnaryCall;
    public getPrescription(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage) => void): grpc.ClientUnaryCall;
    public getPrescription(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage) => void): grpc.ClientUnaryCall;
    public setPrescription(request: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setPrescription(request: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setPrescription(request: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public downloadPrescriptionMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
    public getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
    public getPrescriptionPdf(request: ServiceProviderAndCustomer_pb.RequestPdf, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.ResponsePdf) => void): grpc.ClientUnaryCall;
}

interface ICustomerReportWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getReports: ICustomerReportWorkerV1Service_IGetReports;
    getAppointmentReports: ICustomerReportWorkerV1Service_IGetAppointmentReports;
    setReport: ICustomerReportWorkerV1Service_ISetReport;
    downloadReportMedia: ICustomerReportWorkerV1Service_IDownloadReportMedia;
}

interface ICustomerReportWorkerV1Service_IGetReports extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerReportListMessage> {
    path: "/nd.v1.CustomerReportWorkerV1/GetReports";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerReportListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerReportListMessage>;
}
interface ICustomerReportWorkerV1Service_IGetAppointmentReports extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.CustomerReportListMessage> {
    path: "/nd.v1.CustomerReportWorkerV1/GetAppointmentReports";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerReportListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerReportListMessage>;
}
interface ICustomerReportWorkerV1Service_ISetReport extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerReportUploadMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.CustomerReportWorkerV1/SetReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerReportUploadMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerReportUploadMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface ICustomerReportWorkerV1Service_IDownloadReportMedia extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage> {
    path: "/nd.v1.CustomerReportWorkerV1/DownloadReportMedia";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.StringMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.StringMessage>;
}

export const CustomerReportWorkerV1Service: ICustomerReportWorkerV1Service;

export interface ICustomerReportWorkerV1Server {
    getReports: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerReportListMessage>;
    getAppointmentReports: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.CustomerReportListMessage>;
    setReport: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerReportUploadMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    downloadReportMedia: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.StringMessage>;
}

export interface ICustomerReportWorkerV1Client {
    getReports(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    getReports(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    getReports(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentReports(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentReports(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    getAppointmentReports(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    setReport(request: ServiceProviderAndCustomer_pb.CustomerReportUploadMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setReport(request: ServiceProviderAndCustomer_pb.CustomerReportUploadMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setReport(request: ServiceProviderAndCustomer_pb.CustomerReportUploadMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
}

export class CustomerReportWorkerV1Client extends grpc.Client implements ICustomerReportWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getReports(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    public getReports(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    public getReports(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentReports(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentReports(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    public getAppointmentReports(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerReportListMessage) => void): grpc.ClientUnaryCall;
    public setReport(request: ServiceProviderAndCustomer_pb.CustomerReportUploadMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setReport(request: ServiceProviderAndCustomer_pb.CustomerReportUploadMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setReport(request: ServiceProviderAndCustomer_pb.CustomerReportUploadMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
    public downloadReportMedia(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.StringMessage) => void): grpc.ClientUnaryCall;
}

interface ICustomerServiceProviderWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getServiceProviderProfile: ICustomerServiceProviderWorkerV1Service_IGetServiceProviderProfile;
    getServiceProviders: ICustomerServiceProviderWorkerV1Service_IGetServiceProviders;
    getServiceProviderAvailablity: ICustomerServiceProviderWorkerV1Service_IGetServiceProviderAvailablity;
    getServiceProviderAvailableSlots: ICustomerServiceProviderWorkerV1Service_IGetServiceProviderAvailableSlots;
    getAllSpecialties: ICustomerServiceProviderWorkerV1Service_IGetAllSpecialties;
}

interface ICustomerServiceProviderWorkerV1Service_IGetServiceProviderProfile extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage> {
    path: "/nd.v1.CustomerServiceProviderWorkerV1/GetServiceProviderProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage>;
}
interface ICustomerServiceProviderWorkerV1Service_IGetServiceProviders extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage> {
    path: "/nd.v1.CustomerServiceProviderWorkerV1/GetServiceProviders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage>;
}
interface ICustomerServiceProviderWorkerV1Service_IGetServiceProviderAvailablity extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList> {
    path: "/nd.v1.CustomerServiceProviderWorkerV1/GetServiceProviderAvailablity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList>;
}
interface ICustomerServiceProviderWorkerV1Service_IGetServiceProviderAvailableSlots extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage> {
    path: "/nd.v1.CustomerServiceProviderWorkerV1/GetServiceProviderAvailableSlots";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage>;
}
interface ICustomerServiceProviderWorkerV1Service_IGetAllSpecialties extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.VoidMessage, ServiceProviderAndCustomer_pb.CategoryListMessage> {
    path: "/nd.v1.CustomerServiceProviderWorkerV1/GetAllSpecialties";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.VoidMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.VoidMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CategoryListMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CategoryListMessage>;
}

export const CustomerServiceProviderWorkerV1Service: ICustomerServiceProviderWorkerV1Service;

export interface ICustomerServiceProviderWorkerV1Server {
    getServiceProviderProfile: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage>;
    getServiceProviders: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage>;
    getServiceProviderAvailablity: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList>;
    getServiceProviderAvailableSlots: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.IdMessage, ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage>;
    getAllSpecialties: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.VoidMessage, ServiceProviderAndCustomer_pb.CategoryListMessage>;
}

export interface ICustomerServiceProviderWorkerV1Client {
    getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    getServiceProviders(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage) => void): grpc.ClientUnaryCall;
    getServiceProviders(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage) => void): grpc.ClientUnaryCall;
    getServiceProviders(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage) => void): grpc.ClientUnaryCall;
    getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    getServiceProviderAvailableSlots(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage) => void): grpc.ClientUnaryCall;
    getServiceProviderAvailableSlots(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage) => void): grpc.ClientUnaryCall;
    getServiceProviderAvailableSlots(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage) => void): grpc.ClientUnaryCall;
    getAllSpecialties(request: ServiceProviderAndCustomer_pb.VoidMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CategoryListMessage) => void): grpc.ClientUnaryCall;
    getAllSpecialties(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CategoryListMessage) => void): grpc.ClientUnaryCall;
    getAllSpecialties(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CategoryListMessage) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceProviderWorkerV1Client extends grpc.Client implements ICustomerServiceProviderWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviderProfile(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviders(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviders(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviders(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    public getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    public getServiceProviderAvailablity(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList) => void): grpc.ClientUnaryCall;
    public getServiceProviderAvailableSlots(request: ServiceProviderAndCustomer_pb.IdMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviderAvailableSlots(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage) => void): grpc.ClientUnaryCall;
    public getServiceProviderAvailableSlots(request: ServiceProviderAndCustomer_pb.IdMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage) => void): grpc.ClientUnaryCall;
    public getAllSpecialties(request: ServiceProviderAndCustomer_pb.VoidMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CategoryListMessage) => void): grpc.ClientUnaryCall;
    public getAllSpecialties(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CategoryListMessage) => void): grpc.ClientUnaryCall;
    public getAllSpecialties(request: ServiceProviderAndCustomer_pb.VoidMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CategoryListMessage) => void): grpc.ClientUnaryCall;
}

interface ICustomerServiceRequestWorkerV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setServiceRequest: ICustomerServiceRequestWorkerV1Service_ISetServiceRequest;
    getServiceRequest: ICustomerServiceRequestWorkerV1Service_IGetServiceRequest;
}

interface ICustomerServiceRequestWorkerV1Service_ISetServiceRequest extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage, ServiceProviderAndCustomer_pb.IdMessage> {
    path: "/nd.v1.CustomerServiceRequestWorkerV1/SetServiceRequest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.IdMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.IdMessage>;
}
interface ICustomerServiceRequestWorkerV1Service_IGetServiceRequest extends grpc.MethodDefinition<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage> {
    path: "/nd.v1.CustomerServiceRequestWorkerV1/GetServiceRequest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage>;
    requestDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage>;
    responseSerialize: grpc.serialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage>;
    responseDeserialize: grpc.deserialize<ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage>;
}

export const CustomerServiceRequestWorkerV1Service: ICustomerServiceRequestWorkerV1Service;

export interface ICustomerServiceRequestWorkerV1Server {
    setServiceRequest: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage, ServiceProviderAndCustomer_pb.IdMessage>;
    getServiceRequest: grpc.handleUnaryCall<ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage>;
}

export interface ICustomerServiceRequestWorkerV1Client {
    setServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    setServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    getServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage) => void): grpc.ClientUnaryCall;
    getServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage) => void): grpc.ClientUnaryCall;
    getServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceRequestWorkerV1Client extends grpc.Client implements ICustomerServiceRequestWorkerV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public setServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.IdMessage) => void): grpc.ClientUnaryCall;
    public getServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage) => void): grpc.ClientUnaryCall;
    public getServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage) => void): grpc.ClientUnaryCall;
    public getServiceRequest(request: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage) => void): grpc.ClientUnaryCall;
}
