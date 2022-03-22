import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export interface ImageUploadProps {
    handlePhotoCallBack: (file:any) => ThunkAction<void, RootState, null, Action>
    uploadButtonColor:string
}

export interface AllImageDisplayProps {
    showUploadButton: boolean
    showCancelImageButton: boolean
}