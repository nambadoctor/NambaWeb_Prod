import { useState, useCallback, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
import { DeleteReport } from "../../ServiceActions/ReportActions";
import { RootState } from "../../store";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import IReportIncomingData from "../../Types/IncomingDataModels/ReportIncoming";
import { Divider } from "@mui/material";
import { Row } from "react-bootstrap";
import useImagesHook from "../../CustomHooks/useImagesViewHook";

export default function ReportImageView() {
  const dispatch = useDispatch();

  const {
    currentImage, isViewerOpen, images, setImages, openImageViewer, closeImageViewer
  } = useImagesHook();
  
  let currentCustomerReportsImages = useSelector(
    (state: RootState) => state.ConsultationState.currentCustomerReports
  );

  let allCustomerReportsImages = useSelector((state: RootState) => state.ConsultationState.allCustomerReports)

  useEffect(() => {
    getImageURLsFromReports();
  }, [currentCustomerReportsImages]);

  function getImageURLsFromReports() {
    var stringList: string[] = [];

    if (currentCustomerReportsImages) {
      currentCustomerReportsImages.forEach((element) => {
        stringList.push(element.sasUrl);
      });
    }

    setImages(stringList);
  }

  function deleteReport(report: IReportIncomingData) {
    if (window.confirm("Are you sure you want to delete this prescription?")) {
      dispatch(DeleteReport(report));
    }
  }

  function imageViewDisplay() {
    return (
      <div style={{ overflow: "auto" }}>
        <div>
          {currentCustomerReportsImages &&
            currentCustomerReportsImages.map((src, index) => (
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
                  width="200"
                  height="150"
                  style={{ width: 100, height: 100 }}
                  key={index}
                />

                <div
                  onClick={() => dispatch(deleteReport(src))}
                  style={{ position: "absolute", top: -10, right: -15 }}
                >
                  <CancelIcon />
                </div>
              </div>
            ))}


          {(allCustomerReportsImages && allCustomerReportsImages.length > 0) &&
            <div>
              <Row><Divider style={{ marginTop: 20, marginBottom: 20 }}></Divider></Row>
              <h5>History Of Reports</h5>

              {allCustomerReportsImages.map((src, index) => (
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
      </div>
    );
  }

  function noReportsDisplay() {
    return (
      <div
        style={{
          margin: 20,
          marginTop: 50,
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        No reports yet. Upload image or Take Photo.
      </div>
    );
  }

  return (
    <div>
      {(currentCustomerReportsImages && currentCustomerReportsImages.length > 0) || allCustomerReportsImages && allCustomerReportsImages.length > 0
        ? imageViewDisplay()
        : noReportsDisplay()}
    </div>
  );
}
