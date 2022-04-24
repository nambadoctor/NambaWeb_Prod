import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export default function useUploadOrCaptureImageHook(uploadCallBack: (data:any) => ThunkAction<void, RootState, null, Action>) {
    const dispatch = useDispatch();

    const [showCameraToggle, setShowCameraToggle] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(uploadCallBack(event.target.files![0]))
    }

    const handleTakePhoto = (dataUri: any) => {
        dispatch(uploadCallBack(dataUri))
        setShowCameraToggle(false)
    }

  return { showCameraToggle, setShowCameraToggle, handleChange, handleTakePhoto };
}
