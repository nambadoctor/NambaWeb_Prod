import { useState, useCallback, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
import { DeleteReport } from "../../ServiceActions/ReportActions";
import { RootState } from "../../store";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import IReportIncomingData from "../../Types/IncomingDataModels/ReportIncoming";

export default function ReportImageView() {
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([""]);
  let displayImageObjs = useSelector(
    (state: RootState) => state.ConsultationState.currentCustomerReports
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
    getImageURLsFromReports();
  }, [displayImageObjs]);

  function getImageURLsFromReports() {
    var stringList: string[] = [];

    if (displayImageObjs) {
      displayImageObjs.forEach((element) => {
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
          {displayImageObjs &&
            displayImageObjs.map((src, index) => (
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
                  style={{width: 100, height: 100}}
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
      {displayImageObjs && displayImageObjs.length > 0
        ? imageViewDisplay()
        : noReportsDisplay()}
    </div>
  );
}
