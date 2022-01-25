import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageViewer from "react-simple-image-viewer";
import { RootState } from "../../store";
import CancelIcon from "@mui/icons-material/Cancel";
import { DeletePrescription } from "../../ServiceActions/PrescriptionActions";
import IPrescriptionIncomingData from "../../Types/IncomingDataModels/PrescriptionIncoming";
import { Row } from "react-bootstrap";
import { Divider } from "@mui/material";

export default function PrescriptionImageView() {
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([""]);
  let currentCustomerPrescriptionImages = useSelector(
    (state: RootState) => state.ConsultationState.currentCustomerPrescriptions
  );

  let allCustomerPrescriptionImages = useSelector(
    (state: RootState) => state.ConsultationState.allCustomerPrescriptions
  );

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    getImageURLsFromPrescriptions();
  }, [currentCustomerPrescriptionImages]);

  function getImageURLsFromPrescriptions() {
    var stringList: string[] = [];

    if (currentCustomerPrescriptionImages) {
      currentCustomerPrescriptionImages.forEach((element) => {
        stringList.push(element.sasUrl);
      });
    }

    setImages(stringList);
  }

  function deletePrescription(prescription: IPrescriptionIncomingData) {
    if (window.confirm("Are you sure you want to delete this prescription?")) {
      dispatch(DeletePrescription(prescription));
    }
  }

  function imageViewDisplay() {
    return (
      <div style={{ overflow: "auto" }}>
        {currentCustomerPrescriptionImages &&
          currentCustomerPrescriptionImages.map((src, index) => (
            <div
              style={{
                display: "inline-block",
                position: "relative",
                width: 100,
                marginTop: 10,
                marginRight: 20
              }}
            >
              <img
                src={src.sasUrl}
                onClick={() => openImageViewer(index)}
                key={index}
                style={{ width: 100, height: 100 }}
              />

              <div
                onClick={() => dispatch(deletePrescription(src))}
                style={{ position: "absolute", top: -10, right: -15 }}
              >
                <CancelIcon />
              </div>
            </div>
          ))}

        {(allCustomerPrescriptionImages && allCustomerPrescriptionImages.length > 0) &&
          <div>
            <Row><Divider style={{ marginTop: 20, marginBottom: 20 }}></Divider></Row>
            <h5>History Of Prescriptions</h5>

            {allCustomerPrescriptionImages.map((src, index) => (
              <div
                style={{
                  display: "inline-block",
                  position: "relative",
                  width: 100,
                  marginTop: 10,
                  marginRight: 20
                }}
              >
                <img
                  src={src.sasUrl}
                  onClick={() => openImageViewer(index)}
                  key={index}
                  style={{ width: 100, height: 100 }}
                />
              </div>
            ))}
          </div>}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    );
  }

  function noPrescriptionsDisplay() {
    return (
      <div
        style={{
          margin: 20,
          marginTop: 50,
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        No prescriptions yet. Upload image or Take Photo.
      </div>
    );
  }

  return (
    <div>
      {(currentCustomerPrescriptionImages && currentCustomerPrescriptionImages.length > 0) || allCustomerPrescriptionImages && allCustomerPrescriptionImages.length > 0
        ? imageViewDisplay()
        : noPrescriptionsDisplay()}
    </div>
  );
}
