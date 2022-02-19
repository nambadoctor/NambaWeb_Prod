import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";

export interface ImageUploadProps {
    handlePhotoCallBack: (file:any) => ThunkAction<void, RootState, null, Action>
    uploadButtonColor:string
}

export interface MobileImageUploadProps {
    handlePhotoCallBack: (file:any) => ThunkAction<void, RootState, null, Action>
    uploadButtonColor:string
    appointment:IAppointmentData
}

export interface AllImageDisplayProps {
    showUploadButton: boolean
    showCancelImageButton: boolean
}