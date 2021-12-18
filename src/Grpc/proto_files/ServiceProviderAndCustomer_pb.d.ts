// package: nd.v1
// file: ServiceProviderAndCustomer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class BoolMessage extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setStatus(value?: google_protobuf_wrappers_pb.BoolValue): BoolMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoolMessage.AsObject;
    static toObject(includeInstance: boolean, msg: BoolMessage): BoolMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoolMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoolMessage;
    static deserializeBinaryFromReader(message: BoolMessage, reader: jspb.BinaryReader): BoolMessage;
}

export namespace BoolMessage {
    export type AsObject = {
        status?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class DeviceInfoMessage extends jspb.Message { 

    hasDeviceinfoid(): boolean;
    clearDeviceinfoid(): void;
    getDeviceinfoid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDeviceinfoid(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasOsversion(): boolean;
    clearOsversion(): void;
    getOsversion(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOsversion(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasDevicename(): boolean;
    clearDevicename(): void;
    getDevicename(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDevicename(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasModel(): boolean;
    clearModel(): void;
    getModel(): google_protobuf_wrappers_pb.StringValue | undefined;
    setModel(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): google_protobuf_wrappers_pb.StringValue | undefined;
    setProduct(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBrand(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasDisplay(): boolean;
    clearDisplay(): void;
    getDisplay(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDisplay(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasCpuAbi(): boolean;
    clearCpuAbi(): void;
    getCpuAbi(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCpuAbi(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasCpuAbi2(): boolean;
    clearCpuAbi2(): void;
    getCpuAbi2(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCpuAbi2(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasManufacturer(): boolean;
    clearManufacturer(): void;
    getManufacturer(): google_protobuf_wrappers_pb.StringValue | undefined;
    setManufacturer(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    hasSerial(): boolean;
    clearSerial(): void;
    getSerial(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSerial(value?: google_protobuf_wrappers_pb.StringValue): DeviceInfoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceInfoMessage.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceInfoMessage): DeviceInfoMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceInfoMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceInfoMessage;
    static deserializeBinaryFromReader(message: DeviceInfoMessage, reader: jspb.BinaryReader): DeviceInfoMessage;
}

export namespace DeviceInfoMessage {
    export type AsObject = {
        deviceinfoid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        osversion?: google_protobuf_wrappers_pb.StringValue.AsObject,
        devicename?: google_protobuf_wrappers_pb.StringValue.AsObject,
        model?: google_protobuf_wrappers_pb.StringValue.AsObject,
        product?: google_protobuf_wrappers_pb.StringValue.AsObject,
        brand?: google_protobuf_wrappers_pb.StringValue.AsObject,
        display?: google_protobuf_wrappers_pb.StringValue.AsObject,
        cpuAbi?: google_protobuf_wrappers_pb.StringValue.AsObject,
        cpuAbi2?: google_protobuf_wrappers_pb.StringValue.AsObject,
        manufacturer?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serial?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class IdMessage extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): IdMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdMessage.AsObject;
    static toObject(includeInstance: boolean, msg: IdMessage): IdMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdMessage;
    static deserializeBinaryFromReader(message: IdMessage, reader: jspb.BinaryReader): IdMessage;
}

export namespace IdMessage {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class IntMessage extends jspb.Message { 

    hasNum(): boolean;
    clearNum(): void;
    getNum(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setNum(value?: google_protobuf_wrappers_pb.Int32Value): IntMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntMessage.AsObject;
    static toObject(includeInstance: boolean, msg: IntMessage): IntMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntMessage;
    static deserializeBinaryFromReader(message: IntMessage, reader: jspb.BinaryReader): IntMessage;
}

export namespace IntMessage {
    export type AsObject = {
        num?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class RatingAndReviewMessage extends jspb.Message { 

    hasRatingandreviewid(): boolean;
    clearRatingandreviewid(): void;
    getRatingandreviewid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRatingandreviewid(value?: google_protobuf_wrappers_pb.StringValue): RatingAndReviewMessage;

    hasStars(): boolean;
    clearStars(): void;
    getStars(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setStars(value?: google_protobuf_wrappers_pb.Int32Value): RatingAndReviewMessage;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): google_protobuf_wrappers_pb.StringValue | undefined;
    setComment(value?: google_protobuf_wrappers_pb.StringValue): RatingAndReviewMessage;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): RatingAndReviewMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): RatingAndReviewMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): RatingAndReviewMessage;

    hasUsertype(): boolean;
    clearUsertype(): void;
    getUsertype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUsertype(value?: google_protobuf_wrappers_pb.StringValue): RatingAndReviewMessage;

    hasReviewerid(): boolean;
    clearReviewerid(): void;
    getReviewerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReviewerid(value?: google_protobuf_wrappers_pb.StringValue): RatingAndReviewMessage;

    hasSkippedreview(): boolean;
    clearSkippedreview(): void;
    getSkippedreview(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSkippedreview(value?: google_protobuf_wrappers_pb.BoolValue): RatingAndReviewMessage;

    hasIsdeleted(): boolean;
    clearIsdeleted(): void;
    getIsdeleted(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsdeleted(value?: google_protobuf_wrappers_pb.BoolValue): RatingAndReviewMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RatingAndReviewMessage.AsObject;
    static toObject(includeInstance: boolean, msg: RatingAndReviewMessage): RatingAndReviewMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RatingAndReviewMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RatingAndReviewMessage;
    static deserializeBinaryFromReader(message: RatingAndReviewMessage, reader: jspb.BinaryReader): RatingAndReviewMessage;
}

export namespace RatingAndReviewMessage {
    export type AsObject = {
        ratingandreviewid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        stars?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        comment?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        usertype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        reviewerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        skippedreview?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        isdeleted?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class RatingRequestMessage extends jspb.Message { 

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): RatingRequestMessage;

    hasReviewerid(): boolean;
    clearReviewerid(): void;
    getReviewerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReviewerid(value?: google_protobuf_wrappers_pb.StringValue): RatingRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RatingRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: RatingRequestMessage): RatingRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RatingRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RatingRequestMessage;
    static deserializeBinaryFromReader(message: RatingRequestMessage, reader: jspb.BinaryReader): RatingRequestMessage;
}

export namespace RatingRequestMessage {
    export type AsObject = {
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        reviewerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class NotificationRequestMessage extends jspb.Message { 

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTitle(value?: google_protobuf_wrappers_pb.StringValue): NotificationRequestMessage;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBody(value?: google_protobuf_wrappers_pb.StringValue): NotificationRequestMessage;

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): NotificationRequestMessage;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUserid(value?: google_protobuf_wrappers_pb.StringValue): NotificationRequestMessage;

    hasType(): boolean;
    clearType(): void;
    getType(): google_protobuf_wrappers_pb.StringValue | undefined;
    setType(value?: google_protobuf_wrappers_pb.StringValue): NotificationRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotificationRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: NotificationRequestMessage): NotificationRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotificationRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotificationRequestMessage;
    static deserializeBinaryFromReader(message: NotificationRequestMessage, reader: jspb.BinaryReader): NotificationRequestMessage;
}

export namespace NotificationRequestMessage {
    export type AsObject = {
        title?: google_protobuf_wrappers_pb.StringValue.AsObject,
        body?: google_protobuf_wrappers_pb.StringValue.AsObject,
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        userid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        type?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class RequestPdf extends jspb.Message { 

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): RequestPdf;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): RequestPdf;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): RequestPdf;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): RequestPdf;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestPdf.AsObject;
    static toObject(includeInstance: boolean, msg: RequestPdf): RequestPdf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestPdf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestPdf;
    static deserializeBinaryFromReader(message: RequestPdf, reader: jspb.BinaryReader): RequestPdf;
}

export namespace RequestPdf {
    export type AsObject = {
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ResponsePdf extends jspb.Message { 

    hasFiletype(): boolean;
    clearFiletype(): void;
    getFiletype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFiletype(value?: google_protobuf_wrappers_pb.StringValue): ResponsePdf;

    hasMediafile(): boolean;
    clearMediafile(): void;
    getMediafile(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setMediafile(value?: google_protobuf_wrappers_pb.BytesValue): ResponsePdf;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponsePdf.AsObject;
    static toObject(includeInstance: boolean, msg: ResponsePdf): ResponsePdf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponsePdf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponsePdf;
    static deserializeBinaryFromReader(message: ResponsePdf, reader: jspb.BinaryReader): ResponsePdf;
}

export namespace ResponsePdf {
    export type AsObject = {
        filetype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        mediafile?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    }
}

export class StringMessage extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMessage(value?: google_protobuf_wrappers_pb.StringValue): StringMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringMessage.AsObject;
    static toObject(includeInstance: boolean, msg: StringMessage): StringMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringMessage;
    static deserializeBinaryFromReader(message: StringMessage, reader: jspb.BinaryReader): StringMessage;
}

export namespace StringMessage {
    export type AsObject = {
        message?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class TwilioAuthRequest extends jspb.Message { 

    hasRoomid(): boolean;
    clearRoomid(): void;
    getRoomid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRoomid(value?: google_protobuf_wrappers_pb.StringValue): TwilioAuthRequest;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUserid(value?: google_protobuf_wrappers_pb.StringValue): TwilioAuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TwilioAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TwilioAuthRequest): TwilioAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TwilioAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TwilioAuthRequest;
    static deserializeBinaryFromReader(message: TwilioAuthRequest, reader: jspb.BinaryReader): TwilioAuthRequest;
}

export namespace TwilioAuthRequest {
    export type AsObject = {
        roomid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        userid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class VoidMessage extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoidMessage.AsObject;
    static toObject(includeInstance: boolean, msg: VoidMessage): VoidMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoidMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoidMessage;
    static deserializeBinaryFromReader(message: VoidMessage, reader: jspb.BinaryReader): VoidMessage;
}

export namespace VoidMessage {
    export type AsObject = {
    }
}

export class CategoryMessage extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): CategoryMessage;

    hasSpecialityname(): boolean;
    clearSpecialityname(): void;
    getSpecialityname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSpecialityname(value?: google_protobuf_wrappers_pb.StringValue): CategoryMessage;

    hasSpecialitythumbnail(): boolean;
    clearSpecialitythumbnail(): void;
    getSpecialitythumbnail(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSpecialitythumbnail(value?: google_protobuf_wrappers_pb.StringValue): CategoryMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryMessage): CategoryMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryMessage;
    static deserializeBinaryFromReader(message: CategoryMessage, reader: jspb.BinaryReader): CategoryMessage;
}

export namespace CategoryMessage {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        specialityname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        specialitythumbnail?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CategoryListMessage extends jspb.Message { 
    clearCategoriesList(): void;
    getCategoriesList(): Array<CategoryMessage>;
    setCategoriesList(value: Array<CategoryMessage>): CategoryListMessage;
    addCategories(value?: CategoryMessage, index?: number): CategoryMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryListMessage): CategoryListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryListMessage;
    static deserializeBinaryFromReader(message: CategoryListMessage, reader: jspb.BinaryReader): CategoryListMessage;
}

export namespace CategoryListMessage {
    export type AsObject = {
        categoriesList: Array<CategoryMessage.AsObject>,
    }
}

export class ServiceProviderAddress extends jspb.Message { 

    hasStreetaddress(): boolean;
    clearStreetaddress(): void;
    getStreetaddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStreetaddress(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAddress;

    hasState(): boolean;
    clearState(): void;
    getState(): google_protobuf_wrappers_pb.StringValue | undefined;
    setState(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAddress;

    hasCountry(): boolean;
    clearCountry(): void;
    getCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCountry(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAddress;

    hasPincode(): boolean;
    clearPincode(): void;
    getPincode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPincode(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAddress;

    hasType(): boolean;
    clearType(): void;
    getType(): google_protobuf_wrappers_pb.StringValue | undefined;
    setType(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAddress;

    hasAddressid(): boolean;
    clearAddressid(): void;
    getAddressid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAddressid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAddress.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAddress): ServiceProviderAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAddress;
    static deserializeBinaryFromReader(message: ServiceProviderAddress, reader: jspb.BinaryReader): ServiceProviderAddress;
}

export namespace ServiceProviderAddress {
    export type AsObject = {
        streetaddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
        state?: google_protobuf_wrappers_pb.StringValue.AsObject,
        country?: google_protobuf_wrappers_pb.StringValue.AsObject,
        pincode?: google_protobuf_wrappers_pb.StringValue.AsObject,
        type?: google_protobuf_wrappers_pb.StringValue.AsObject,
        addressid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderAllergyMessage extends jspb.Message { 

    hasAllergyid(): boolean;
    clearAllergyid(): void;
    getAllergyid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAllergyid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAllergyMessage;

    hasAllergyname(): boolean;
    clearAllergyname(): void;
    getAllergyname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAllergyname(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAllergyMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAllergyMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAllergyMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAllergyMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAllergyMessage): ServiceProviderAllergyMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAllergyMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAllergyMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAllergyMessage, reader: jspb.BinaryReader): ServiceProviderAllergyMessage;
}

export namespace ServiceProviderAllergyMessage {
    export type AsObject = {
        allergyid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        allergyname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderAppointmentMessage extends jspb.Message { 

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasParentappointmentid(): boolean;
    clearParentappointmentid(): void;
    getParentappointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setParentappointmentid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasRequestedby(): boolean;
    clearRequestedby(): void;
    getRequestedby(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRequestedby(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasServiceprovidername(): boolean;
    clearServiceprovidername(): void;
    getServiceprovidername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceprovidername(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasCustomername(): boolean;
    clearCustomername(): void;
    getCustomername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomername(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasIsblockedbyserviceprovider(): boolean;
    clearIsblockedbyserviceprovider(): void;
    getIsblockedbyserviceprovider(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsblockedbyserviceprovider(value?: google_protobuf_wrappers_pb.BoolValue): ServiceProviderAppointmentMessage;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStatus(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasServicefee(): boolean;
    clearServicefee(): void;
    getServicefee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setServicefee(value?: google_protobuf_wrappers_pb.DoubleValue): ServiceProviderAppointmentMessage;

    hasFollowupdays(): boolean;
    clearFollowupdays(): void;
    getFollowupdays(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setFollowupdays(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderAppointmentMessage;

    hasIspaid(): boolean;
    clearIspaid(): void;
    getIspaid(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIspaid(value?: google_protobuf_wrappers_pb.BoolValue): ServiceProviderAppointmentMessage;

    hasScheduledappointmentstarttime(): boolean;
    clearScheduledappointmentstarttime(): void;
    getScheduledappointmentstarttime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setScheduledappointmentstarttime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAppointmentMessage;

    hasScheduledappointmentendtime(): boolean;
    clearScheduledappointmentendtime(): void;
    getScheduledappointmentendtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setScheduledappointmentendtime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAppointmentMessage;

    hasActualappointmentstarttime(): boolean;
    clearActualappointmentstarttime(): void;
    getActualappointmentstarttime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setActualappointmentstarttime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAppointmentMessage;

    hasActualappointmentendtime(): boolean;
    clearActualappointmentendtime(): void;
    getActualappointmentendtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setActualappointmentendtime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAppointmentMessage;

    hasCreateddatetime(): boolean;
    clearCreateddatetime(): void;
    getCreateddatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddatetime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAppointmentMessage;

    hasLastmodifeddate(): boolean;
    clearLastmodifeddate(): void;
    getLastmodifeddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLastmodifeddate(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAppointmentMessage;

    hasNoofreports(): boolean;
    clearNoofreports(): void;
    getNoofreports(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setNoofreports(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderAppointmentMessage;

    hasCancellation(): boolean;
    clearCancellation(): void;
    getCancellation(): ServiceProviderCancellationMessage | undefined;
    setCancellation(value?: ServiceProviderCancellationMessage): ServiceProviderAppointmentMessage;

    hasChildid(): boolean;
    clearChildid(): void;
    getChildid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setChildid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasPaymenttype(): boolean;
    clearPaymenttype(): void;
    getPaymenttype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymenttype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentMessage;

    hasAppointmentverification(): boolean;
    clearAppointmentverification(): void;
    getAppointmentverification(): ServiceProviderAppointmentVerificationMessage | undefined;
    setAppointmentverification(value?: ServiceProviderAppointmentVerificationMessage): ServiceProviderAppointmentMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAppointmentMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAppointmentMessage): ServiceProviderAppointmentMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAppointmentMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAppointmentMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAppointmentMessage, reader: jspb.BinaryReader): ServiceProviderAppointmentMessage;
}

export namespace ServiceProviderAppointmentMessage {
    export type AsObject = {
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        parentappointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        requestedby?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceprovidername?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customername?: google_protobuf_wrappers_pb.StringValue.AsObject,
        isblockedbyserviceprovider?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        status?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicefee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        followupdays?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        ispaid?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        scheduledappointmentstarttime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        scheduledappointmentendtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        actualappointmentstarttime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        actualappointmentendtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        createddatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        lastmodifeddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        noofreports?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        cancellation?: ServiceProviderCancellationMessage.AsObject,
        childid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymenttype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentverification?: ServiceProviderAppointmentVerificationMessage.AsObject,
    }
}

export class ServiceProviderAppointmentVerificationMessage extends jspb.Message { 

    hasAppointmentverificationid(): boolean;
    clearAppointmentverificationid(): void;
    getAppointmentverificationid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentverificationid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentVerificationMessage;

    hasVerificationstatus(): boolean;
    clearVerificationstatus(): void;
    getVerificationstatus(): google_protobuf_wrappers_pb.StringValue | undefined;
    setVerificationstatus(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentVerificationMessage;

    hasVerifiedby(): boolean;
    clearVerifiedby(): void;
    getVerifiedby(): google_protobuf_wrappers_pb.StringValue | undefined;
    setVerifiedby(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentVerificationMessage;

    hasVerifiedtime(): boolean;
    clearVerifiedtime(): void;
    getVerifiedtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVerifiedtime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAppointmentVerificationMessage;

    hasCustomerresponseforreason(): boolean;
    clearCustomerresponseforreason(): void;
    getCustomerresponseforreason(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerresponseforreason(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentVerificationMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAppointmentVerificationMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAppointmentVerificationMessage): ServiceProviderAppointmentVerificationMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAppointmentVerificationMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAppointmentVerificationMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAppointmentVerificationMessage, reader: jspb.BinaryReader): ServiceProviderAppointmentVerificationMessage;
}

export namespace ServiceProviderAppointmentVerificationMessage {
    export type AsObject = {
        appointmentverificationid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        verificationstatus?: google_protobuf_wrappers_pb.StringValue.AsObject,
        verifiedby?: google_protobuf_wrappers_pb.StringValue.AsObject,
        verifiedtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        customerresponseforreason?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderAppointmentList extends jspb.Message { 
    clearAppointmentsList(): void;
    getAppointmentsList(): Array<ServiceProviderAppointmentMessage>;
    setAppointmentsList(value: Array<ServiceProviderAppointmentMessage>): ServiceProviderAppointmentList;
    addAppointments(value?: ServiceProviderAppointmentMessage, index?: number): ServiceProviderAppointmentMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAppointmentList.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAppointmentList): ServiceProviderAppointmentList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAppointmentList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAppointmentList;
    static deserializeBinaryFromReader(message: ServiceProviderAppointmentList, reader: jspb.BinaryReader): ServiceProviderAppointmentList;
}

export namespace ServiceProviderAppointmentList {
    export type AsObject = {
        appointmentsList: Array<ServiceProviderAppointmentMessage.AsObject>,
    }
}

export class ServiceProviderAppointmentRequestMessage extends jspb.Message { 

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentRequestMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAppointmentRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAppointmentRequestMessage): ServiceProviderAppointmentRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAppointmentRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAppointmentRequestMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAppointmentRequestMessage, reader: jspb.BinaryReader): ServiceProviderAppointmentRequestMessage;
}

export namespace ServiceProviderAppointmentRequestMessage {
    export type AsObject = {
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderAppInfo extends jspb.Message { 

    hasAuthid(): boolean;
    clearAuthid(): void;
    getAuthid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppInfo;

    hasAuthtype(): boolean;
    clearAuthtype(): void;
    getAuthtype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthtype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppInfo;

    hasDevicetoken(): boolean;
    clearDevicetoken(): void;
    getDevicetoken(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDevicetoken(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppInfo;

    hasAppinfoid(): boolean;
    clearAppinfoid(): void;
    getAppinfoid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppinfoid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppInfo;

    hasDevicetokentype(): boolean;
    clearDevicetokentype(): void;
    getDevicetokentype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDevicetokentype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAppInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAppInfo): ServiceProviderAppInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAppInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAppInfo;
    static deserializeBinaryFromReader(message: ServiceProviderAppInfo, reader: jspb.BinaryReader): ServiceProviderAppInfo;
}

export namespace ServiceProviderAppInfo {
    export type AsObject = {
        authid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        authtype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        devicetoken?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appinfoid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        devicetokentype?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderMyPatientsProfileMessage extends jspb.Message { 

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMyPatientsProfileMessage;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMyPatientsProfileMessage;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGender(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMyPatientsProfileMessage;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAge(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMyPatientsProfileMessage;

    hasIschild(): boolean;
    clearIschild(): void;
    getIschild(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIschild(value?: google_protobuf_wrappers_pb.BoolValue): ServiceProviderMyPatientsProfileMessage;

    hasCaretakerid(): boolean;
    clearCaretakerid(): void;
    getCaretakerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCaretakerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMyPatientsProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderMyPatientsProfileMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderMyPatientsProfileMessage): ServiceProviderMyPatientsProfileMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderMyPatientsProfileMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderMyPatientsProfileMessage;
    static deserializeBinaryFromReader(message: ServiceProviderMyPatientsProfileMessage, reader: jspb.BinaryReader): ServiceProviderMyPatientsProfileMessage;
}

export namespace ServiceProviderMyPatientsProfileMessage {
    export type AsObject = {
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        gender?: google_protobuf_wrappers_pb.StringValue.AsObject,
        age?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ischild?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        caretakerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderMyPatientsProfileMessageList extends jspb.Message { 
    clearMypatientsList(): void;
    getMypatientsList(): Array<ServiceProviderMyPatientsProfileMessage>;
    setMypatientsList(value: Array<ServiceProviderMyPatientsProfileMessage>): ServiceProviderMyPatientsProfileMessageList;
    addMypatients(value?: ServiceProviderMyPatientsProfileMessage, index?: number): ServiceProviderMyPatientsProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderMyPatientsProfileMessageList.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderMyPatientsProfileMessageList): ServiceProviderMyPatientsProfileMessageList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderMyPatientsProfileMessageList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderMyPatientsProfileMessageList;
    static deserializeBinaryFromReader(message: ServiceProviderMyPatientsProfileMessageList, reader: jspb.BinaryReader): ServiceProviderMyPatientsProfileMessageList;
}

export namespace ServiceProviderMyPatientsProfileMessageList {
    export type AsObject = {
        mypatientsList: Array<ServiceProviderMyPatientsProfileMessage.AsObject>,
    }
}

export class ServiceProviderAutofillMedicineMessage extends jspb.Message { 

    hasAutofillmedicineid(): boolean;
    clearAutofillmedicineid(): void;
    getAutofillmedicineid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAutofillmedicineid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAutofillMedicineMessage;

    hasIngredients(): boolean;
    clearIngredients(): void;
    getIngredients(): google_protobuf_wrappers_pb.StringValue | undefined;
    setIngredients(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAutofillMedicineMessage;

    hasIngredientcount(): boolean;
    clearIngredientcount(): void;
    getIngredientcount(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setIngredientcount(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderAutofillMedicineMessage;

    hasBrandname(): boolean;
    clearBrandname(): void;
    getBrandname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBrandname(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAutofillMedicineMessage;

    hasRouteofadministration(): boolean;
    clearRouteofadministration(): void;
    getRouteofadministration(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRouteofadministration(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAutofillMedicineMessage;

    hasDrugtype(): boolean;
    clearDrugtype(): void;
    getDrugtype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDrugtype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAutofillMedicineMessage;

    hasCompanyname(): boolean;
    clearCompanyname(): void;
    getCompanyname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCompanyname(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAutofillMedicineMessage;

    hasIsverified(): boolean;
    clearIsverified(): void;
    getIsverified(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsverified(value?: google_protobuf_wrappers_pb.BoolValue): ServiceProviderAutofillMedicineMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAutofillMedicineMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAutofillMedicineMessage): ServiceProviderAutofillMedicineMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAutofillMedicineMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAutofillMedicineMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAutofillMedicineMessage, reader: jspb.BinaryReader): ServiceProviderAutofillMedicineMessage;
}

export namespace ServiceProviderAutofillMedicineMessage {
    export type AsObject = {
        autofillmedicineid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ingredients?: google_protobuf_wrappers_pb.StringValue.AsObject,
        ingredientcount?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        brandname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        routeofadministration?: google_protobuf_wrappers_pb.StringValue.AsObject,
        drugtype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        companyname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        isverified?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class ServiceProviderAutofillMedicineListMessage extends jspb.Message { 
    clearMedicinesList(): void;
    getMedicinesList(): Array<ServiceProviderAutofillMedicineMessage>;
    setMedicinesList(value: Array<ServiceProviderAutofillMedicineMessage>): ServiceProviderAutofillMedicineListMessage;
    addMedicines(value?: ServiceProviderAutofillMedicineMessage, index?: number): ServiceProviderAutofillMedicineMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAutofillMedicineListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAutofillMedicineListMessage): ServiceProviderAutofillMedicineListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAutofillMedicineListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAutofillMedicineListMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAutofillMedicineListMessage, reader: jspb.BinaryReader): ServiceProviderAutofillMedicineListMessage;
}

export namespace ServiceProviderAutofillMedicineListMessage {
    export type AsObject = {
        medicinesList: Array<ServiceProviderAutofillMedicineMessage.AsObject>,
    }
}

export class ServiceProviderAvailability extends jspb.Message { 

    hasDayofweek(): boolean;
    clearDayofweek(): void;
    getDayofweek(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setDayofweek(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderAvailability;

    hasStarttime(): boolean;
    clearStarttime(): void;
    getStarttime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setStarttime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAvailability;

    hasEndtime(): boolean;
    clearEndtime(): void;
    getEndtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEndtime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAvailability;

    hasAvailabilityconfigid(): boolean;
    clearAvailabilityconfigid(): void;
    getAvailabilityconfigid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAvailabilityconfigid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAvailability;

    hasPaymenttype(): boolean;
    clearPaymenttype(): void;
    getPaymenttype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymenttype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAvailability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAvailability.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAvailability): ServiceProviderAvailability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAvailability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAvailability;
    static deserializeBinaryFromReader(message: ServiceProviderAvailability, reader: jspb.BinaryReader): ServiceProviderAvailability;
}

export namespace ServiceProviderAvailability {
    export type AsObject = {
        dayofweek?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        starttime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        endtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        availabilityconfigid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymenttype?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderAvailabilityConfigList extends jspb.Message { 
    clearAvailabilitylistList(): void;
    getAvailabilitylistList(): Array<ServiceProviderAvailability>;
    setAvailabilitylistList(value: Array<ServiceProviderAvailability>): ServiceProviderAvailabilityConfigList;
    addAvailabilitylist(value?: ServiceProviderAvailability, index?: number): ServiceProviderAvailability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAvailabilityConfigList.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAvailabilityConfigList): ServiceProviderAvailabilityConfigList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAvailabilityConfigList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAvailabilityConfigList;
    static deserializeBinaryFromReader(message: ServiceProviderAvailabilityConfigList, reader: jspb.BinaryReader): ServiceProviderAvailabilityConfigList;
}

export namespace ServiceProviderAvailabilityConfigList {
    export type AsObject = {
        availabilitylistList: Array<ServiceProviderAvailability.AsObject>,
    }
}

export class ServiceProviderAvailabilityRequest extends jspb.Message { 
    clearAvailabilitylistList(): void;
    getAvailabilitylistList(): Array<ServiceProviderAvailability>;
    setAvailabilitylistList(value: Array<ServiceProviderAvailability>): ServiceProviderAvailabilityRequest;
    addAvailabilitylist(value?: ServiceProviderAvailability, index?: number): ServiceProviderAvailability;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAvailabilityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAvailabilityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAvailabilityRequest): ServiceProviderAvailabilityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAvailabilityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAvailabilityRequest;
    static deserializeBinaryFromReader(message: ServiceProviderAvailabilityRequest, reader: jspb.BinaryReader): ServiceProviderAvailabilityRequest;
}

export namespace ServiceProviderAvailabilityRequest {
    export type AsObject = {
        availabilitylistList: Array<ServiceProviderAvailability.AsObject>,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderCancellationMessage extends jspb.Message { 

    hasReasonname(): boolean;
    clearReasonname(): void;
    getReasonname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReasonname(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCancellationMessage;

    hasCancelledtime(): boolean;
    clearCancelledtime(): void;
    getCancelledtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCancelledtime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderCancellationMessage;

    hasCancelledby(): boolean;
    clearCancelledby(): void;
    getCancelledby(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCancelledby(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCancellationMessage;

    hasCancelledbytype(): boolean;
    clearCancelledbytype(): void;
    getCancelledbytype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCancelledbytype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCancellationMessage;

    hasNotes(): boolean;
    clearNotes(): void;
    getNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
    setNotes(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCancellationMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderCancellationMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderCancellationMessage): ServiceProviderCancellationMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderCancellationMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderCancellationMessage;
    static deserializeBinaryFromReader(message: ServiceProviderCancellationMessage, reader: jspb.BinaryReader): ServiceProviderCancellationMessage;
}

export namespace ServiceProviderCancellationMessage {
    export type AsObject = {
        reasonname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        cancelledtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        cancelledby?: google_protobuf_wrappers_pb.StringValue.AsObject,
        cancelledbytype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        notes?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderCustomerChildProfileMessage extends jspb.Message { 

    hasChildprofileid(): boolean;
    clearChildprofileid(): void;
    getChildprofileid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setChildprofileid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerChildProfileMessage;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerChildProfileMessage;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGender(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerChildProfileMessage;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAge(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerChildProfileMessage;

    hasPreferredphonenumber(): boolean;
    clearPreferredphonenumber(): void;
    getPreferredphonenumber(): ServiceProviderPhoneNumber | undefined;
    setPreferredphonenumber(value?: ServiceProviderPhoneNumber): ServiceProviderCustomerChildProfileMessage;

    hasIsprimarycontact(): boolean;
    clearIsprimarycontact(): void;
    getIsprimarycontact(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsprimarycontact(value?: google_protobuf_wrappers_pb.BoolValue): ServiceProviderCustomerChildProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderCustomerChildProfileMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderCustomerChildProfileMessage): ServiceProviderCustomerChildProfileMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderCustomerChildProfileMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderCustomerChildProfileMessage;
    static deserializeBinaryFromReader(message: ServiceProviderCustomerChildProfileMessage, reader: jspb.BinaryReader): ServiceProviderCustomerChildProfileMessage;
}

export namespace ServiceProviderCustomerChildProfileMessage {
    export type AsObject = {
        childprofileid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        gender?: google_protobuf_wrappers_pb.StringValue.AsObject,
        age?: google_protobuf_wrappers_pb.StringValue.AsObject,
        preferredphonenumber?: ServiceProviderPhoneNumber.AsObject,
        isprimarycontact?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class ServiceProviderCustomerProfileMessage extends jspb.Message { 

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerProfileMessage;

    hasFirstname(): boolean;
    clearFirstname(): void;
    getFirstname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFirstname(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerProfileMessage;

    hasLastname(): boolean;
    clearLastname(): void;
    getLastname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setLastname(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerProfileMessage;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGender(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerProfileMessage;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAge(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerProfileMessage;
    clearPhonenumbersList(): void;
    getPhonenumbersList(): Array<ServiceProviderPhoneNumber>;
    setPhonenumbersList(value: Array<ServiceProviderPhoneNumber>): ServiceProviderCustomerProfileMessage;
    addPhonenumbers(value?: ServiceProviderPhoneNumber, index?: number): ServiceProviderPhoneNumber;
    clearAddressesList(): void;
    getAddressesList(): Array<ServiceProviderAddress>;
    setAddressesList(value: Array<ServiceProviderAddress>): ServiceProviderCustomerProfileMessage;
    addAddresses(value?: ServiceProviderAddress, index?: number): ServiceProviderAddress;

    hasAppinfo(): boolean;
    clearAppinfo(): void;
    getAppinfo(): ServiceProviderAppInfo | undefined;
    setAppinfo(value?: ServiceProviderAppInfo): ServiceProviderCustomerProfileMessage;
    clearLanguagesList(): void;
    getLanguagesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setLanguagesList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderCustomerProfileMessage;
    addLanguages(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasEmailaddress(): boolean;
    clearEmailaddress(): void;
    getEmailaddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEmailaddress(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerProfileMessage;
    clearActiveappointmentidsList(): void;
    getActiveappointmentidsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setActiveappointmentidsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderCustomerProfileMessage;
    addActiveappointmentids(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearCompletedappointmentidsList(): void;
    getCompletedappointmentidsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCompletedappointmentidsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderCustomerProfileMessage;
    addCompletedappointmentids(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasProfilepicurl(): boolean;
    clearProfilepicurl(): void;
    getProfilepicurl(): google_protobuf_wrappers_pb.StringValue | undefined;
    setProfilepicurl(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerProfileMessage;

    hasPrimaryserviceproviderid(): boolean;
    clearPrimaryserviceproviderid(): void;
    getPrimaryserviceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPrimaryserviceproviderid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderCustomerProfileMessage;

    hasLastmodifeddate(): boolean;
    clearLastmodifeddate(): void;
    getLastmodifeddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLastmodifeddate(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderCustomerProfileMessage;

    hasCreateddate(): boolean;
    clearCreateddate(): void;
    getCreateddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddate(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderCustomerProfileMessage;

    hasCustomerdeviceinfo(): boolean;
    clearCustomerdeviceinfo(): void;
    getCustomerdeviceinfo(): DeviceInfoMessage | undefined;
    setCustomerdeviceinfo(value?: DeviceInfoMessage): ServiceProviderCustomerProfileMessage;
    clearChildrenList(): void;
    getChildrenList(): Array<ServiceProviderCustomerChildProfileMessage>;
    setChildrenList(value: Array<ServiceProviderCustomerChildProfileMessage>): ServiceProviderCustomerProfileMessage;
    addChildren(value?: ServiceProviderCustomerChildProfileMessage, index?: number): ServiceProviderCustomerChildProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderCustomerProfileMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderCustomerProfileMessage): ServiceProviderCustomerProfileMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderCustomerProfileMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderCustomerProfileMessage;
    static deserializeBinaryFromReader(message: ServiceProviderCustomerProfileMessage, reader: jspb.BinaryReader): ServiceProviderCustomerProfileMessage;
}

export namespace ServiceProviderCustomerProfileMessage {
    export type AsObject = {
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        firstname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        lastname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        gender?: google_protobuf_wrappers_pb.StringValue.AsObject,
        age?: google_protobuf_wrappers_pb.StringValue.AsObject,
        phonenumbersList: Array<ServiceProviderPhoneNumber.AsObject>,
        addressesList: Array<ServiceProviderAddress.AsObject>,
        appinfo?: ServiceProviderAppInfo.AsObject,
        languagesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        emailaddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
        activeappointmentidsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        completedappointmentidsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        profilepicurl?: google_protobuf_wrappers_pb.StringValue.AsObject,
        primaryserviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        lastmodifeddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        createddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        customerdeviceinfo?: DeviceInfoMessage.AsObject,
        childrenList: Array<ServiceProviderCustomerChildProfileMessage.AsObject>,
    }
}

export class ServiceProviderCustomerProfileListMessage extends jspb.Message { 
    clearCustomersList(): void;
    getCustomersList(): Array<ServiceProviderCustomerProfileMessage>;
    setCustomersList(value: Array<ServiceProviderCustomerProfileMessage>): ServiceProviderCustomerProfileListMessage;
    addCustomers(value?: ServiceProviderCustomerProfileMessage, index?: number): ServiceProviderCustomerProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderCustomerProfileListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderCustomerProfileListMessage): ServiceProviderCustomerProfileListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderCustomerProfileListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderCustomerProfileListMessage;
    static deserializeBinaryFromReader(message: ServiceProviderCustomerProfileListMessage, reader: jspb.BinaryReader): ServiceProviderCustomerProfileListMessage;
}

export namespace ServiceProviderCustomerProfileListMessage {
    export type AsObject = {
        customersList: Array<ServiceProviderCustomerProfileMessage.AsObject>,
    }
}

export class ServiceProviderDiagnosisMessage extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderDiagnosisMessage;

    hasType(): boolean;
    clearType(): void;
    getType(): google_protobuf_wrappers_pb.StringValue | undefined;
    setType(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderDiagnosisMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderDiagnosisMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderDiagnosisMessage): ServiceProviderDiagnosisMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderDiagnosisMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderDiagnosisMessage;
    static deserializeBinaryFromReader(message: ServiceProviderDiagnosisMessage, reader: jspb.BinaryReader): ServiceProviderDiagnosisMessage;
}

export namespace ServiceProviderDiagnosisMessage {
    export type AsObject = {
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        type?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderDosageMessage extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderDosageMessage;

    hasUnit(): boolean;
    clearUnit(): void;
    getUnit(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUnit(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderDosageMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderDosageMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderDosageMessage): ServiceProviderDosageMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderDosageMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderDosageMessage;
    static deserializeBinaryFromReader(message: ServiceProviderDosageMessage, reader: jspb.BinaryReader): ServiceProviderDosageMessage;
}

export namespace ServiceProviderDosageMessage {
    export type AsObject = {
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        unit?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderDurationMessage extends jspb.Message { 

    hasDays(): boolean;
    clearDays(): void;
    getDays(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDays(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderDurationMessage;

    hasUnit(): boolean;
    clearUnit(): void;
    getUnit(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUnit(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderDurationMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderDurationMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderDurationMessage): ServiceProviderDurationMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderDurationMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderDurationMessage;
    static deserializeBinaryFromReader(message: ServiceProviderDurationMessage, reader: jspb.BinaryReader): ServiceProviderDurationMessage;
}

export namespace ServiceProviderDurationMessage {
    export type AsObject = {
        days?: google_protobuf_wrappers_pb.StringValue.AsObject,
        unit?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderEducation extends jspb.Message { 

    hasCourse(): boolean;
    clearCourse(): void;
    getCourse(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCourse(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderEducation;

    hasYear(): boolean;
    clearYear(): void;
    getYear(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setYear(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderEducation;

    hasCountry(): boolean;
    clearCountry(): void;
    getCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCountry(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderEducation;

    hasCollege(): boolean;
    clearCollege(): void;
    getCollege(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCollege(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderEducation;

    hasUniversity(): boolean;
    clearUniversity(): void;
    getUniversity(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUniversity(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderEducation;

    hasEducationid(): boolean;
    clearEducationid(): void;
    getEducationid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEducationid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderEducation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderEducation.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderEducation): ServiceProviderEducation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderEducation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderEducation;
    static deserializeBinaryFromReader(message: ServiceProviderEducation, reader: jspb.BinaryReader): ServiceProviderEducation;
}

export namespace ServiceProviderEducation {
    export type AsObject = {
        course?: google_protobuf_wrappers_pb.StringValue.AsObject,
        year?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        country?: google_protobuf_wrappers_pb.StringValue.AsObject,
        college?: google_protobuf_wrappers_pb.StringValue.AsObject,
        university?: google_protobuf_wrappers_pb.StringValue.AsObject,
        educationid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderWorkExperience extends jspb.Message { 

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOrganization(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderWorkExperience;

    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setStartdate(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderWorkExperience;

    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEnddate(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderWorkExperience;

    hasWorkexperienceid(): boolean;
    clearWorkexperienceid(): void;
    getWorkexperienceid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setWorkexperienceid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderWorkExperience;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderWorkExperience.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderWorkExperience): ServiceProviderWorkExperience.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderWorkExperience, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderWorkExperience;
    static deserializeBinaryFromReader(message: ServiceProviderWorkExperience, reader: jspb.BinaryReader): ServiceProviderWorkExperience;
}

export namespace ServiceProviderWorkExperience {
    export type AsObject = {
        organization?: google_protobuf_wrappers_pb.StringValue.AsObject,
        startdate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        enddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        workexperienceid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderFileInfoMessage extends jspb.Message { 

    hasFilename(): boolean;
    clearFilename(): void;
    getFilename(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFilename(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderFileInfoMessage;

    hasFiletype(): boolean;
    clearFiletype(): void;
    getFiletype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFiletype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderFileInfoMessage;

    hasMediaimage(): boolean;
    clearMediaimage(): void;
    getMediaimage(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setMediaimage(value?: google_protobuf_wrappers_pb.BytesValue): ServiceProviderFileInfoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderFileInfoMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderFileInfoMessage): ServiceProviderFileInfoMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderFileInfoMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderFileInfoMessage;
    static deserializeBinaryFromReader(message: ServiceProviderFileInfoMessage, reader: jspb.BinaryReader): ServiceProviderFileInfoMessage;
}

export namespace ServiceProviderFileInfoMessage {
    export type AsObject = {
        filename?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filetype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        mediaimage?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    }
}

export class ServiceProviderFollowUpMessage extends jspb.Message { 

    hasCreateddatetime(): boolean;
    clearCreateddatetime(): void;
    getCreateddatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddatetime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderFollowUpMessage;

    hasNoofdays(): boolean;
    clearNoofdays(): void;
    getNoofdays(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setNoofdays(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderFollowUpMessage;

    hasFollowupfee(): boolean;
    clearFollowupfee(): void;
    getFollowupfee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFollowupfee(value?: google_protobuf_wrappers_pb.DoubleValue): ServiceProviderFollowUpMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderFollowUpMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderFollowUpMessage): ServiceProviderFollowUpMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderFollowUpMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderFollowUpMessage;
    static deserializeBinaryFromReader(message: ServiceProviderFollowUpMessage, reader: jspb.BinaryReader): ServiceProviderFollowUpMessage;
}

export namespace ServiceProviderFollowUpMessage {
    export type AsObject = {
        createddatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        noofdays?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        followupfee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class ServiceProviderFollowUpRequestMessage extends jspb.Message { 

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderFollowUpRequestMessage;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderFollowUpRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderFollowUpRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderFollowUpRequestMessage): ServiceProviderFollowUpRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderFollowUpRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderFollowUpRequestMessage;
    static deserializeBinaryFromReader(message: ServiceProviderFollowUpRequestMessage, reader: jspb.BinaryReader): ServiceProviderFollowUpRequestMessage;
}

export namespace ServiceProviderFollowUpRequestMessage {
    export type AsObject = {
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderGeneratedSlotMessage extends jspb.Message { 

    hasStartdatetime(): boolean;
    clearStartdatetime(): void;
    getStartdatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setStartdatetime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderGeneratedSlotMessage;

    hasEndstartdatetime(): boolean;
    clearEndstartdatetime(): void;
    getEndstartdatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEndstartdatetime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderGeneratedSlotMessage;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setDuration(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderGeneratedSlotMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderGeneratedSlotMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderGeneratedSlotMessage): ServiceProviderGeneratedSlotMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderGeneratedSlotMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderGeneratedSlotMessage;
    static deserializeBinaryFromReader(message: ServiceProviderGeneratedSlotMessage, reader: jspb.BinaryReader): ServiceProviderGeneratedSlotMessage;
}

export namespace ServiceProviderGeneratedSlotMessage {
    export type AsObject = {
        startdatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        endstartdatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        duration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class ServiceProviderGeneratedSlotListMessage extends jspb.Message { 
    clearSlotsList(): void;
    getSlotsList(): Array<ServiceProviderGeneratedSlotMessage>;
    setSlotsList(value: Array<ServiceProviderGeneratedSlotMessage>): ServiceProviderGeneratedSlotListMessage;
    addSlots(value?: ServiceProviderGeneratedSlotMessage, index?: number): ServiceProviderGeneratedSlotMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderGeneratedSlotListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderGeneratedSlotListMessage): ServiceProviderGeneratedSlotListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderGeneratedSlotListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderGeneratedSlotListMessage;
    static deserializeBinaryFromReader(message: ServiceProviderGeneratedSlotListMessage, reader: jspb.BinaryReader): ServiceProviderGeneratedSlotListMessage;
}

export namespace ServiceProviderGeneratedSlotListMessage {
    export type AsObject = {
        slotsList: Array<ServiceProviderGeneratedSlotMessage.AsObject>,
    }
}

export class ServiceProviderMedicalHistoryMessage extends jspb.Message { 

    hasMedicalhistoryid(): boolean;
    clearMedicalhistoryid(): void;
    getMedicalhistoryid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicalhistoryid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicalHistoryMessage;

    hasMedicalhistoryname(): boolean;
    clearMedicalhistoryname(): void;
    getMedicalhistoryname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicalhistoryname(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicalHistoryMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicalHistoryMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicalHistoryMessage;

    hasPastmedicalhistory(): boolean;
    clearPastmedicalhistory(): void;
    getPastmedicalhistory(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPastmedicalhistory(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicalHistoryMessage;

    hasMedicationhistory(): boolean;
    clearMedicationhistory(): void;
    getMedicationhistory(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicationhistory(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicalHistoryMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderMedicalHistoryMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderMedicalHistoryMessage): ServiceProviderMedicalHistoryMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderMedicalHistoryMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderMedicalHistoryMessage;
    static deserializeBinaryFromReader(message: ServiceProviderMedicalHistoryMessage, reader: jspb.BinaryReader): ServiceProviderMedicalHistoryMessage;
}

export namespace ServiceProviderMedicalHistoryMessage {
    export type AsObject = {
        medicalhistoryid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        medicalhistoryname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        pastmedicalhistory?: google_protobuf_wrappers_pb.StringValue.AsObject,
        medicationhistory?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderMedicineMessage extends jspb.Message { 

    hasMedicinename(): boolean;
    clearMedicinename(): void;
    getMedicinename(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicinename(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicineMessage;

    hasDosage(): boolean;
    clearDosage(): void;
    getDosage(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDosage(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicineMessage;

    hasRouteofadministration(): boolean;
    clearRouteofadministration(): void;
    getRouteofadministration(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRouteofadministration(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicineMessage;

    hasIntake(): boolean;
    clearIntake(): void;
    getIntake(): google_protobuf_wrappers_pb.StringValue | undefined;
    setIntake(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicineMessage;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setDuration(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderMedicineMessage;

    hasTimings(): boolean;
    clearTimings(): void;
    getTimings(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTimings(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicineMessage;

    hasSpecialinstructions(): boolean;
    clearSpecialinstructions(): void;
    getSpecialinstructions(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSpecialinstructions(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicineMessage;

    hasMedicineid(): boolean;
    clearMedicineid(): void;
    getMedicineid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicineid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicineMessage;

    hasNotes(): boolean;
    clearNotes(): void;
    getNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
    setNotes(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderMedicineMessage;

    hasDurationobj(): boolean;
    clearDurationobj(): void;
    getDurationobj(): ServiceProviderDurationMessage | undefined;
    setDurationobj(value?: ServiceProviderDurationMessage): ServiceProviderMedicineMessage;

    hasDosageobj(): boolean;
    clearDosageobj(): void;
    getDosageobj(): ServiceProviderDosageMessage | undefined;
    setDosageobj(value?: ServiceProviderDosageMessage): ServiceProviderMedicineMessage;

    hasIntakedosageobj(): boolean;
    clearIntakedosageobj(): void;
    getIntakedosageobj(): ServiceProviderIntakeDosageMessage | undefined;
    setIntakedosageobj(value?: ServiceProviderIntakeDosageMessage): ServiceProviderMedicineMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderMedicineMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderMedicineMessage): ServiceProviderMedicineMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderMedicineMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderMedicineMessage;
    static deserializeBinaryFromReader(message: ServiceProviderMedicineMessage, reader: jspb.BinaryReader): ServiceProviderMedicineMessage;
}

export namespace ServiceProviderMedicineMessage {
    export type AsObject = {
        medicinename?: google_protobuf_wrappers_pb.StringValue.AsObject,
        dosage?: google_protobuf_wrappers_pb.StringValue.AsObject,
        routeofadministration?: google_protobuf_wrappers_pb.StringValue.AsObject,
        intake?: google_protobuf_wrappers_pb.StringValue.AsObject,
        duration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        timings?: google_protobuf_wrappers_pb.StringValue.AsObject,
        specialinstructions?: google_protobuf_wrappers_pb.StringValue.AsObject,
        medicineid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        notes?: google_protobuf_wrappers_pb.StringValue.AsObject,
        durationobj?: ServiceProviderDurationMessage.AsObject,
        dosageobj?: ServiceProviderDosageMessage.AsObject,
        intakedosageobj?: ServiceProviderIntakeDosageMessage.AsObject,
    }
}

export class ServiceProviderMedicineMessageList extends jspb.Message { 
    clearMedicinesList(): void;
    getMedicinesList(): Array<ServiceProviderMedicineMessage>;
    setMedicinesList(value: Array<ServiceProviderMedicineMessage>): ServiceProviderMedicineMessageList;
    addMedicines(value?: ServiceProviderMedicineMessage, index?: number): ServiceProviderMedicineMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderMedicineMessageList.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderMedicineMessageList): ServiceProviderMedicineMessageList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderMedicineMessageList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderMedicineMessageList;
    static deserializeBinaryFromReader(message: ServiceProviderMedicineMessageList, reader: jspb.BinaryReader): ServiceProviderMedicineMessageList;
}

export namespace ServiceProviderMedicineMessageList {
    export type AsObject = {
        medicinesList: Array<ServiceProviderMedicineMessage.AsObject>,
    }
}

export class ServiceProviderPaymentInfoMessage extends jspb.Message { 

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPaymentInfoMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPaymentInfoMessage;

    hasPaidamount(): boolean;
    clearPaidamount(): void;
    getPaidamount(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPaidamount(value?: google_protobuf_wrappers_pb.DoubleValue): ServiceProviderPaymentInfoMessage;

    hasPaiddate(): boolean;
    clearPaiddate(): void;
    getPaiddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPaiddate(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderPaymentInfoMessage;

    hasPaymentgateway(): boolean;
    clearPaymentgateway(): void;
    getPaymentgateway(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymentgateway(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPaymentInfoMessage;

    hasPaymenttransactionid(): boolean;
    clearPaymenttransactionid(): void;
    getPaymenttransactionid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymenttransactionid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPaymentInfoMessage;

    hasPaymenttransactionnotes(): boolean;
    clearPaymenttransactionnotes(): void;
    getPaymenttransactionnotes(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymenttransactionnotes(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPaymentInfoMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPaymentInfoMessage;

    hasServiceprovidername(): boolean;
    clearServiceprovidername(): void;
    getServiceprovidername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceprovidername(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPaymentInfoMessage;

    hasCustomername(): boolean;
    clearCustomername(): void;
    getCustomername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomername(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPaymentInfoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderPaymentInfoMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderPaymentInfoMessage): ServiceProviderPaymentInfoMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderPaymentInfoMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderPaymentInfoMessage;
    static deserializeBinaryFromReader(message: ServiceProviderPaymentInfoMessage, reader: jspb.BinaryReader): ServiceProviderPaymentInfoMessage;
}

export namespace ServiceProviderPaymentInfoMessage {
    export type AsObject = {
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paidamount?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        paiddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        paymentgateway?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymenttransactionid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymenttransactionnotes?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceprovidername?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customername?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderPaymentListMessage extends jspb.Message { 
    clearPaymentsList(): void;
    getPaymentsList(): Array<ServiceProviderPaymentInfoMessage>;
    setPaymentsList(value: Array<ServiceProviderPaymentInfoMessage>): ServiceProviderPaymentListMessage;
    addPayments(value?: ServiceProviderPaymentInfoMessage, index?: number): ServiceProviderPaymentInfoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderPaymentListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderPaymentListMessage): ServiceProviderPaymentListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderPaymentListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderPaymentListMessage;
    static deserializeBinaryFromReader(message: ServiceProviderPaymentListMessage, reader: jspb.BinaryReader): ServiceProviderPaymentListMessage;
}

export namespace ServiceProviderPaymentListMessage {
    export type AsObject = {
        paymentsList: Array<ServiceProviderPaymentInfoMessage.AsObject>,
    }
}

export class ServiceProviderPhoneNumber extends jspb.Message { 

    hasCountrycode(): boolean;
    clearCountrycode(): void;
    getCountrycode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCountrycode(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPhoneNumber;

    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setNumber(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPhoneNumber;

    hasType(): boolean;
    clearType(): void;
    getType(): google_protobuf_wrappers_pb.StringValue | undefined;
    setType(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPhoneNumber;

    hasPhonenumberid(): boolean;
    clearPhonenumberid(): void;
    getPhonenumberid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPhonenumberid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPhoneNumber;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderPhoneNumber.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderPhoneNumber): ServiceProviderPhoneNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderPhoneNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderPhoneNumber;
    static deserializeBinaryFromReader(message: ServiceProviderPhoneNumber, reader: jspb.BinaryReader): ServiceProviderPhoneNumber;
}

export namespace ServiceProviderPhoneNumber {
    export type AsObject = {
        countrycode?: google_protobuf_wrappers_pb.StringValue.AsObject,
        number?: google_protobuf_wrappers_pb.StringValue.AsObject,
        type?: google_protobuf_wrappers_pb.StringValue.AsObject,
        phonenumberid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderPrescriptionMessage extends jspb.Message { 

    hasPrescriptionid(): boolean;
    clearPrescriptionid(): void;
    getPrescriptionid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPrescriptionid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPrescriptionMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPrescriptionMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderPrescriptionMessage;

    hasCreateddatetime(): boolean;
    clearCreateddatetime(): void;
    getCreateddatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddatetime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderPrescriptionMessage;
    clearMedicinelistList(): void;
    getMedicinelistList(): Array<ServiceProviderMedicineMessage>;
    setMedicinelistList(value: Array<ServiceProviderMedicineMessage>): ServiceProviderPrescriptionMessage;
    addMedicinelist(value?: ServiceProviderMedicineMessage, index?: number): ServiceProviderMedicineMessage;

    hasFileinfo(): boolean;
    clearFileinfo(): void;
    getFileinfo(): ServiceProviderFileInfoMessage | undefined;
    setFileinfo(value?: ServiceProviderFileInfoMessage): ServiceProviderPrescriptionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderPrescriptionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderPrescriptionMessage): ServiceProviderPrescriptionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderPrescriptionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderPrescriptionMessage;
    static deserializeBinaryFromReader(message: ServiceProviderPrescriptionMessage, reader: jspb.BinaryReader): ServiceProviderPrescriptionMessage;
}

export namespace ServiceProviderPrescriptionMessage {
    export type AsObject = {
        prescriptionid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        createddatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        medicinelistList: Array<ServiceProviderMedicineMessage.AsObject>,
        fileinfo?: ServiceProviderFileInfoMessage.AsObject,
    }
}

export class ServiceProviderReportMessage extends jspb.Message { 

    hasReportid(): boolean;
    clearReportid(): void;
    getReportid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReportid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportMessage;

    hasFilename(): boolean;
    clearFilename(): void;
    getFilename(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFilename(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportMessage;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportMessage;

    hasFiletype(): boolean;
    clearFiletype(): void;
    getFiletype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFiletype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderReportMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderReportMessage): ServiceProviderReportMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderReportMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderReportMessage;
    static deserializeBinaryFromReader(message: ServiceProviderReportMessage, reader: jspb.BinaryReader): ServiceProviderReportMessage;
}

export namespace ServiceProviderReportMessage {
    export type AsObject = {
        reportid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filename?: google_protobuf_wrappers_pb.StringValue.AsObject,
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filetype?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderReportListMessage extends jspb.Message { 
    clearReportsList(): void;
    getReportsList(): Array<ServiceProviderReportMessage>;
    setReportsList(value: Array<ServiceProviderReportMessage>): ServiceProviderReportListMessage;
    addReports(value?: ServiceProviderReportMessage, index?: number): ServiceProviderReportMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderReportListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderReportListMessage): ServiceProviderReportListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderReportListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderReportListMessage;
    static deserializeBinaryFromReader(message: ServiceProviderReportListMessage, reader: jspb.BinaryReader): ServiceProviderReportListMessage;
}

export namespace ServiceProviderReportListMessage {
    export type AsObject = {
        reportsList: Array<ServiceProviderReportMessage.AsObject>,
    }
}

export class ServiceProviderReportUploadMessage extends jspb.Message { 

    hasReportid(): boolean;
    clearReportid(): void;
    getReportid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReportid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportUploadMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportUploadMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportUploadMessage;

    hasFilename(): boolean;
    clearFilename(): void;
    getFilename(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFilename(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportUploadMessage;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportUploadMessage;

    hasFiletype(): boolean;
    clearFiletype(): void;
    getFiletype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFiletype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderReportUploadMessage;

    hasMediafile(): boolean;
    clearMediafile(): void;
    getMediafile(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setMediafile(value?: google_protobuf_wrappers_pb.BytesValue): ServiceProviderReportUploadMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderReportUploadMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderReportUploadMessage): ServiceProviderReportUploadMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderReportUploadMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderReportUploadMessage;
    static deserializeBinaryFromReader(message: ServiceProviderReportUploadMessage, reader: jspb.BinaryReader): ServiceProviderReportUploadMessage;
}

export namespace ServiceProviderReportUploadMessage {
    export type AsObject = {
        reportid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filename?: google_protobuf_wrappers_pb.StringValue.AsObject,
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filetype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        mediafile?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    }
}

export class ServiceProviderProfileMessage extends jspb.Message { 

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;

    hasServiceprovidertype(): boolean;
    clearServiceprovidertype(): void;
    getServiceprovidertype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceprovidertype(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;

    hasFirstname(): boolean;
    clearFirstname(): void;
    getFirstname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFirstname(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;

    hasLastname(): boolean;
    clearLastname(): void;
    getLastname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setLastname(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;
    clearSpecialitiesList(): void;
    getSpecialitiesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSpecialitiesList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderProfileMessage;
    addSpecialities(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGender(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;
    clearPhonenumbersList(): void;
    getPhonenumbersList(): Array<ServiceProviderPhoneNumber>;
    setPhonenumbersList(value: Array<ServiceProviderPhoneNumber>): ServiceProviderProfileMessage;
    addPhonenumbers(value?: ServiceProviderPhoneNumber, index?: number): ServiceProviderPhoneNumber;
    clearAddressesList(): void;
    getAddressesList(): Array<ServiceProviderAddress>;
    setAddressesList(value: Array<ServiceProviderAddress>): ServiceProviderProfileMessage;
    addAddresses(value?: ServiceProviderAddress, index?: number): ServiceProviderAddress;

    hasApplicationinfo(): boolean;
    clearApplicationinfo(): void;
    getApplicationinfo(): ServiceProviderAppInfo | undefined;
    setApplicationinfo(value?: ServiceProviderAppInfo): ServiceProviderProfileMessage;

    hasEmailaddress(): boolean;
    clearEmailaddress(): void;
    getEmailaddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEmailaddress(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;

    hasProfilepictureurl(): boolean;
    clearProfilepictureurl(): void;
    getProfilepictureurl(): google_protobuf_wrappers_pb.StringValue | undefined;
    setProfilepictureurl(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;
    clearLanguagesList(): void;
    getLanguagesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setLanguagesList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderProfileMessage;
    addLanguages(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearEducationsList(): void;
    getEducationsList(): Array<ServiceProviderEducation>;
    setEducationsList(value: Array<ServiceProviderEducation>): ServiceProviderProfileMessage;
    addEducations(value?: ServiceProviderEducation, index?: number): ServiceProviderEducation;
    clearExperiencesList(): void;
    getExperiencesList(): Array<ServiceProviderWorkExperience>;
    setExperiencesList(value: Array<ServiceProviderWorkExperience>): ServiceProviderProfileMessage;
    addExperiences(value?: ServiceProviderWorkExperience, index?: number): ServiceProviderWorkExperience;

    hasServicefee(): boolean;
    clearServicefee(): void;
    getServicefee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setServicefee(value?: google_protobuf_wrappers_pb.DoubleValue): ServiceProviderProfileMessage;

    hasServicefeecurrency(): boolean;
    clearServicefeecurrency(): void;
    getServicefeecurrency(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicefeecurrency(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;

    hasFollowupservicefee(): boolean;
    clearFollowupservicefee(): void;
    getFollowupservicefee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFollowupservicefee(value?: google_protobuf_wrappers_pb.DoubleValue): ServiceProviderProfileMessage;

    hasAppointmentduration(): boolean;
    clearAppointmentduration(): void;
    getAppointmentduration(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setAppointmentduration(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderProfileMessage;

    hasIntervalbetweenappointment(): boolean;
    clearIntervalbetweenappointment(): void;
    getIntervalbetweenappointment(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setIntervalbetweenappointment(value?: google_protobuf_wrappers_pb.Int32Value): ServiceProviderProfileMessage;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStatus(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;

    hasRegistrationnumber(): boolean;
    clearRegistrationnumber(): void;
    getRegistrationnumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRegistrationnumber(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderProfileMessage;

    hasIsactive(): boolean;
    clearIsactive(): void;
    getIsactive(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsactive(value?: google_protobuf_wrappers_pb.BoolValue): ServiceProviderProfileMessage;

    hasCreateddate(): boolean;
    clearCreateddate(): void;
    getCreateddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddate(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderProfileMessage;

    hasLastmodifeddate(): boolean;
    clearLastmodifeddate(): void;
    getLastmodifeddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLastmodifeddate(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderProfileMessage;

    hasServiceproviderdeviceinfo(): boolean;
    clearServiceproviderdeviceinfo(): void;
    getServiceproviderdeviceinfo(): DeviceInfoMessage | undefined;
    setServiceproviderdeviceinfo(value?: DeviceInfoMessage): ServiceProviderProfileMessage;

    hasAdditionalinfo(): boolean;
    clearAdditionalinfo(): void;
    getAdditionalinfo(): ServiceProviderAdditionalInfoMessage | undefined;
    setAdditionalinfo(value?: ServiceProviderAdditionalInfoMessage): ServiceProviderProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderProfileMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderProfileMessage): ServiceProviderProfileMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderProfileMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderProfileMessage;
    static deserializeBinaryFromReader(message: ServiceProviderProfileMessage, reader: jspb.BinaryReader): ServiceProviderProfileMessage;
}

export namespace ServiceProviderProfileMessage {
    export type AsObject = {
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceprovidertype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        firstname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        lastname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        specialitiesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        gender?: google_protobuf_wrappers_pb.StringValue.AsObject,
        phonenumbersList: Array<ServiceProviderPhoneNumber.AsObject>,
        addressesList: Array<ServiceProviderAddress.AsObject>,
        applicationinfo?: ServiceProviderAppInfo.AsObject,
        emailaddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
        profilepictureurl?: google_protobuf_wrappers_pb.StringValue.AsObject,
        languagesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        educationsList: Array<ServiceProviderEducation.AsObject>,
        experiencesList: Array<ServiceProviderWorkExperience.AsObject>,
        servicefee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        servicefeecurrency?: google_protobuf_wrappers_pb.StringValue.AsObject,
        followupservicefee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        appointmentduration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        intervalbetweenappointment?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        status?: google_protobuf_wrappers_pb.StringValue.AsObject,
        registrationnumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
        isactive?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        createddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        lastmodifeddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        serviceproviderdeviceinfo?: DeviceInfoMessage.AsObject,
        additionalinfo?: ServiceProviderAdditionalInfoMessage.AsObject,
    }
}

export class ServiceProviderAdditionalInfoMessage extends jspb.Message { 
    clearSymptomsList(): void;
    getSymptomsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSymptomsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderAdditionalInfoMessage;
    addSymptoms(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearDesignationsList(): void;
    getDesignationsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setDesignationsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderAdditionalInfoMessage;
    addDesignations(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearSpecialtiesList(): void;
    getSpecialtiesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSpecialtiesList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderAdditionalInfoMessage;
    addSpecialties(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearCategoriesList(): void;
    getCategoriesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCategoriesList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderAdditionalInfoMessage;
    addCategories(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearCertificationsList(): void;
    getCertificationsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCertificationsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderAdditionalInfoMessage;
    addCertifications(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearClubmembershipsList(): void;
    getClubmembershipsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setClubmembershipsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderAdditionalInfoMessage;
    addClubmemberships(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearProceduresList(): void;
    getProceduresList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setProceduresList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderAdditionalInfoMessage;
    addProcedures(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearPublishedList(): void;
    getPublishedList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setPublishedList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderAdditionalInfoMessage;
    addPublished(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearLinksList(): void;
    getLinksList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setLinksList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderAdditionalInfoMessage;
    addLinks(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAdditionalInfoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAdditionalInfoMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAdditionalInfoMessage): ServiceProviderAdditionalInfoMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAdditionalInfoMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAdditionalInfoMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAdditionalInfoMessage, reader: jspb.BinaryReader): ServiceProviderAdditionalInfoMessage;
}

export namespace ServiceProviderAdditionalInfoMessage {
    export type AsObject = {
        symptomsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        designationsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        specialtiesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        categoriesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        certificationsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        clubmembershipsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        proceduresList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        publishedList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        linksList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderServiceRequestMessage extends jspb.Message { 

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestMessage;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReason(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestMessage;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestMessage;

    hasExamination(): boolean;
    clearExamination(): void;
    getExamination(): google_protobuf_wrappers_pb.StringValue | undefined;
    setExamination(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestMessage;

    hasDiagnosis(): boolean;
    clearDiagnosis(): void;
    getDiagnosis(): ServiceProviderDiagnosisMessage | undefined;
    setDiagnosis(value?: ServiceProviderDiagnosisMessage): ServiceProviderServiceRequestMessage;
    clearInvestigationsList(): void;
    getInvestigationsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setInvestigationsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ServiceProviderServiceRequestMessage;
    addInvestigations(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasAdvice(): boolean;
    clearAdvice(): void;
    getAdvice(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAdvice(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestMessage;

    hasCreateddatetime(): boolean;
    clearCreateddatetime(): void;
    getCreateddatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddatetime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderServiceRequestMessage;

    hasLastmodifeddate(): boolean;
    clearLastmodifeddate(): void;
    getLastmodifeddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLastmodifeddate(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderServiceRequestMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestMessage;

    hasAllergy(): boolean;
    clearAllergy(): void;
    getAllergy(): ServiceProviderAllergyMessage | undefined;
    setAllergy(value?: ServiceProviderAllergyMessage): ServiceProviderServiceRequestMessage;

    hasMedicalhistory(): boolean;
    clearMedicalhistory(): void;
    getMedicalhistory(): ServiceProviderMedicalHistoryMessage | undefined;
    setMedicalhistory(value?: ServiceProviderMedicalHistoryMessage): ServiceProviderServiceRequestMessage;

    hasChildid(): boolean;
    clearChildid(): void;
    getChildid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setChildid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderServiceRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderServiceRequestMessage): ServiceProviderServiceRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderServiceRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderServiceRequestMessage;
    static deserializeBinaryFromReader(message: ServiceProviderServiceRequestMessage, reader: jspb.BinaryReader): ServiceProviderServiceRequestMessage;
}

export namespace ServiceProviderServiceRequestMessage {
    export type AsObject = {
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        reason?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        examination?: google_protobuf_wrappers_pb.StringValue.AsObject,
        diagnosis?: ServiceProviderDiagnosisMessage.AsObject,
        investigationsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        advice?: google_protobuf_wrappers_pb.StringValue.AsObject,
        createddatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        lastmodifeddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        allergy?: ServiceProviderAllergyMessage.AsObject,
        medicalhistory?: ServiceProviderMedicalHistoryMessage.AsObject,
        childid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderServiceRequestRequestMessage extends jspb.Message { 

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestRequestMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestRequestMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderServiceRequestRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderServiceRequestRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderServiceRequestRequestMessage): ServiceProviderServiceRequestRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderServiceRequestRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderServiceRequestRequestMessage;
    static deserializeBinaryFromReader(message: ServiceProviderServiceRequestRequestMessage, reader: jspb.BinaryReader): ServiceProviderServiceRequestRequestMessage;
}

export namespace ServiceProviderServiceRequestRequestMessage {
    export type AsObject = {
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderIntakeDosageMessage extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderIntakeDosageMessage;

    hasUnit(): boolean;
    clearUnit(): void;
    getUnit(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUnit(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderIntakeDosageMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderIntakeDosageMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderIntakeDosageMessage): ServiceProviderIntakeDosageMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderIntakeDosageMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderIntakeDosageMessage;
    static deserializeBinaryFromReader(message: ServiceProviderIntakeDosageMessage, reader: jspb.BinaryReader): ServiceProviderIntakeDosageMessage;
}

export namespace ServiceProviderIntakeDosageMessage {
    export type AsObject = {
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        unit?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderAppointmentSummaryMessage extends jspb.Message { 

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentSummaryMessage;

    hasPdfbytes(): boolean;
    clearPdfbytes(): void;
    getPdfbytes(): ResponsePdf | undefined;
    setPdfbytes(value?: ResponsePdf): ServiceProviderAppointmentSummaryMessage;

    hasPrescriptionimagebytestring(): boolean;
    clearPrescriptionimagebytestring(): void;
    getPrescriptionimagebytestring(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPrescriptionimagebytestring(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentSummaryMessage;

    hasReportslist(): boolean;
    clearReportslist(): void;
    getReportslist(): ServiceProviderReportListMessage | undefined;
    setReportslist(value?: ServiceProviderReportListMessage): ServiceProviderAppointmentSummaryMessage;

    hasAppointmenttime(): boolean;
    clearAppointmenttime(): void;
    getAppointmenttime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAppointmenttime(value?: google_protobuf_wrappers_pb.Int64Value): ServiceProviderAppointmentSummaryMessage;

    hasAppointmentstatus(): boolean;
    clearAppointmentstatus(): void;
    getAppointmentstatus(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentstatus(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentSummaryMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAppointmentSummaryMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAppointmentSummaryMessage): ServiceProviderAppointmentSummaryMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAppointmentSummaryMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAppointmentSummaryMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAppointmentSummaryMessage, reader: jspb.BinaryReader): ServiceProviderAppointmentSummaryMessage;
}

export namespace ServiceProviderAppointmentSummaryMessage {
    export type AsObject = {
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        pdfbytes?: ResponsePdf.AsObject,
        prescriptionimagebytestring?: google_protobuf_wrappers_pb.StringValue.AsObject,
        reportslist?: ServiceProviderReportListMessage.AsObject,
        appointmenttime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        appointmentstatus?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ServiceProviderAppointmentSummaryListMessage extends jspb.Message { 
    clearServiceproviderappointmentsummarylistList(): void;
    getServiceproviderappointmentsummarylistList(): Array<ServiceProviderAppointmentSummaryMessage>;
    setServiceproviderappointmentsummarylistList(value: Array<ServiceProviderAppointmentSummaryMessage>): ServiceProviderAppointmentSummaryListMessage;
    addServiceproviderappointmentsummarylist(value?: ServiceProviderAppointmentSummaryMessage, index?: number): ServiceProviderAppointmentSummaryMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAppointmentSummaryListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAppointmentSummaryListMessage): ServiceProviderAppointmentSummaryListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAppointmentSummaryListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAppointmentSummaryListMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAppointmentSummaryListMessage, reader: jspb.BinaryReader): ServiceProviderAppointmentSummaryListMessage;
}

export namespace ServiceProviderAppointmentSummaryListMessage {
    export type AsObject = {
        serviceproviderappointmentsummarylistList: Array<ServiceProviderAppointmentSummaryMessage.AsObject>,
    }
}

export class ServiceProviderAppointmentSummaryRequestMessage extends jspb.Message { 

    hasParentcustomerid(): boolean;
    clearParentcustomerid(): void;
    getParentcustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setParentcustomerid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentSummaryRequestMessage;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentSummaryRequestMessage;

    hasChildid(): boolean;
    clearChildid(): void;
    getChildid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setChildid(value?: google_protobuf_wrappers_pb.StringValue): ServiceProviderAppointmentSummaryRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceProviderAppointmentSummaryRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceProviderAppointmentSummaryRequestMessage): ServiceProviderAppointmentSummaryRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceProviderAppointmentSummaryRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceProviderAppointmentSummaryRequestMessage;
    static deserializeBinaryFromReader(message: ServiceProviderAppointmentSummaryRequestMessage, reader: jspb.BinaryReader): ServiceProviderAppointmentSummaryRequestMessage;
}

export namespace ServiceProviderAppointmentSummaryRequestMessage {
    export type AsObject = {
        parentcustomerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        childid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerAddress extends jspb.Message { 

    hasStreetaddress(): boolean;
    clearStreetaddress(): void;
    getStreetaddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStreetaddress(value?: google_protobuf_wrappers_pb.StringValue): CustomerAddress;

    hasState(): boolean;
    clearState(): void;
    getState(): google_protobuf_wrappers_pb.StringValue | undefined;
    setState(value?: google_protobuf_wrappers_pb.StringValue): CustomerAddress;

    hasCountry(): boolean;
    clearCountry(): void;
    getCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCountry(value?: google_protobuf_wrappers_pb.StringValue): CustomerAddress;

    hasPincode(): boolean;
    clearPincode(): void;
    getPincode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPincode(value?: google_protobuf_wrappers_pb.StringValue): CustomerAddress;

    hasType(): boolean;
    clearType(): void;
    getType(): google_protobuf_wrappers_pb.StringValue | undefined;
    setType(value?: google_protobuf_wrappers_pb.StringValue): CustomerAddress;

    hasAddressid(): boolean;
    clearAddressid(): void;
    getAddressid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAddressid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerAddress.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerAddress): CustomerAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerAddress;
    static deserializeBinaryFromReader(message: CustomerAddress, reader: jspb.BinaryReader): CustomerAddress;
}

export namespace CustomerAddress {
    export type AsObject = {
        streetaddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
        state?: google_protobuf_wrappers_pb.StringValue.AsObject,
        country?: google_protobuf_wrappers_pb.StringValue.AsObject,
        pincode?: google_protobuf_wrappers_pb.StringValue.AsObject,
        type?: google_protobuf_wrappers_pb.StringValue.AsObject,
        addressid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerAllergyMessage extends jspb.Message { 

    hasAllergyid(): boolean;
    clearAllergyid(): void;
    getAllergyid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAllergyid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAllergyMessage;

    hasAllergyname(): boolean;
    clearAllergyname(): void;
    getAllergyname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAllergyname(value?: google_protobuf_wrappers_pb.StringValue): CustomerAllergyMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAllergyMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAllergyMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerAllergyMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerAllergyMessage): CustomerAllergyMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerAllergyMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerAllergyMessage;
    static deserializeBinaryFromReader(message: CustomerAllergyMessage, reader: jspb.BinaryReader): CustomerAllergyMessage;
}

export namespace CustomerAllergyMessage {
    export type AsObject = {
        allergyid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        allergyname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerAppointmentMessage extends jspb.Message { 

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasParentappointmentid(): boolean;
    clearParentappointmentid(): void;
    getParentappointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setParentappointmentid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasRequestedby(): boolean;
    clearRequestedby(): void;
    getRequestedby(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRequestedby(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasServiceprovidername(): boolean;
    clearServiceprovidername(): void;
    getServiceprovidername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceprovidername(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasCustomername(): boolean;
    clearCustomername(): void;
    getCustomername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomername(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasIsblockedbyserviceprovider(): boolean;
    clearIsblockedbyserviceprovider(): void;
    getIsblockedbyserviceprovider(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsblockedbyserviceprovider(value?: google_protobuf_wrappers_pb.BoolValue): CustomerAppointmentMessage;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStatus(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasServicefee(): boolean;
    clearServicefee(): void;
    getServicefee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setServicefee(value?: google_protobuf_wrappers_pb.DoubleValue): CustomerAppointmentMessage;

    hasFollowupdays(): boolean;
    clearFollowupdays(): void;
    getFollowupdays(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setFollowupdays(value?: google_protobuf_wrappers_pb.Int32Value): CustomerAppointmentMessage;

    hasIspaid(): boolean;
    clearIspaid(): void;
    getIspaid(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIspaid(value?: google_protobuf_wrappers_pb.BoolValue): CustomerAppointmentMessage;

    hasScheduledappointmentstarttime(): boolean;
    clearScheduledappointmentstarttime(): void;
    getScheduledappointmentstarttime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setScheduledappointmentstarttime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerAppointmentMessage;

    hasScheduledappointmentendtime(): boolean;
    clearScheduledappointmentendtime(): void;
    getScheduledappointmentendtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setScheduledappointmentendtime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerAppointmentMessage;

    hasActualappointmentstarttime(): boolean;
    clearActualappointmentstarttime(): void;
    getActualappointmentstarttime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setActualappointmentstarttime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerAppointmentMessage;

    hasActualappointmentendtime(): boolean;
    clearActualappointmentendtime(): void;
    getActualappointmentendtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setActualappointmentendtime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerAppointmentMessage;

    hasCreateddatetime(): boolean;
    clearCreateddatetime(): void;
    getCreateddatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddatetime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerAppointmentMessage;

    hasLastmodifeddate(): boolean;
    clearLastmodifeddate(): void;
    getLastmodifeddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLastmodifeddate(value?: google_protobuf_wrappers_pb.Int64Value): CustomerAppointmentMessage;

    hasNoofreports(): boolean;
    clearNoofreports(): void;
    getNoofreports(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setNoofreports(value?: google_protobuf_wrappers_pb.Int32Value): CustomerAppointmentMessage;

    hasCancellation(): boolean;
    clearCancellation(): void;
    getCancellation(): CustomerCancellationMessage | undefined;
    setCancellation(value?: CustomerCancellationMessage): CustomerAppointmentMessage;

    hasChildid(): boolean;
    clearChildid(): void;
    getChildid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setChildid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasPaymenttype(): boolean;
    clearPaymenttype(): void;
    getPaymenttype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymenttype(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentMessage;

    hasAppointmentverification(): boolean;
    clearAppointmentverification(): void;
    getAppointmentverification(): CustomerAppointmentVerificationMessage | undefined;
    setAppointmentverification(value?: CustomerAppointmentVerificationMessage): CustomerAppointmentMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerAppointmentMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerAppointmentMessage): CustomerAppointmentMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerAppointmentMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerAppointmentMessage;
    static deserializeBinaryFromReader(message: CustomerAppointmentMessage, reader: jspb.BinaryReader): CustomerAppointmentMessage;
}

export namespace CustomerAppointmentMessage {
    export type AsObject = {
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        parentappointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        requestedby?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceprovidername?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customername?: google_protobuf_wrappers_pb.StringValue.AsObject,
        isblockedbyserviceprovider?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        status?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicefee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        followupdays?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        ispaid?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        scheduledappointmentstarttime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        scheduledappointmentendtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        actualappointmentstarttime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        actualappointmentendtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        createddatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        lastmodifeddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        noofreports?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        cancellation?: CustomerCancellationMessage.AsObject,
        childid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymenttype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentverification?: CustomerAppointmentVerificationMessage.AsObject,
    }
}

export class CustomerAppointmentVerificationMessage extends jspb.Message { 

    hasAppointmentverificationid(): boolean;
    clearAppointmentverificationid(): void;
    getAppointmentverificationid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentverificationid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentVerificationMessage;

    hasVerificationstatus(): boolean;
    clearVerificationstatus(): void;
    getVerificationstatus(): google_protobuf_wrappers_pb.StringValue | undefined;
    setVerificationstatus(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentVerificationMessage;

    hasVerifiedby(): boolean;
    clearVerifiedby(): void;
    getVerifiedby(): google_protobuf_wrappers_pb.StringValue | undefined;
    setVerifiedby(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentVerificationMessage;

    hasVerifiedtime(): boolean;
    clearVerifiedtime(): void;
    getVerifiedtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVerifiedtime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerAppointmentVerificationMessage;

    hasCustomerresponseforreason(): boolean;
    clearCustomerresponseforreason(): void;
    getCustomerresponseforreason(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerresponseforreason(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentVerificationMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerAppointmentVerificationMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerAppointmentVerificationMessage): CustomerAppointmentVerificationMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerAppointmentVerificationMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerAppointmentVerificationMessage;
    static deserializeBinaryFromReader(message: CustomerAppointmentVerificationMessage, reader: jspb.BinaryReader): CustomerAppointmentVerificationMessage;
}

export namespace CustomerAppointmentVerificationMessage {
    export type AsObject = {
        appointmentverificationid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        verificationstatus?: google_protobuf_wrappers_pb.StringValue.AsObject,
        verifiedby?: google_protobuf_wrappers_pb.StringValue.AsObject,
        verifiedtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        customerresponseforreason?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerAppointmentList extends jspb.Message { 
    clearAppointmentsList(): void;
    getAppointmentsList(): Array<CustomerAppointmentMessage>;
    setAppointmentsList(value: Array<CustomerAppointmentMessage>): CustomerAppointmentList;
    addAppointments(value?: CustomerAppointmentMessage, index?: number): CustomerAppointmentMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerAppointmentList.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerAppointmentList): CustomerAppointmentList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerAppointmentList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerAppointmentList;
    static deserializeBinaryFromReader(message: CustomerAppointmentList, reader: jspb.BinaryReader): CustomerAppointmentList;
}

export namespace CustomerAppointmentList {
    export type AsObject = {
        appointmentsList: Array<CustomerAppointmentMessage.AsObject>,
    }
}

export class CustomerAppointmentRequestMessage extends jspb.Message { 

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentRequestMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppointmentRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerAppointmentRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerAppointmentRequestMessage): CustomerAppointmentRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerAppointmentRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerAppointmentRequestMessage;
    static deserializeBinaryFromReader(message: CustomerAppointmentRequestMessage, reader: jspb.BinaryReader): CustomerAppointmentRequestMessage;
}

export namespace CustomerAppointmentRequestMessage {
    export type AsObject = {
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerAppInfo extends jspb.Message { 

    hasAuthid(): boolean;
    clearAuthid(): void;
    getAuthid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppInfo;

    hasAuthtype(): boolean;
    clearAuthtype(): void;
    getAuthtype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthtype(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppInfo;

    hasDevicetoken(): boolean;
    clearDevicetoken(): void;
    getDevicetoken(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDevicetoken(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppInfo;

    hasAppinfoid(): boolean;
    clearAppinfoid(): void;
    getAppinfoid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppinfoid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppInfo;

    hasDevicetokentype(): boolean;
    clearDevicetokentype(): void;
    getDevicetokentype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDevicetokentype(value?: google_protobuf_wrappers_pb.StringValue): CustomerAppInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerAppInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerAppInfo): CustomerAppInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerAppInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerAppInfo;
    static deserializeBinaryFromReader(message: CustomerAppInfo, reader: jspb.BinaryReader): CustomerAppInfo;
}

export namespace CustomerAppInfo {
    export type AsObject = {
        authid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        authtype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        devicetoken?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appinfoid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        devicetokentype?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerServiceProviderAvailability extends jspb.Message { 

    hasDayofweek(): boolean;
    clearDayofweek(): void;
    getDayofweek(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setDayofweek(value?: google_protobuf_wrappers_pb.Int32Value): CustomerServiceProviderAvailability;

    hasStarttime(): boolean;
    clearStarttime(): void;
    getStarttime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setStarttime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerServiceProviderAvailability;

    hasEndtime(): boolean;
    clearEndtime(): void;
    getEndtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEndtime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerServiceProviderAvailability;

    hasAvailabilityconfigid(): boolean;
    clearAvailabilityconfigid(): void;
    getAvailabilityconfigid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAvailabilityconfigid(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceProviderAvailability;

    hasPaymenttype(): boolean;
    clearPaymenttype(): void;
    getPaymenttype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymenttype(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceProviderAvailability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerServiceProviderAvailability.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerServiceProviderAvailability): CustomerServiceProviderAvailability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerServiceProviderAvailability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerServiceProviderAvailability;
    static deserializeBinaryFromReader(message: CustomerServiceProviderAvailability, reader: jspb.BinaryReader): CustomerServiceProviderAvailability;
}

export namespace CustomerServiceProviderAvailability {
    export type AsObject = {
        dayofweek?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        starttime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        endtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        availabilityconfigid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymenttype?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerAvailabilityConfigList extends jspb.Message { 
    clearAvailabilitylistList(): void;
    getAvailabilitylistList(): Array<CustomerServiceProviderAvailability>;
    setAvailabilitylistList(value: Array<CustomerServiceProviderAvailability>): CustomerAvailabilityConfigList;
    addAvailabilitylist(value?: CustomerServiceProviderAvailability, index?: number): CustomerServiceProviderAvailability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerAvailabilityConfigList.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerAvailabilityConfigList): CustomerAvailabilityConfigList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerAvailabilityConfigList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerAvailabilityConfigList;
    static deserializeBinaryFromReader(message: CustomerAvailabilityConfigList, reader: jspb.BinaryReader): CustomerAvailabilityConfigList;
}

export namespace CustomerAvailabilityConfigList {
    export type AsObject = {
        availabilitylistList: Array<CustomerServiceProviderAvailability.AsObject>,
    }
}

export class CustomerAvailabilityRequest extends jspb.Message { 
    clearAvailabilitylistList(): void;
    getAvailabilitylistList(): Array<CustomerServiceProviderAvailability>;
    setAvailabilitylistList(value: Array<CustomerServiceProviderAvailability>): CustomerAvailabilityRequest;
    addAvailabilitylist(value?: CustomerServiceProviderAvailability, index?: number): CustomerServiceProviderAvailability;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): CustomerAvailabilityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerAvailabilityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerAvailabilityRequest): CustomerAvailabilityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerAvailabilityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerAvailabilityRequest;
    static deserializeBinaryFromReader(message: CustomerAvailabilityRequest, reader: jspb.BinaryReader): CustomerAvailabilityRequest;
}

export namespace CustomerAvailabilityRequest {
    export type AsObject = {
        availabilitylistList: Array<CustomerServiceProviderAvailability.AsObject>,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerCancellationMessage extends jspb.Message { 

    hasReasonname(): boolean;
    clearReasonname(): void;
    getReasonname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReasonname(value?: google_protobuf_wrappers_pb.StringValue): CustomerCancellationMessage;

    hasCancelledtime(): boolean;
    clearCancelledtime(): void;
    getCancelledtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCancelledtime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerCancellationMessage;

    hasCancelledby(): boolean;
    clearCancelledby(): void;
    getCancelledby(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCancelledby(value?: google_protobuf_wrappers_pb.StringValue): CustomerCancellationMessage;

    hasCancelledbytype(): boolean;
    clearCancelledbytype(): void;
    getCancelledbytype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCancelledbytype(value?: google_protobuf_wrappers_pb.StringValue): CustomerCancellationMessage;

    hasNotes(): boolean;
    clearNotes(): void;
    getNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
    setNotes(value?: google_protobuf_wrappers_pb.StringValue): CustomerCancellationMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerCancellationMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerCancellationMessage): CustomerCancellationMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerCancellationMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerCancellationMessage;
    static deserializeBinaryFromReader(message: CustomerCancellationMessage, reader: jspb.BinaryReader): CustomerCancellationMessage;
}

export namespace CustomerCancellationMessage {
    export type AsObject = {
        reasonname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        cancelledtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        cancelledby?: google_protobuf_wrappers_pb.StringValue.AsObject,
        cancelledbytype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        notes?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerChildProfileMessage extends jspb.Message { 

    hasChildprofileid(): boolean;
    clearChildprofileid(): void;
    getChildprofileid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setChildprofileid(value?: google_protobuf_wrappers_pb.StringValue): CustomerChildProfileMessage;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): CustomerChildProfileMessage;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGender(value?: google_protobuf_wrappers_pb.StringValue): CustomerChildProfileMessage;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAge(value?: google_protobuf_wrappers_pb.StringValue): CustomerChildProfileMessage;

    hasPreferredphonenumber(): boolean;
    clearPreferredphonenumber(): void;
    getPreferredphonenumber(): CustomerPhoneNumber | undefined;
    setPreferredphonenumber(value?: CustomerPhoneNumber): CustomerChildProfileMessage;

    hasIsprimarycontact(): boolean;
    clearIsprimarycontact(): void;
    getIsprimarycontact(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsprimarycontact(value?: google_protobuf_wrappers_pb.BoolValue): CustomerChildProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerChildProfileMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerChildProfileMessage): CustomerChildProfileMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerChildProfileMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerChildProfileMessage;
    static deserializeBinaryFromReader(message: CustomerChildProfileMessage, reader: jspb.BinaryReader): CustomerChildProfileMessage;
}

export namespace CustomerChildProfileMessage {
    export type AsObject = {
        childprofileid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        gender?: google_protobuf_wrappers_pb.StringValue.AsObject,
        age?: google_protobuf_wrappers_pb.StringValue.AsObject,
        preferredphonenumber?: CustomerPhoneNumber.AsObject,
        isprimarycontact?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class CustomerChildProfileUploadMessage extends jspb.Message { 

    hasChildprofile(): boolean;
    clearChildprofile(): void;
    getChildprofile(): CustomerChildProfileMessage | undefined;
    setChildprofile(value?: CustomerChildProfileMessage): CustomerChildProfileUploadMessage;

    hasCaretakerid(): boolean;
    clearCaretakerid(): void;
    getCaretakerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCaretakerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerChildProfileUploadMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerChildProfileUploadMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerChildProfileUploadMessage): CustomerChildProfileUploadMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerChildProfileUploadMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerChildProfileUploadMessage;
    static deserializeBinaryFromReader(message: CustomerChildProfileUploadMessage, reader: jspb.BinaryReader): CustomerChildProfileUploadMessage;
}

export namespace CustomerChildProfileUploadMessage {
    export type AsObject = {
        childprofile?: CustomerChildProfileMessage.AsObject,
        caretakerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerChildProfileListMessage extends jspb.Message { 
    clearChildrenList(): void;
    getChildrenList(): Array<CustomerChildProfileMessage>;
    setChildrenList(value: Array<CustomerChildProfileMessage>): CustomerChildProfileListMessage;
    addChildren(value?: CustomerChildProfileMessage, index?: number): CustomerChildProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerChildProfileListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerChildProfileListMessage): CustomerChildProfileListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerChildProfileListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerChildProfileListMessage;
    static deserializeBinaryFromReader(message: CustomerChildProfileListMessage, reader: jspb.BinaryReader): CustomerChildProfileListMessage;
}

export namespace CustomerChildProfileListMessage {
    export type AsObject = {
        childrenList: Array<CustomerChildProfileMessage.AsObject>,
    }
}

export class CustomerServiceProviderAdditionalInfoMessage extends jspb.Message { 
    clearSymptomsList(): void;
    getSymptomsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSymptomsList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceProviderAdditionalInfoMessage;
    addSymptoms(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearDesignationsList(): void;
    getDesignationsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setDesignationsList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceProviderAdditionalInfoMessage;
    addDesignations(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearSpecialtiesList(): void;
    getSpecialtiesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSpecialtiesList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceProviderAdditionalInfoMessage;
    addSpecialties(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearCategoriesList(): void;
    getCategoriesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCategoriesList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceProviderAdditionalInfoMessage;
    addCategories(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearCertificationsList(): void;
    getCertificationsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCertificationsList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceProviderAdditionalInfoMessage;
    addCertifications(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearClubmembershipsList(): void;
    getClubmembershipsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setClubmembershipsList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceProviderAdditionalInfoMessage;
    addClubmemberships(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearProceduresList(): void;
    getProceduresList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setProceduresList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceProviderAdditionalInfoMessage;
    addProcedures(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearPublishedList(): void;
    getPublishedList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setPublishedList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceProviderAdditionalInfoMessage;
    addPublished(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearLinksList(): void;
    getLinksList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setLinksList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceProviderAdditionalInfoMessage;
    addLinks(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceProviderAdditionalInfoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerServiceProviderAdditionalInfoMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerServiceProviderAdditionalInfoMessage): CustomerServiceProviderAdditionalInfoMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerServiceProviderAdditionalInfoMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerServiceProviderAdditionalInfoMessage;
    static deserializeBinaryFromReader(message: CustomerServiceProviderAdditionalInfoMessage, reader: jspb.BinaryReader): CustomerServiceProviderAdditionalInfoMessage;
}

export namespace CustomerServiceProviderAdditionalInfoMessage {
    export type AsObject = {
        symptomsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        designationsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        specialtiesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        categoriesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        certificationsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        clubmembershipsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        proceduresList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        publishedList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        linksList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomersServiceProviderProfileMessage extends jspb.Message { 

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;

    hasServiceprovidertype(): boolean;
    clearServiceprovidertype(): void;
    getServiceprovidertype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceprovidertype(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;

    hasFirstname(): boolean;
    clearFirstname(): void;
    getFirstname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFirstname(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;

    hasLastname(): boolean;
    clearLastname(): void;
    getLastname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setLastname(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;
    clearSpecialitiesList(): void;
    getSpecialitiesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSpecialitiesList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomersServiceProviderProfileMessage;
    addSpecialities(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGender(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;

    hasLastmodifeddate(): boolean;
    clearLastmodifeddate(): void;
    getLastmodifeddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLastmodifeddate(value?: google_protobuf_wrappers_pb.Int64Value): CustomersServiceProviderProfileMessage;
    clearAddressesList(): void;
    getAddressesList(): Array<CustomerAddress>;
    setAddressesList(value: Array<CustomerAddress>): CustomersServiceProviderProfileMessage;
    addAddresses(value?: CustomerAddress, index?: number): CustomerAddress;

    hasApplicationinfo(): boolean;
    clearApplicationinfo(): void;
    getApplicationinfo(): CustomerAppInfo | undefined;
    setApplicationinfo(value?: CustomerAppInfo): CustomersServiceProviderProfileMessage;

    hasEmailaddress(): boolean;
    clearEmailaddress(): void;
    getEmailaddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEmailaddress(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;

    hasProfilepictureurl(): boolean;
    clearProfilepictureurl(): void;
    getProfilepictureurl(): google_protobuf_wrappers_pb.StringValue | undefined;
    setProfilepictureurl(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;
    clearLanguagesList(): void;
    getLanguagesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setLanguagesList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomersServiceProviderProfileMessage;
    addLanguages(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearEducationsList(): void;
    getEducationsList(): Array<CustomerEducation>;
    setEducationsList(value: Array<CustomerEducation>): CustomersServiceProviderProfileMessage;
    addEducations(value?: CustomerEducation, index?: number): CustomerEducation;
    clearExperiencesList(): void;
    getExperiencesList(): Array<CustomerWorkExperience>;
    setExperiencesList(value: Array<CustomerWorkExperience>): CustomersServiceProviderProfileMessage;
    addExperiences(value?: CustomerWorkExperience, index?: number): CustomerWorkExperience;

    hasServicefee(): boolean;
    clearServicefee(): void;
    getServicefee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setServicefee(value?: google_protobuf_wrappers_pb.DoubleValue): CustomersServiceProviderProfileMessage;

    hasServicefeecurrency(): boolean;
    clearServicefeecurrency(): void;
    getServicefeecurrency(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicefeecurrency(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;

    hasFollowupservicefee(): boolean;
    clearFollowupservicefee(): void;
    getFollowupservicefee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFollowupservicefee(value?: google_protobuf_wrappers_pb.DoubleValue): CustomersServiceProviderProfileMessage;

    hasAppointmentduration(): boolean;
    clearAppointmentduration(): void;
    getAppointmentduration(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setAppointmentduration(value?: google_protobuf_wrappers_pb.Int32Value): CustomersServiceProviderProfileMessage;

    hasIntervalbetweenappointment(): boolean;
    clearIntervalbetweenappointment(): void;
    getIntervalbetweenappointment(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setIntervalbetweenappointment(value?: google_protobuf_wrappers_pb.Int32Value): CustomersServiceProviderProfileMessage;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStatus(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;

    hasRegistrationnumber(): boolean;
    clearRegistrationnumber(): void;
    getRegistrationnumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRegistrationnumber(value?: google_protobuf_wrappers_pb.StringValue): CustomersServiceProviderProfileMessage;

    hasIsactive(): boolean;
    clearIsactive(): void;
    getIsactive(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsactive(value?: google_protobuf_wrappers_pb.BoolValue): CustomersServiceProviderProfileMessage;

    hasCreateddate(): boolean;
    clearCreateddate(): void;
    getCreateddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddate(value?: google_protobuf_wrappers_pb.Int64Value): CustomersServiceProviderProfileMessage;

    hasLatestslotstarttime(): boolean;
    clearLatestslotstarttime(): void;
    getLatestslotstarttime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLatestslotstarttime(value?: google_protobuf_wrappers_pb.Int64Value): CustomersServiceProviderProfileMessage;

    hasLatestslotendtime(): boolean;
    clearLatestslotendtime(): void;
    getLatestslotendtime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLatestslotendtime(value?: google_protobuf_wrappers_pb.Int64Value): CustomersServiceProviderProfileMessage;

    hasAdditionalinfo(): boolean;
    clearAdditionalinfo(): void;
    getAdditionalinfo(): CustomerServiceProviderAdditionalInfoMessage | undefined;
    setAdditionalinfo(value?: CustomerServiceProviderAdditionalInfoMessage): CustomersServiceProviderProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomersServiceProviderProfileMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomersServiceProviderProfileMessage): CustomersServiceProviderProfileMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomersServiceProviderProfileMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomersServiceProviderProfileMessage;
    static deserializeBinaryFromReader(message: CustomersServiceProviderProfileMessage, reader: jspb.BinaryReader): CustomersServiceProviderProfileMessage;
}

export namespace CustomersServiceProviderProfileMessage {
    export type AsObject = {
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceprovidertype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        firstname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        lastname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        specialitiesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        gender?: google_protobuf_wrappers_pb.StringValue.AsObject,
        lastmodifeddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        addressesList: Array<CustomerAddress.AsObject>,
        applicationinfo?: CustomerAppInfo.AsObject,
        emailaddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
        profilepictureurl?: google_protobuf_wrappers_pb.StringValue.AsObject,
        languagesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        educationsList: Array<CustomerEducation.AsObject>,
        experiencesList: Array<CustomerWorkExperience.AsObject>,
        servicefee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        servicefeecurrency?: google_protobuf_wrappers_pb.StringValue.AsObject,
        followupservicefee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        appointmentduration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        intervalbetweenappointment?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        status?: google_protobuf_wrappers_pb.StringValue.AsObject,
        registrationnumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
        isactive?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        createddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        latestslotstarttime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        latestslotendtime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        additionalinfo?: CustomerServiceProviderAdditionalInfoMessage.AsObject,
    }
}

export class CustomersServiceProviderProfileListMessage extends jspb.Message { 
    clearServiceprovidersList(): void;
    getServiceprovidersList(): Array<CustomersServiceProviderProfileMessage>;
    setServiceprovidersList(value: Array<CustomersServiceProviderProfileMessage>): CustomersServiceProviderProfileListMessage;
    addServiceproviders(value?: CustomersServiceProviderProfileMessage, index?: number): CustomersServiceProviderProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomersServiceProviderProfileListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomersServiceProviderProfileListMessage): CustomersServiceProviderProfileListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomersServiceProviderProfileListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomersServiceProviderProfileListMessage;
    static deserializeBinaryFromReader(message: CustomersServiceProviderProfileListMessage, reader: jspb.BinaryReader): CustomersServiceProviderProfileListMessage;
}

export namespace CustomersServiceProviderProfileListMessage {
    export type AsObject = {
        serviceprovidersList: Array<CustomersServiceProviderProfileMessage.AsObject>,
    }
}

export class CustomerCustomerProfileMessage extends jspb.Message { 

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerCustomerProfileMessage;

    hasFirstname(): boolean;
    clearFirstname(): void;
    getFirstname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFirstname(value?: google_protobuf_wrappers_pb.StringValue): CustomerCustomerProfileMessage;

    hasLastname(): boolean;
    clearLastname(): void;
    getLastname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setLastname(value?: google_protobuf_wrappers_pb.StringValue): CustomerCustomerProfileMessage;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGender(value?: google_protobuf_wrappers_pb.StringValue): CustomerCustomerProfileMessage;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAge(value?: google_protobuf_wrappers_pb.StringValue): CustomerCustomerProfileMessage;
    clearPhonenumbersList(): void;
    getPhonenumbersList(): Array<CustomerPhoneNumber>;
    setPhonenumbersList(value: Array<CustomerPhoneNumber>): CustomerCustomerProfileMessage;
    addPhonenumbers(value?: CustomerPhoneNumber, index?: number): CustomerPhoneNumber;
    clearAddressesList(): void;
    getAddressesList(): Array<CustomerAddress>;
    setAddressesList(value: Array<CustomerAddress>): CustomerCustomerProfileMessage;
    addAddresses(value?: CustomerAddress, index?: number): CustomerAddress;

    hasAppinfo(): boolean;
    clearAppinfo(): void;
    getAppinfo(): CustomerAppInfo | undefined;
    setAppinfo(value?: CustomerAppInfo): CustomerCustomerProfileMessage;
    clearLanguagesList(): void;
    getLanguagesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setLanguagesList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerCustomerProfileMessage;
    addLanguages(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasEmailaddress(): boolean;
    clearEmailaddress(): void;
    getEmailaddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEmailaddress(value?: google_protobuf_wrappers_pb.StringValue): CustomerCustomerProfileMessage;
    clearActiveappointmentidsList(): void;
    getActiveappointmentidsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setActiveappointmentidsList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerCustomerProfileMessage;
    addActiveappointmentids(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearCompletedappointmentidsList(): void;
    getCompletedappointmentidsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCompletedappointmentidsList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerCustomerProfileMessage;
    addCompletedappointmentids(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasProfilepicurl(): boolean;
    clearProfilepicurl(): void;
    getProfilepicurl(): google_protobuf_wrappers_pb.StringValue | undefined;
    setProfilepicurl(value?: google_protobuf_wrappers_pb.StringValue): CustomerCustomerProfileMessage;

    hasPrimaryserviceproviderid(): boolean;
    clearPrimaryserviceproviderid(): void;
    getPrimaryserviceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPrimaryserviceproviderid(value?: google_protobuf_wrappers_pb.StringValue): CustomerCustomerProfileMessage;
    clearAllergiesList(): void;
    getAllergiesList(): Array<CustomerAllergyMessage>;
    setAllergiesList(value: Array<CustomerAllergyMessage>): CustomerCustomerProfileMessage;
    addAllergies(value?: CustomerAllergyMessage, index?: number): CustomerAllergyMessage;
    clearMedicalhistoriesList(): void;
    getMedicalhistoriesList(): Array<CustomerMedicalHistoryMessage>;
    setMedicalhistoriesList(value: Array<CustomerMedicalHistoryMessage>): CustomerCustomerProfileMessage;
    addMedicalhistories(value?: CustomerMedicalHistoryMessage, index?: number): CustomerMedicalHistoryMessage;

    hasLastmodifeddate(): boolean;
    clearLastmodifeddate(): void;
    getLastmodifeddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLastmodifeddate(value?: google_protobuf_wrappers_pb.Int64Value): CustomerCustomerProfileMessage;

    hasCreateddate(): boolean;
    clearCreateddate(): void;
    getCreateddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddate(value?: google_protobuf_wrappers_pb.Int64Value): CustomerCustomerProfileMessage;

    hasCustomerdeviceinfo(): boolean;
    clearCustomerdeviceinfo(): void;
    getCustomerdeviceinfo(): DeviceInfoMessage | undefined;
    setCustomerdeviceinfo(value?: DeviceInfoMessage): CustomerCustomerProfileMessage;
    clearChildrenList(): void;
    getChildrenList(): Array<CustomerChildProfileMessage>;
    setChildrenList(value: Array<CustomerChildProfileMessage>): CustomerCustomerProfileMessage;
    addChildren(value?: CustomerChildProfileMessage, index?: number): CustomerChildProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerCustomerProfileMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerCustomerProfileMessage): CustomerCustomerProfileMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerCustomerProfileMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerCustomerProfileMessage;
    static deserializeBinaryFromReader(message: CustomerCustomerProfileMessage, reader: jspb.BinaryReader): CustomerCustomerProfileMessage;
}

export namespace CustomerCustomerProfileMessage {
    export type AsObject = {
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        firstname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        lastname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        gender?: google_protobuf_wrappers_pb.StringValue.AsObject,
        age?: google_protobuf_wrappers_pb.StringValue.AsObject,
        phonenumbersList: Array<CustomerPhoneNumber.AsObject>,
        addressesList: Array<CustomerAddress.AsObject>,
        appinfo?: CustomerAppInfo.AsObject,
        languagesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        emailaddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
        activeappointmentidsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        completedappointmentidsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        profilepicurl?: google_protobuf_wrappers_pb.StringValue.AsObject,
        primaryserviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        allergiesList: Array<CustomerAllergyMessage.AsObject>,
        medicalhistoriesList: Array<CustomerMedicalHistoryMessage.AsObject>,
        lastmodifeddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        createddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        customerdeviceinfo?: DeviceInfoMessage.AsObject,
        childrenList: Array<CustomerChildProfileMessage.AsObject>,
    }
}

export class CustomerCustomerProfileListMessage extends jspb.Message { 
    clearCustomersList(): void;
    getCustomersList(): Array<CustomerCustomerProfileMessage>;
    setCustomersList(value: Array<CustomerCustomerProfileMessage>): CustomerCustomerProfileListMessage;
    addCustomers(value?: CustomerCustomerProfileMessage, index?: number): CustomerCustomerProfileMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerCustomerProfileListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerCustomerProfileListMessage): CustomerCustomerProfileListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerCustomerProfileListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerCustomerProfileListMessage;
    static deserializeBinaryFromReader(message: CustomerCustomerProfileListMessage, reader: jspb.BinaryReader): CustomerCustomerProfileListMessage;
}

export namespace CustomerCustomerProfileListMessage {
    export type AsObject = {
        customersList: Array<CustomerCustomerProfileMessage.AsObject>,
    }
}

export class CustomerDiagnosisMessage extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): CustomerDiagnosisMessage;

    hasType(): boolean;
    clearType(): void;
    getType(): google_protobuf_wrappers_pb.StringValue | undefined;
    setType(value?: google_protobuf_wrappers_pb.StringValue): CustomerDiagnosisMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerDiagnosisMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerDiagnosisMessage): CustomerDiagnosisMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerDiagnosisMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerDiagnosisMessage;
    static deserializeBinaryFromReader(message: CustomerDiagnosisMessage, reader: jspb.BinaryReader): CustomerDiagnosisMessage;
}

export namespace CustomerDiagnosisMessage {
    export type AsObject = {
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        type?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerDosageMessage extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): CustomerDosageMessage;

    hasUnit(): boolean;
    clearUnit(): void;
    getUnit(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUnit(value?: google_protobuf_wrappers_pb.StringValue): CustomerDosageMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerDosageMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerDosageMessage): CustomerDosageMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerDosageMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerDosageMessage;
    static deserializeBinaryFromReader(message: CustomerDosageMessage, reader: jspb.BinaryReader): CustomerDosageMessage;
}

export namespace CustomerDosageMessage {
    export type AsObject = {
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        unit?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerDurationMessage extends jspb.Message { 

    hasDays(): boolean;
    clearDays(): void;
    getDays(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDays(value?: google_protobuf_wrappers_pb.StringValue): CustomerDurationMessage;

    hasUnit(): boolean;
    clearUnit(): void;
    getUnit(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUnit(value?: google_protobuf_wrappers_pb.StringValue): CustomerDurationMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerDurationMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerDurationMessage): CustomerDurationMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerDurationMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerDurationMessage;
    static deserializeBinaryFromReader(message: CustomerDurationMessage, reader: jspb.BinaryReader): CustomerDurationMessage;
}

export namespace CustomerDurationMessage {
    export type AsObject = {
        days?: google_protobuf_wrappers_pb.StringValue.AsObject,
        unit?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerEducation extends jspb.Message { 

    hasCourse(): boolean;
    clearCourse(): void;
    getCourse(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCourse(value?: google_protobuf_wrappers_pb.StringValue): CustomerEducation;

    hasYear(): boolean;
    clearYear(): void;
    getYear(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setYear(value?: google_protobuf_wrappers_pb.Int32Value): CustomerEducation;

    hasCountry(): boolean;
    clearCountry(): void;
    getCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCountry(value?: google_protobuf_wrappers_pb.StringValue): CustomerEducation;

    hasCollege(): boolean;
    clearCollege(): void;
    getCollege(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCollege(value?: google_protobuf_wrappers_pb.StringValue): CustomerEducation;

    hasUniversity(): boolean;
    clearUniversity(): void;
    getUniversity(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUniversity(value?: google_protobuf_wrappers_pb.StringValue): CustomerEducation;

    hasEducationid(): boolean;
    clearEducationid(): void;
    getEducationid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEducationid(value?: google_protobuf_wrappers_pb.StringValue): CustomerEducation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerEducation.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerEducation): CustomerEducation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerEducation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerEducation;
    static deserializeBinaryFromReader(message: CustomerEducation, reader: jspb.BinaryReader): CustomerEducation;
}

export namespace CustomerEducation {
    export type AsObject = {
        course?: google_protobuf_wrappers_pb.StringValue.AsObject,
        year?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        country?: google_protobuf_wrappers_pb.StringValue.AsObject,
        college?: google_protobuf_wrappers_pb.StringValue.AsObject,
        university?: google_protobuf_wrappers_pb.StringValue.AsObject,
        educationid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerWorkExperience extends jspb.Message { 

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOrganization(value?: google_protobuf_wrappers_pb.StringValue): CustomerWorkExperience;

    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setStartdate(value?: google_protobuf_wrappers_pb.Int64Value): CustomerWorkExperience;

    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEnddate(value?: google_protobuf_wrappers_pb.Int64Value): CustomerWorkExperience;

    hasWorkexperienceid(): boolean;
    clearWorkexperienceid(): void;
    getWorkexperienceid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setWorkexperienceid(value?: google_protobuf_wrappers_pb.StringValue): CustomerWorkExperience;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerWorkExperience.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerWorkExperience): CustomerWorkExperience.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerWorkExperience, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerWorkExperience;
    static deserializeBinaryFromReader(message: CustomerWorkExperience, reader: jspb.BinaryReader): CustomerWorkExperience;
}

export namespace CustomerWorkExperience {
    export type AsObject = {
        organization?: google_protobuf_wrappers_pb.StringValue.AsObject,
        startdate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        enddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        workexperienceid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerFileInfoMessage extends jspb.Message { 

    hasFilename(): boolean;
    clearFilename(): void;
    getFilename(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFilename(value?: google_protobuf_wrappers_pb.StringValue): CustomerFileInfoMessage;

    hasFiletype(): boolean;
    clearFiletype(): void;
    getFiletype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFiletype(value?: google_protobuf_wrappers_pb.StringValue): CustomerFileInfoMessage;

    hasMediaimage(): boolean;
    clearMediaimage(): void;
    getMediaimage(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setMediaimage(value?: google_protobuf_wrappers_pb.BytesValue): CustomerFileInfoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerFileInfoMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerFileInfoMessage): CustomerFileInfoMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerFileInfoMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerFileInfoMessage;
    static deserializeBinaryFromReader(message: CustomerFileInfoMessage, reader: jspb.BinaryReader): CustomerFileInfoMessage;
}

export namespace CustomerFileInfoMessage {
    export type AsObject = {
        filename?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filetype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        mediaimage?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    }
}

export class CustomerFollowUpMessage extends jspb.Message { 

    hasCreateddatetime(): boolean;
    clearCreateddatetime(): void;
    getCreateddatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddatetime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerFollowUpMessage;

    hasNoofdays(): boolean;
    clearNoofdays(): void;
    getNoofdays(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setNoofdays(value?: google_protobuf_wrappers_pb.Int32Value): CustomerFollowUpMessage;

    hasFollowupfee(): boolean;
    clearFollowupfee(): void;
    getFollowupfee(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFollowupfee(value?: google_protobuf_wrappers_pb.DoubleValue): CustomerFollowUpMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerFollowUpMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerFollowUpMessage): CustomerFollowUpMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerFollowUpMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerFollowUpMessage;
    static deserializeBinaryFromReader(message: CustomerFollowUpMessage, reader: jspb.BinaryReader): CustomerFollowUpMessage;
}

export namespace CustomerFollowUpMessage {
    export type AsObject = {
        createddatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        noofdays?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        followupfee?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class CustomerFollowUpRequestMessage extends jspb.Message { 

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerFollowUpRequestMessage;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): CustomerFollowUpRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerFollowUpRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerFollowUpRequestMessage): CustomerFollowUpRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerFollowUpRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerFollowUpRequestMessage;
    static deserializeBinaryFromReader(message: CustomerFollowUpRequestMessage, reader: jspb.BinaryReader): CustomerFollowUpRequestMessage;
}

export namespace CustomerFollowUpRequestMessage {
    export type AsObject = {
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerGeneratedSlotMessage extends jspb.Message { 

    hasStartdatetime(): boolean;
    clearStartdatetime(): void;
    getStartdatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setStartdatetime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerGeneratedSlotMessage;

    hasEndstartdatetime(): boolean;
    clearEndstartdatetime(): void;
    getEndstartdatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEndstartdatetime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerGeneratedSlotMessage;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setDuration(value?: google_protobuf_wrappers_pb.Int32Value): CustomerGeneratedSlotMessage;

    hasPaymenttype(): boolean;
    clearPaymenttype(): void;
    getPaymenttype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymenttype(value?: google_protobuf_wrappers_pb.StringValue): CustomerGeneratedSlotMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerGeneratedSlotMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerGeneratedSlotMessage): CustomerGeneratedSlotMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerGeneratedSlotMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerGeneratedSlotMessage;
    static deserializeBinaryFromReader(message: CustomerGeneratedSlotMessage, reader: jspb.BinaryReader): CustomerGeneratedSlotMessage;
}

export namespace CustomerGeneratedSlotMessage {
    export type AsObject = {
        startdatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        endstartdatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        duration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        paymenttype?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerGeneratedSlotListMessage extends jspb.Message { 
    clearSlotsList(): void;
    getSlotsList(): Array<CustomerGeneratedSlotMessage>;
    setSlotsList(value: Array<CustomerGeneratedSlotMessage>): CustomerGeneratedSlotListMessage;
    addSlots(value?: CustomerGeneratedSlotMessage, index?: number): CustomerGeneratedSlotMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerGeneratedSlotListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerGeneratedSlotListMessage): CustomerGeneratedSlotListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerGeneratedSlotListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerGeneratedSlotListMessage;
    static deserializeBinaryFromReader(message: CustomerGeneratedSlotListMessage, reader: jspb.BinaryReader): CustomerGeneratedSlotListMessage;
}

export namespace CustomerGeneratedSlotListMessage {
    export type AsObject = {
        slotsList: Array<CustomerGeneratedSlotMessage.AsObject>,
    }
}

export class CustomerMedicalHistoryMessage extends jspb.Message { 

    hasMedicalhistoryid(): boolean;
    clearMedicalhistoryid(): void;
    getMedicalhistoryid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicalhistoryid(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicalHistoryMessage;

    hasMedicalhistoryname(): boolean;
    clearMedicalhistoryname(): void;
    getMedicalhistoryname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicalhistoryname(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicalHistoryMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicalHistoryMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicalHistoryMessage;

    hasPastmedicalhistory(): boolean;
    clearPastmedicalhistory(): void;
    getPastmedicalhistory(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPastmedicalhistory(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicalHistoryMessage;

    hasMedicationhistory(): boolean;
    clearMedicationhistory(): void;
    getMedicationhistory(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicationhistory(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicalHistoryMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerMedicalHistoryMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerMedicalHistoryMessage): CustomerMedicalHistoryMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerMedicalHistoryMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerMedicalHistoryMessage;
    static deserializeBinaryFromReader(message: CustomerMedicalHistoryMessage, reader: jspb.BinaryReader): CustomerMedicalHistoryMessage;
}

export namespace CustomerMedicalHistoryMessage {
    export type AsObject = {
        medicalhistoryid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        medicalhistoryname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        pastmedicalhistory?: google_protobuf_wrappers_pb.StringValue.AsObject,
        medicationhistory?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerMedicineMessage extends jspb.Message { 

    hasMedicinename(): boolean;
    clearMedicinename(): void;
    getMedicinename(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicinename(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicineMessage;

    hasDosage(): boolean;
    clearDosage(): void;
    getDosage(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDosage(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicineMessage;

    hasRouteofadministration(): boolean;
    clearRouteofadministration(): void;
    getRouteofadministration(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRouteofadministration(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicineMessage;

    hasIntake(): boolean;
    clearIntake(): void;
    getIntake(): google_protobuf_wrappers_pb.StringValue | undefined;
    setIntake(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicineMessage;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setDuration(value?: google_protobuf_wrappers_pb.Int32Value): CustomerMedicineMessage;

    hasTimings(): boolean;
    clearTimings(): void;
    getTimings(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTimings(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicineMessage;

    hasSpecialinstructions(): boolean;
    clearSpecialinstructions(): void;
    getSpecialinstructions(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSpecialinstructions(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicineMessage;

    hasMedicineid(): boolean;
    clearMedicineid(): void;
    getMedicineid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMedicineid(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicineMessage;

    hasNotes(): boolean;
    clearNotes(): void;
    getNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
    setNotes(value?: google_protobuf_wrappers_pb.StringValue): CustomerMedicineMessage;

    hasDurationobj(): boolean;
    clearDurationobj(): void;
    getDurationobj(): CustomerDurationMessage | undefined;
    setDurationobj(value?: CustomerDurationMessage): CustomerMedicineMessage;

    hasDosageobj(): boolean;
    clearDosageobj(): void;
    getDosageobj(): CustomerDosageMessage | undefined;
    setDosageobj(value?: CustomerDosageMessage): CustomerMedicineMessage;

    hasIntakedosageobj(): boolean;
    clearIntakedosageobj(): void;
    getIntakedosageobj(): CustomerIntakeDosageMessage | undefined;
    setIntakedosageobj(value?: CustomerIntakeDosageMessage): CustomerMedicineMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerMedicineMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerMedicineMessage): CustomerMedicineMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerMedicineMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerMedicineMessage;
    static deserializeBinaryFromReader(message: CustomerMedicineMessage, reader: jspb.BinaryReader): CustomerMedicineMessage;
}

export namespace CustomerMedicineMessage {
    export type AsObject = {
        medicinename?: google_protobuf_wrappers_pb.StringValue.AsObject,
        dosage?: google_protobuf_wrappers_pb.StringValue.AsObject,
        routeofadministration?: google_protobuf_wrappers_pb.StringValue.AsObject,
        intake?: google_protobuf_wrappers_pb.StringValue.AsObject,
        duration?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        timings?: google_protobuf_wrappers_pb.StringValue.AsObject,
        specialinstructions?: google_protobuf_wrappers_pb.StringValue.AsObject,
        medicineid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        notes?: google_protobuf_wrappers_pb.StringValue.AsObject,
        durationobj?: CustomerDurationMessage.AsObject,
        dosageobj?: CustomerDosageMessage.AsObject,
        intakedosageobj?: CustomerIntakeDosageMessage.AsObject,
    }
}

export class CustomerPaymentInfoMessage extends jspb.Message { 

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): CustomerPaymentInfoMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): CustomerPaymentInfoMessage;

    hasPaidamount(): boolean;
    clearPaidamount(): void;
    getPaidamount(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setPaidamount(value?: google_protobuf_wrappers_pb.DoubleValue): CustomerPaymentInfoMessage;

    hasPaiddate(): boolean;
    clearPaiddate(): void;
    getPaiddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPaiddate(value?: google_protobuf_wrappers_pb.Int64Value): CustomerPaymentInfoMessage;

    hasPaymentgateway(): boolean;
    clearPaymentgateway(): void;
    getPaymentgateway(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymentgateway(value?: google_protobuf_wrappers_pb.StringValue): CustomerPaymentInfoMessage;

    hasPaymenttransactionid(): boolean;
    clearPaymenttransactionid(): void;
    getPaymenttransactionid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymenttransactionid(value?: google_protobuf_wrappers_pb.StringValue): CustomerPaymentInfoMessage;

    hasPaymenttransactionnotes(): boolean;
    clearPaymenttransactionnotes(): void;
    getPaymenttransactionnotes(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymenttransactionnotes(value?: google_protobuf_wrappers_pb.StringValue): CustomerPaymentInfoMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerPaymentInfoMessage;

    hasServiceprovidername(): boolean;
    clearServiceprovidername(): void;
    getServiceprovidername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceprovidername(value?: google_protobuf_wrappers_pb.StringValue): CustomerPaymentInfoMessage;

    hasCustomername(): boolean;
    clearCustomername(): void;
    getCustomername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomername(value?: google_protobuf_wrappers_pb.StringValue): CustomerPaymentInfoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerPaymentInfoMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerPaymentInfoMessage): CustomerPaymentInfoMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerPaymentInfoMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerPaymentInfoMessage;
    static deserializeBinaryFromReader(message: CustomerPaymentInfoMessage, reader: jspb.BinaryReader): CustomerPaymentInfoMessage;
}

export namespace CustomerPaymentInfoMessage {
    export type AsObject = {
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paidamount?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        paiddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        paymentgateway?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymenttransactionid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymenttransactionnotes?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceprovidername?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customername?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerPaymentListMessage extends jspb.Message { 
    clearPaymentsList(): void;
    getPaymentsList(): Array<CustomerPaymentInfoMessage>;
    setPaymentsList(value: Array<CustomerPaymentInfoMessage>): CustomerPaymentListMessage;
    addPayments(value?: CustomerPaymentInfoMessage, index?: number): CustomerPaymentInfoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerPaymentListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerPaymentListMessage): CustomerPaymentListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerPaymentListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerPaymentListMessage;
    static deserializeBinaryFromReader(message: CustomerPaymentListMessage, reader: jspb.BinaryReader): CustomerPaymentListMessage;
}

export namespace CustomerPaymentListMessage {
    export type AsObject = {
        paymentsList: Array<CustomerPaymentInfoMessage.AsObject>,
    }
}

export class CustomerPhoneNumber extends jspb.Message { 

    hasCountrycode(): boolean;
    clearCountrycode(): void;
    getCountrycode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCountrycode(value?: google_protobuf_wrappers_pb.StringValue): CustomerPhoneNumber;

    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setNumber(value?: google_protobuf_wrappers_pb.StringValue): CustomerPhoneNumber;

    hasType(): boolean;
    clearType(): void;
    getType(): google_protobuf_wrappers_pb.StringValue | undefined;
    setType(value?: google_protobuf_wrappers_pb.StringValue): CustomerPhoneNumber;

    hasPhonenumberid(): boolean;
    clearPhonenumberid(): void;
    getPhonenumberid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPhonenumberid(value?: google_protobuf_wrappers_pb.StringValue): CustomerPhoneNumber;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerPhoneNumber.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerPhoneNumber): CustomerPhoneNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerPhoneNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerPhoneNumber;
    static deserializeBinaryFromReader(message: CustomerPhoneNumber, reader: jspb.BinaryReader): CustomerPhoneNumber;
}

export namespace CustomerPhoneNumber {
    export type AsObject = {
        countrycode?: google_protobuf_wrappers_pb.StringValue.AsObject,
        number?: google_protobuf_wrappers_pb.StringValue.AsObject,
        type?: google_protobuf_wrappers_pb.StringValue.AsObject,
        phonenumberid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerPrescriptionMessage extends jspb.Message { 

    hasPrescriptionid(): boolean;
    clearPrescriptionid(): void;
    getPrescriptionid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPrescriptionid(value?: google_protobuf_wrappers_pb.StringValue): CustomerPrescriptionMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): CustomerPrescriptionMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerPrescriptionMessage;

    hasCreateddatetime(): boolean;
    clearCreateddatetime(): void;
    getCreateddatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddatetime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerPrescriptionMessage;
    clearMedicinelistList(): void;
    getMedicinelistList(): Array<CustomerMedicineMessage>;
    setMedicinelistList(value: Array<CustomerMedicineMessage>): CustomerPrescriptionMessage;
    addMedicinelist(value?: CustomerMedicineMessage, index?: number): CustomerMedicineMessage;

    hasFileinfo(): boolean;
    clearFileinfo(): void;
    getFileinfo(): CustomerFileInfoMessage | undefined;
    setFileinfo(value?: CustomerFileInfoMessage): CustomerPrescriptionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerPrescriptionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerPrescriptionMessage): CustomerPrescriptionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerPrescriptionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerPrescriptionMessage;
    static deserializeBinaryFromReader(message: CustomerPrescriptionMessage, reader: jspb.BinaryReader): CustomerPrescriptionMessage;
}

export namespace CustomerPrescriptionMessage {
    export type AsObject = {
        prescriptionid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        createddatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        medicinelistList: Array<CustomerMedicineMessage.AsObject>,
        fileinfo?: CustomerFileInfoMessage.AsObject,
    }
}

export class CustomerReportMessage extends jspb.Message { 

    hasReportid(): boolean;
    clearReportid(): void;
    getReportid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReportid(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportMessage;

    hasFilename(): boolean;
    clearFilename(): void;
    getFilename(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFilename(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportMessage;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportMessage;

    hasFiletype(): boolean;
    clearFiletype(): void;
    getFiletype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFiletype(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerReportMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerReportMessage): CustomerReportMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerReportMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerReportMessage;
    static deserializeBinaryFromReader(message: CustomerReportMessage, reader: jspb.BinaryReader): CustomerReportMessage;
}

export namespace CustomerReportMessage {
    export type AsObject = {
        reportid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filename?: google_protobuf_wrappers_pb.StringValue.AsObject,
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filetype?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerReportListMessage extends jspb.Message { 
    clearReportsList(): void;
    getReportsList(): Array<CustomerReportMessage>;
    setReportsList(value: Array<CustomerReportMessage>): CustomerReportListMessage;
    addReports(value?: CustomerReportMessage, index?: number): CustomerReportMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerReportListMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerReportListMessage): CustomerReportListMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerReportListMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerReportListMessage;
    static deserializeBinaryFromReader(message: CustomerReportListMessage, reader: jspb.BinaryReader): CustomerReportListMessage;
}

export namespace CustomerReportListMessage {
    export type AsObject = {
        reportsList: Array<CustomerReportMessage.AsObject>,
    }
}

export class CustomerReportUploadMessage extends jspb.Message { 

    hasReportid(): boolean;
    clearReportid(): void;
    getReportid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReportid(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportUploadMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportUploadMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportUploadMessage;

    hasFilename(): boolean;
    clearFilename(): void;
    getFilename(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFilename(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportUploadMessage;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportUploadMessage;

    hasFiletype(): boolean;
    clearFiletype(): void;
    getFiletype(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFiletype(value?: google_protobuf_wrappers_pb.StringValue): CustomerReportUploadMessage;

    hasMediafile(): boolean;
    clearMediafile(): void;
    getMediafile(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setMediafile(value?: google_protobuf_wrappers_pb.BytesValue): CustomerReportUploadMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerReportUploadMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerReportUploadMessage): CustomerReportUploadMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerReportUploadMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerReportUploadMessage;
    static deserializeBinaryFromReader(message: CustomerReportUploadMessage, reader: jspb.BinaryReader): CustomerReportUploadMessage;
}

export namespace CustomerReportUploadMessage {
    export type AsObject = {
        reportid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filename?: google_protobuf_wrappers_pb.StringValue.AsObject,
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        filetype?: google_protobuf_wrappers_pb.StringValue.AsObject,
        mediafile?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    }
}

export class CustomerServiceRequestMessage extends jspb.Message { 

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestMessage;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): google_protobuf_wrappers_pb.StringValue | undefined;
    setReason(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestMessage;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestMessage;

    hasExamination(): boolean;
    clearExamination(): void;
    getExamination(): google_protobuf_wrappers_pb.StringValue | undefined;
    setExamination(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestMessage;

    hasDiagnosis(): boolean;
    clearDiagnosis(): void;
    getDiagnosis(): CustomerDiagnosisMessage | undefined;
    setDiagnosis(value?: CustomerDiagnosisMessage): CustomerServiceRequestMessage;
    clearInvestigationsList(): void;
    getInvestigationsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setInvestigationsList(value: Array<google_protobuf_wrappers_pb.StringValue>): CustomerServiceRequestMessage;
    addInvestigations(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasAdvice(): boolean;
    clearAdvice(): void;
    getAdvice(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAdvice(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestMessage;

    hasCreateddatetime(): boolean;
    clearCreateddatetime(): void;
    getCreateddatetime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCreateddatetime(value?: google_protobuf_wrappers_pb.Int64Value): CustomerServiceRequestMessage;

    hasLastmodifeddate(): boolean;
    clearLastmodifeddate(): void;
    getLastmodifeddate(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLastmodifeddate(value?: google_protobuf_wrappers_pb.Int64Value): CustomerServiceRequestMessage;

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestMessage;

    hasAllergy(): boolean;
    clearAllergy(): void;
    getAllergy(): CustomerAllergyMessage | undefined;
    setAllergy(value?: CustomerAllergyMessage): CustomerServiceRequestMessage;

    hasMedicalhistory(): boolean;
    clearMedicalhistory(): void;
    getMedicalhistory(): CustomerMedicalHistoryMessage | undefined;
    setMedicalhistory(value?: CustomerMedicalHistoryMessage): CustomerServiceRequestMessage;

    hasChildid(): boolean;
    clearChildid(): void;
    getChildid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setChildid(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerServiceRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerServiceRequestMessage): CustomerServiceRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerServiceRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerServiceRequestMessage;
    static deserializeBinaryFromReader(message: CustomerServiceRequestMessage, reader: jspb.BinaryReader): CustomerServiceRequestMessage;
}

export namespace CustomerServiceRequestMessage {
    export type AsObject = {
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        reason?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        examination?: google_protobuf_wrappers_pb.StringValue.AsObject,
        diagnosis?: CustomerDiagnosisMessage.AsObject,
        investigationsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        advice?: google_protobuf_wrappers_pb.StringValue.AsObject,
        createddatetime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        lastmodifeddate?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        allergy?: CustomerAllergyMessage.AsObject,
        medicalhistory?: CustomerMedicalHistoryMessage.AsObject,
        childid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerServiceRequestRequestMessage extends jspb.Message { 

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestRequestMessage;

    hasAppointmentid(): boolean;
    clearAppointmentid(): void;
    getAppointmentid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppointmentid(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestRequestMessage;

    hasServicerequestid(): boolean;
    clearServicerequestid(): void;
    getServicerequestid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServicerequestid(value?: google_protobuf_wrappers_pb.StringValue): CustomerServiceRequestRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerServiceRequestRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerServiceRequestRequestMessage): CustomerServiceRequestRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerServiceRequestRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerServiceRequestRequestMessage;
    static deserializeBinaryFromReader(message: CustomerServiceRequestRequestMessage, reader: jspb.BinaryReader): CustomerServiceRequestRequestMessage;
}

export namespace CustomerServiceRequestRequestMessage {
    export type AsObject = {
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        appointmentid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        servicerequestid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerTrustScoreRequestMessage extends jspb.Message { 

    hasCustomerid(): boolean;
    clearCustomerid(): void;
    getCustomerid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerid(value?: google_protobuf_wrappers_pb.StringValue): CustomerTrustScoreRequestMessage;

    hasServiceproviderid(): boolean;
    clearServiceproviderid(): void;
    getServiceproviderid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setServiceproviderid(value?: google_protobuf_wrappers_pb.StringValue): CustomerTrustScoreRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerTrustScoreRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerTrustScoreRequestMessage): CustomerTrustScoreRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerTrustScoreRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerTrustScoreRequestMessage;
    static deserializeBinaryFromReader(message: CustomerTrustScoreRequestMessage, reader: jspb.BinaryReader): CustomerTrustScoreRequestMessage;
}

export namespace CustomerTrustScoreRequestMessage {
    export type AsObject = {
        customerid?: google_protobuf_wrappers_pb.StringValue.AsObject,
        serviceproviderid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CustomerIntakeDosageMessage extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): CustomerIntakeDosageMessage;

    hasUnit(): boolean;
    clearUnit(): void;
    getUnit(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUnit(value?: google_protobuf_wrappers_pb.StringValue): CustomerIntakeDosageMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerIntakeDosageMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerIntakeDosageMessage): CustomerIntakeDosageMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerIntakeDosageMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerIntakeDosageMessage;
    static deserializeBinaryFromReader(message: CustomerIntakeDosageMessage, reader: jspb.BinaryReader): CustomerIntakeDosageMessage;
}

export namespace CustomerIntakeDosageMessage {
    export type AsObject = {
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        unit?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class StringArrayMessage extends jspb.Message { 
    clearMessagesList(): void;
    getMessagesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setMessagesList(value: Array<google_protobuf_wrappers_pb.StringValue>): StringArrayMessage;
    addMessages(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringArrayMessage.AsObject;
    static toObject(includeInstance: boolean, msg: StringArrayMessage): StringArrayMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringArrayMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringArrayMessage;
    static deserializeBinaryFromReader(message: StringArrayMessage, reader: jspb.BinaryReader): StringArrayMessage;
}

export namespace StringArrayMessage {
    export type AsObject = {
        messagesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
}
