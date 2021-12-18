// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ServiceProviderAndCustomer_pb = require('./ServiceProviderAndCustomer_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_nd_v1_BoolMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.BoolMessage)) {
    throw new Error('Expected argument of type nd.v1.BoolMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_BoolMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.BoolMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CategoryListMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CategoryListMessage)) {
    throw new Error('Expected argument of type nd.v1.CategoryListMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CategoryListMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CategoryListMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerAppointmentList(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerAppointmentList)) {
    throw new Error('Expected argument of type nd.v1.CustomerAppointmentList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerAppointmentList(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerAppointmentList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerAppointmentMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerAppointmentMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerAppointmentMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerAppointmentMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerAppointmentMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerAppointmentRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerAppointmentRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerAppointmentRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerAvailabilityConfigList(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList)) {
    throw new Error('Expected argument of type nd.v1.CustomerAvailabilityConfigList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerAvailabilityConfigList(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerChildProfileUploadMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerChildProfileUploadMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerChildProfileUploadMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerCustomerProfileMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerCustomerProfileMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerCustomerProfileMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerFollowUpMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerFollowUpMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerFollowUpMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerFollowUpMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerFollowUpMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerFollowUpRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerFollowUpRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerFollowUpRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerGeneratedSlotListMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerGeneratedSlotListMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerGeneratedSlotListMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerPaymentInfoMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerPaymentInfoMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerPaymentInfoMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerPaymentListMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerPaymentListMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerPaymentListMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerPaymentListMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerPaymentListMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerPrescriptionMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerPrescriptionMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerPrescriptionMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerReportListMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerReportListMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerReportListMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerReportListMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerReportListMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerReportUploadMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerReportUploadMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerReportUploadMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerReportUploadMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerReportUploadMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerServiceRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerServiceRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerServiceRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerServiceRequestRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerServiceRequestRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerServiceRequestRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomerTrustScoreRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomerTrustScoreRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomerTrustScoreRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomersServiceProviderProfileListMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomersServiceProviderProfileListMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomersServiceProviderProfileListMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_CustomersServiceProviderProfileMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage)) {
    throw new Error('Expected argument of type nd.v1.CustomersServiceProviderProfileMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_CustomersServiceProviderProfileMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_IdMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.IdMessage)) {
    throw new Error('Expected argument of type nd.v1.IdMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_IdMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.IdMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_IntMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.IntMessage)) {
    throw new Error('Expected argument of type nd.v1.IntMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_IntMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.IntMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_NotificationRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.NotificationRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.NotificationRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_NotificationRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.NotificationRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_RatingAndReviewMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.RatingAndReviewMessage)) {
    throw new Error('Expected argument of type nd.v1.RatingAndReviewMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_RatingAndReviewMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.RatingAndReviewMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_RatingRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.RatingRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.RatingRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_RatingRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.RatingRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_RequestPdf(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.RequestPdf)) {
    throw new Error('Expected argument of type nd.v1.RequestPdf');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_RequestPdf(buffer_arg) {
  return ServiceProviderAndCustomer_pb.RequestPdf.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ResponsePdf(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ResponsePdf)) {
    throw new Error('Expected argument of type nd.v1.ResponsePdf');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ResponsePdf(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ResponsePdf.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderAppointmentList(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderAppointmentList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderAppointmentList(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderAppointmentMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderAppointmentMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderAppointmentMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderAppointmentRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderAppointmentRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderAppointmentRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderAppointmentSummaryListMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderAppointmentSummaryListMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderAppointmentSummaryListMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderAppointmentSummaryRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderAppointmentSummaryRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderAppointmentSummaryRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderAutofillMedicineListMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderAutofillMedicineListMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderAutofillMedicineListMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderAvailabilityConfigList(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderAvailabilityConfigList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderAvailabilityConfigList(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderAvailabilityRequest(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderAvailabilityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderAvailabilityRequest(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderCustomerProfileMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderCustomerProfileMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderCustomerProfileMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderMedicineMessageList(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderMedicineMessageList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderMedicineMessageList(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderMyPatientsProfileMessageList(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderMyPatientsProfileMessageList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderMyPatientsProfileMessageList(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderPaymentListMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderPaymentListMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderPaymentListMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderPrescriptionMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderPrescriptionMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderPrescriptionMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderProfileMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderProfileMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderProfileMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderReportListMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderReportListMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderReportListMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderReportUploadMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderReportUploadMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderReportUploadMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderServiceRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderServiceRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderServiceRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_ServiceProviderServiceRequestRequestMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage)) {
    throw new Error('Expected argument of type nd.v1.ServiceProviderServiceRequestRequestMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_ServiceProviderServiceRequestRequestMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_StringMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.StringMessage)) {
    throw new Error('Expected argument of type nd.v1.StringMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_StringMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.StringMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_TwilioAuthRequest(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.TwilioAuthRequest)) {
    throw new Error('Expected argument of type nd.v1.TwilioAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_TwilioAuthRequest(buffer_arg) {
  return ServiceProviderAndCustomer_pb.TwilioAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nd_v1_VoidMessage(arg) {
  if (!(arg instanceof ServiceProviderAndCustomer_pb.VoidMessage)) {
    throw new Error('Expected argument of type nd.v1.VoidMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nd_v1_VoidMessage(buffer_arg) {
  return ServiceProviderAndCustomer_pb.VoidMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var RatingAndReviewWorkerV1Service = exports.RatingAndReviewWorkerV1Service = {
  setRating: {
    path: '/nd.v1.RatingAndReviewWorkerV1/SetRating',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.RatingAndReviewMessage,
    responseType: ServiceProviderAndCustomer_pb.StringMessage,
    requestSerialize: serialize_nd_v1_RatingAndReviewMessage,
    requestDeserialize: deserialize_nd_v1_RatingAndReviewMessage,
    responseSerialize: serialize_nd_v1_StringMessage,
    responseDeserialize: deserialize_nd_v1_StringMessage,
  },
  getRating: {
    path: '/nd.v1.RatingAndReviewWorkerV1/GetRating',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.RatingRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.RatingAndReviewMessage,
    requestSerialize: serialize_nd_v1_RatingRequestMessage,
    requestDeserialize: deserialize_nd_v1_RatingRequestMessage,
    responseSerialize: serialize_nd_v1_RatingAndReviewMessage,
    responseDeserialize: deserialize_nd_v1_RatingAndReviewMessage,
  },
};

exports.RatingAndReviewWorkerV1Client = grpc.makeGenericClientConstructor(RatingAndReviewWorkerV1Service);
var ServiceProviderAppointmentWorkerV1Service = exports.ServiceProviderAppointmentWorkerV1Service = {
  setAppointment: {
    path: '/nd.v1.ServiceProviderAppointmentWorkerV1/SetAppointment',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderAppointmentMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderAppointmentMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  getAppointment: {
    path: '/nd.v1.ServiceProviderAppointmentWorkerV1/GetAppointment',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderAppointmentRequestMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderAppointmentRequestMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderAppointmentMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderAppointmentMessage,
  },
  getAppointments: {
    path: '/nd.v1.ServiceProviderAppointmentWorkerV1/GetAppointments',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderAppointmentList,
    responseDeserialize: deserialize_nd_v1_ServiceProviderAppointmentList,
  },
  getCustomerAppointments: {
    path: '/nd.v1.ServiceProviderAppointmentWorkerV1/GetCustomerAppointments',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentList,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderAppointmentList,
    responseDeserialize: deserialize_nd_v1_ServiceProviderAppointmentList,
  },
  getAppointmentPayments: {
    path: '/nd.v1.ServiceProviderAppointmentWorkerV1/GetAppointmentPayments',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderAppointmentRequestMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderAppointmentRequestMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderPaymentListMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderPaymentListMessage,
  },
  getPayments: {
    path: '/nd.v1.ServiceProviderAppointmentWorkerV1/GetPayments',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderPaymentListMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderPaymentListMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderPaymentListMessage,
  },
};

exports.ServiceProviderAppointmentWorkerV1Client = grpc.makeGenericClientConstructor(ServiceProviderAppointmentWorkerV1Service);
var ServiceProviderCustomerWorkerV1Service = exports.ServiceProviderCustomerWorkerV1Service = {
  setCustomerProfile: {
    path: '/nd.v1.ServiceProviderCustomerWorkerV1/SetCustomerProfile',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderCustomerProfileMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderCustomerProfileMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  getCustomerProfile: {
    path: '/nd.v1.ServiceProviderCustomerWorkerV1/GetCustomerProfile',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderCustomerProfileMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderCustomerProfileMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderCustomerProfileMessage,
  },
  getCustomers: {
    path: '/nd.v1.ServiceProviderCustomerWorkerV1/GetCustomers',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderMyPatientsProfileMessageList,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderMyPatientsProfileMessageList,
    responseDeserialize: deserialize_nd_v1_ServiceProviderMyPatientsProfileMessageList,
  },
  getCustomerAppointmentSummary: {
    path: '/nd.v1.ServiceProviderCustomerWorkerV1/GetCustomerAppointmentSummary',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderAppointmentSummaryListMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderAppointmentSummaryRequestMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderAppointmentSummaryRequestMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderAppointmentSummaryListMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderAppointmentSummaryListMessage,
  },
};

exports.ServiceProviderCustomerWorkerV1Client = grpc.makeGenericClientConstructor(ServiceProviderCustomerWorkerV1Service);
var ServiceProviderPrescriptionWorkerV1Service = exports.ServiceProviderPrescriptionWorkerV1Service = {
  getPrescription: {
    path: '/nd.v1.ServiceProviderPrescriptionWorkerV1/GetPrescription',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderServiceRequestRequestMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderServiceRequestRequestMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderPrescriptionMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderPrescriptionMessage,
  },
  setPrescription: {
    path: '/nd.v1.ServiceProviderPrescriptionWorkerV1/SetPrescription',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderPrescriptionMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderPrescriptionMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderPrescriptionMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  downloadPrescriptionMedia: {
    path: '/nd.v1.ServiceProviderPrescriptionWorkerV1/DownloadPrescriptionMedia',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.StringMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_StringMessage,
    responseDeserialize: deserialize_nd_v1_StringMessage,
  },
  getPrescriptionPdf: {
    path: '/nd.v1.ServiceProviderPrescriptionWorkerV1/GetPrescriptionPdf',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.RequestPdf,
    responseType: ServiceProviderAndCustomer_pb.ResponsePdf,
    requestSerialize: serialize_nd_v1_RequestPdf,
    requestDeserialize: deserialize_nd_v1_RequestPdf,
    responseSerialize: serialize_nd_v1_ResponsePdf,
    responseDeserialize: deserialize_nd_v1_ResponsePdf,
  },
};

exports.ServiceProviderPrescriptionWorkerV1Client = grpc.makeGenericClientConstructor(ServiceProviderPrescriptionWorkerV1Service);
var ServiceProviderReportWorkerV1Service = exports.ServiceProviderReportWorkerV1Service = {
  getCustomerReports: {
    path: '/nd.v1.ServiceProviderReportWorkerV1/GetCustomerReports',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderReportListMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderReportListMessage,
  },
  getAppointmentReports: {
    path: '/nd.v1.ServiceProviderReportWorkerV1/GetAppointmentReports',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderReportListMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderServiceRequestRequestMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderServiceRequestRequestMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderReportListMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderReportListMessage,
  },
  setReport: {
    path: '/nd.v1.ServiceProviderReportWorkerV1/SetReport',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderReportUploadMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderReportUploadMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderReportUploadMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  downloadReportMedia: {
    path: '/nd.v1.ServiceProviderReportWorkerV1/DownloadReportMedia',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.StringMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_StringMessage,
    responseDeserialize: deserialize_nd_v1_StringMessage,
  },
};

exports.ServiceProviderReportWorkerV1Client = grpc.makeGenericClientConstructor(ServiceProviderReportWorkerV1Service);
var ServiceProviderWorkerV1Service = exports.ServiceProviderWorkerV1Service = {
  setServiceProviderProfile: {
    path: '/nd.v1.ServiceProviderWorkerV1/SetServiceProviderProfile',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderProfileMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderProfileMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  getServiceProviderProfile: {
    path: '/nd.v1.ServiceProviderWorkerV1/GetServiceProviderProfile',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderProfileMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderProfileMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderProfileMessage,
  },
  setServiceProviderAvailability: {
    path: '/nd.v1.ServiceProviderWorkerV1/SetServiceProviderAvailability',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityRequest,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderAvailabilityRequest,
    requestDeserialize: deserialize_nd_v1_ServiceProviderAvailabilityRequest,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  getServiceProviderAvailablity: {
    path: '/nd.v1.ServiceProviderWorkerV1/GetServiceProviderAvailablity',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderAvailabilityConfigList,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderAvailabilityConfigList,
    responseDeserialize: deserialize_nd_v1_ServiceProviderAvailabilityConfigList,
  },
  getAutoFillMedicines: {
    path: '/nd.v1.ServiceProviderWorkerV1/GetAutoFillMedicines',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderAutofillMedicineListMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderAutofillMedicineListMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderAutofillMedicineListMessage,
  },
  setAutoFillMedicines: {
    path: '/nd.v1.ServiceProviderWorkerV1/SetAutoFillMedicines',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderMedicineMessageList,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderMedicineMessageList,
    requestDeserialize: deserialize_nd_v1_ServiceProviderMedicineMessageList,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
};

exports.ServiceProviderWorkerV1Client = grpc.makeGenericClientConstructor(ServiceProviderWorkerV1Service);
var ServiceProviderServiceRequestWorkerV1Service = exports.ServiceProviderServiceRequestWorkerV1Service = {
  setServiceRequest: {
    path: '/nd.v1.ServiceProviderServiceRequestWorkerV1/SetServiceRequest',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderServiceRequestMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderServiceRequestMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  getServiceRequest: {
    path: '/nd.v1.ServiceProviderServiceRequestWorkerV1/GetServiceRequest',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.ServiceProviderServiceRequestMessage,
    requestSerialize: serialize_nd_v1_ServiceProviderServiceRequestRequestMessage,
    requestDeserialize: deserialize_nd_v1_ServiceProviderServiceRequestRequestMessage,
    responseSerialize: serialize_nd_v1_ServiceProviderServiceRequestMessage,
    responseDeserialize: deserialize_nd_v1_ServiceProviderServiceRequestMessage,
  },
};

exports.ServiceProviderServiceRequestWorkerV1Client = grpc.makeGenericClientConstructor(ServiceProviderServiceRequestWorkerV1Service);
var LoggingWorkerV1Service = exports.LoggingWorkerV1Service = {
  setLog: {
    path: '/nd.v1.LoggingWorkerV1/SetLog',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.VoidMessage,
    responseType: ServiceProviderAndCustomer_pb.BoolMessage,
    requestSerialize: serialize_nd_v1_VoidMessage,
    requestDeserialize: deserialize_nd_v1_VoidMessage,
    responseSerialize: serialize_nd_v1_BoolMessage,
    responseDeserialize: deserialize_nd_v1_BoolMessage,
  },
};

exports.LoggingWorkerV1Client = grpc.makeGenericClientConstructor(LoggingWorkerV1Service);
var NotificationWorkerV1Service = exports.NotificationWorkerV1Service = {
  sendNotification: {
    path: '/nd.v1.NotificationWorkerV1/SendNotification',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.NotificationRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.BoolMessage,
    requestSerialize: serialize_nd_v1_NotificationRequestMessage,
    requestDeserialize: deserialize_nd_v1_NotificationRequestMessage,
    responseSerialize: serialize_nd_v1_BoolMessage,
    responseDeserialize: deserialize_nd_v1_BoolMessage,
  },
};

exports.NotificationWorkerV1Client = grpc.makeGenericClientConstructor(NotificationWorkerV1Service);
var TwilioWorkerV1Service = exports.TwilioWorkerV1Service = {
  getTwilioVideoAuthToken: {
    path: '/nd.v1.TwilioWorkerV1/GetTwilioVideoAuthToken',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.TwilioAuthRequest,
    responseType: ServiceProviderAndCustomer_pb.StringMessage,
    requestSerialize: serialize_nd_v1_TwilioAuthRequest,
    requestDeserialize: deserialize_nd_v1_TwilioAuthRequest,
    responseSerialize: serialize_nd_v1_StringMessage,
    responseDeserialize: deserialize_nd_v1_StringMessage,
  },
  getTwilioChatAuthToken: {
    path: '/nd.v1.TwilioWorkerV1/GetTwilioChatAuthToken',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.StringMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_StringMessage,
    responseDeserialize: deserialize_nd_v1_StringMessage,
  },
};

exports.TwilioWorkerV1Client = grpc.makeGenericClientConstructor(TwilioWorkerV1Service);
var UserTypeWorkerV1Service = exports.UserTypeWorkerV1Service = {
  getUserType: {
    path: '/nd.v1.UserTypeWorkerV1/GetUserType',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.VoidMessage,
    responseType: ServiceProviderAndCustomer_pb.StringMessage,
    requestSerialize: serialize_nd_v1_VoidMessage,
    requestDeserialize: deserialize_nd_v1_VoidMessage,
    responseSerialize: serialize_nd_v1_StringMessage,
    responseDeserialize: deserialize_nd_v1_StringMessage,
  },
};

exports.UserTypeWorkerV1Client = grpc.makeGenericClientConstructor(UserTypeWorkerV1Service);
var CustomerAppointmentWorkerV1Service = exports.CustomerAppointmentWorkerV1Service = {
  setAppointment: {
    path: '/nd.v1.CustomerAppointmentWorkerV1/SetAppointment',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_CustomerAppointmentMessage,
    requestDeserialize: deserialize_nd_v1_CustomerAppointmentMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  getAppointment: {
    path: '/nd.v1.CustomerAppointmentWorkerV1/GetAppointment',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerAppointmentMessage,
    requestSerialize: serialize_nd_v1_CustomerAppointmentRequestMessage,
    requestDeserialize: deserialize_nd_v1_CustomerAppointmentRequestMessage,
    responseSerialize: serialize_nd_v1_CustomerAppointmentMessage,
    responseDeserialize: deserialize_nd_v1_CustomerAppointmentMessage,
  },
  getAppointments: {
    path: '/nd.v1.CustomerAppointmentWorkerV1/GetAppointments',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerAppointmentList,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_CustomerAppointmentList,
    responseDeserialize: deserialize_nd_v1_CustomerAppointmentList,
  },
  getAppointmentPayments: {
    path: '/nd.v1.CustomerAppointmentWorkerV1/GetAppointmentPayments',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerAppointmentRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerPaymentListMessage,
    requestSerialize: serialize_nd_v1_CustomerAppointmentRequestMessage,
    requestDeserialize: deserialize_nd_v1_CustomerAppointmentRequestMessage,
    responseSerialize: serialize_nd_v1_CustomerPaymentListMessage,
    responseDeserialize: deserialize_nd_v1_CustomerPaymentListMessage,
  },
  setNewPayment: {
    path: '/nd.v1.CustomerAppointmentWorkerV1/SetNewPayment',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerPaymentInfoMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_CustomerPaymentInfoMessage,
    requestDeserialize: deserialize_nd_v1_CustomerPaymentInfoMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
};

exports.CustomerAppointmentWorkerV1Client = grpc.makeGenericClientConstructor(CustomerAppointmentWorkerV1Service);
var CustomerWorkerV1Service = exports.CustomerWorkerV1Service = {
  setCustomerProfile: {
    path: '/nd.v1.CustomerWorkerV1/SetCustomerProfile',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_CustomerCustomerProfileMessage,
    requestDeserialize: deserialize_nd_v1_CustomerCustomerProfileMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  getCustomerProfile: {
    path: '/nd.v1.CustomerWorkerV1/GetCustomerProfile',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerCustomerProfileMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_CustomerCustomerProfileMessage,
    responseDeserialize: deserialize_nd_v1_CustomerCustomerProfileMessage,
  },
  getLatestFollowUpWithServiceProvider: {
    path: '/nd.v1.CustomerWorkerV1/GetLatestFollowUpWithServiceProvider',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerFollowUpRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerFollowUpMessage,
    requestSerialize: serialize_nd_v1_CustomerFollowUpRequestMessage,
    requestDeserialize: deserialize_nd_v1_CustomerFollowUpRequestMessage,
    responseSerialize: serialize_nd_v1_CustomerFollowUpMessage,
    responseDeserialize: deserialize_nd_v1_CustomerFollowUpMessage,
  },
  setChildProfile: {
    path: '/nd.v1.CustomerWorkerV1/SetChildProfile',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerChildProfileUploadMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_CustomerChildProfileUploadMessage,
    requestDeserialize: deserialize_nd_v1_CustomerChildProfileUploadMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  getTrustScore: {
    path: '/nd.v1.CustomerWorkerV1/GetTrustScore',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerTrustScoreRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.IntMessage,
    requestSerialize: serialize_nd_v1_CustomerTrustScoreRequestMessage,
    requestDeserialize: deserialize_nd_v1_CustomerTrustScoreRequestMessage,
    responseSerialize: serialize_nd_v1_IntMessage,
    responseDeserialize: deserialize_nd_v1_IntMessage,
  },
};

exports.CustomerWorkerV1Client = grpc.makeGenericClientConstructor(CustomerWorkerV1Service);
var CustomerPrescriptionWorkerV1Service = exports.CustomerPrescriptionWorkerV1Service = {
  getPrescription: {
    path: '/nd.v1.CustomerPrescriptionWorkerV1/GetPrescription',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage,
    requestSerialize: serialize_nd_v1_CustomerServiceRequestRequestMessage,
    requestDeserialize: deserialize_nd_v1_CustomerServiceRequestRequestMessage,
    responseSerialize: serialize_nd_v1_CustomerPrescriptionMessage,
    responseDeserialize: deserialize_nd_v1_CustomerPrescriptionMessage,
  },
  setPrescription: {
    path: '/nd.v1.CustomerPrescriptionWorkerV1/SetPrescription',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerPrescriptionMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_CustomerPrescriptionMessage,
    requestDeserialize: deserialize_nd_v1_CustomerPrescriptionMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  downloadPrescriptionMedia: {
    path: '/nd.v1.CustomerPrescriptionWorkerV1/DownloadPrescriptionMedia',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.StringMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_StringMessage,
    responseDeserialize: deserialize_nd_v1_StringMessage,
  },
  getPrescriptionPdf: {
    path: '/nd.v1.CustomerPrescriptionWorkerV1/GetPrescriptionPdf',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.RequestPdf,
    responseType: ServiceProviderAndCustomer_pb.ResponsePdf,
    requestSerialize: serialize_nd_v1_RequestPdf,
    requestDeserialize: deserialize_nd_v1_RequestPdf,
    responseSerialize: serialize_nd_v1_ResponsePdf,
    responseDeserialize: deserialize_nd_v1_ResponsePdf,
  },
};

exports.CustomerPrescriptionWorkerV1Client = grpc.makeGenericClientConstructor(CustomerPrescriptionWorkerV1Service);
var CustomerReportWorkerV1Service = exports.CustomerReportWorkerV1Service = {
  getReports: {
    path: '/nd.v1.CustomerReportWorkerV1/GetReports',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerReportListMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_CustomerReportListMessage,
    responseDeserialize: deserialize_nd_v1_CustomerReportListMessage,
  },
  getAppointmentReports: {
    path: '/nd.v1.CustomerReportWorkerV1/GetAppointmentReports',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerReportListMessage,
    requestSerialize: serialize_nd_v1_CustomerServiceRequestRequestMessage,
    requestDeserialize: deserialize_nd_v1_CustomerServiceRequestRequestMessage,
    responseSerialize: serialize_nd_v1_CustomerReportListMessage,
    responseDeserialize: deserialize_nd_v1_CustomerReportListMessage,
  },
  setReport: {
    path: '/nd.v1.CustomerReportWorkerV1/SetReport',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerReportUploadMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_CustomerReportUploadMessage,
    requestDeserialize: deserialize_nd_v1_CustomerReportUploadMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  downloadReportMedia: {
    path: '/nd.v1.CustomerReportWorkerV1/DownloadReportMedia',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.StringMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_StringMessage,
    responseDeserialize: deserialize_nd_v1_StringMessage,
  },
};

exports.CustomerReportWorkerV1Client = grpc.makeGenericClientConstructor(CustomerReportWorkerV1Service);
var CustomerServiceProviderWorkerV1Service = exports.CustomerServiceProviderWorkerV1Service = {
  getServiceProviderProfile: {
    path: '/nd.v1.CustomerServiceProviderWorkerV1/GetServiceProviderProfile',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_CustomersServiceProviderProfileMessage,
    responseDeserialize: deserialize_nd_v1_CustomersServiceProviderProfileMessage,
  },
  getServiceProviders: {
    path: '/nd.v1.CustomerServiceProviderWorkerV1/GetServiceProviders',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomersServiceProviderProfileListMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_CustomersServiceProviderProfileListMessage,
    responseDeserialize: deserialize_nd_v1_CustomersServiceProviderProfileListMessage,
  },
  getServiceProviderAvailablity: {
    path: '/nd.v1.CustomerServiceProviderWorkerV1/GetServiceProviderAvailablity',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerAvailabilityConfigList,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_CustomerAvailabilityConfigList,
    responseDeserialize: deserialize_nd_v1_CustomerAvailabilityConfigList,
  },
  getServiceProviderAvailableSlots: {
    path: '/nd.v1.CustomerServiceProviderWorkerV1/GetServiceProviderAvailableSlots',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.IdMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerGeneratedSlotListMessage,
    requestSerialize: serialize_nd_v1_IdMessage,
    requestDeserialize: deserialize_nd_v1_IdMessage,
    responseSerialize: serialize_nd_v1_CustomerGeneratedSlotListMessage,
    responseDeserialize: deserialize_nd_v1_CustomerGeneratedSlotListMessage,
  },
  getAllSpecialties: {
    path: '/nd.v1.CustomerServiceProviderWorkerV1/GetAllSpecialties',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.VoidMessage,
    responseType: ServiceProviderAndCustomer_pb.CategoryListMessage,
    requestSerialize: serialize_nd_v1_VoidMessage,
    requestDeserialize: deserialize_nd_v1_VoidMessage,
    responseSerialize: serialize_nd_v1_CategoryListMessage,
    responseDeserialize: deserialize_nd_v1_CategoryListMessage,
  },
};

exports.CustomerServiceProviderWorkerV1Client = grpc.makeGenericClientConstructor(CustomerServiceProviderWorkerV1Service);
var CustomerServiceRequestWorkerV1Service = exports.CustomerServiceRequestWorkerV1Service = {
  setServiceRequest: {
    path: '/nd.v1.CustomerServiceRequestWorkerV1/SetServiceRequest',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.IdMessage,
    requestSerialize: serialize_nd_v1_CustomerServiceRequestMessage,
    requestDeserialize: deserialize_nd_v1_CustomerServiceRequestMessage,
    responseSerialize: serialize_nd_v1_IdMessage,
    responseDeserialize: deserialize_nd_v1_IdMessage,
  },
  getServiceRequest: {
    path: '/nd.v1.CustomerServiceRequestWorkerV1/GetServiceRequest',
    requestStream: false,
    responseStream: false,
    requestType: ServiceProviderAndCustomer_pb.CustomerServiceRequestRequestMessage,
    responseType: ServiceProviderAndCustomer_pb.CustomerServiceRequestMessage,
    requestSerialize: serialize_nd_v1_CustomerServiceRequestRequestMessage,
    requestDeserialize: deserialize_nd_v1_CustomerServiceRequestRequestMessage,
    responseSerialize: serialize_nd_v1_CustomerServiceRequestMessage,
    responseDeserialize: deserialize_nd_v1_CustomerServiceRequestMessage,
  },
};

exports.CustomerServiceRequestWorkerV1Client = grpc.makeGenericClientConstructor(CustomerServiceRequestWorkerV1Service);
