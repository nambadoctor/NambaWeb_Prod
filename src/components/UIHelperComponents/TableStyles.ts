import { makeStyles } from "@mui/styles";


export const usePatientTableStyles = makeStyles(() => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
      borderRadius: 15,
      margin: "10px 10px",
      maxWidth: 950,
    },
    tableHeaderCell: {
      fontWeight: "bold",
      backgroundColor: "#e5f0fe",
      color: "#000000",
    },
    avatar: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
    },
    name: {
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    status: {
      fontWeight: "bold",
      fontSize: "0.75rem",
      color: "white",
      borderRadius: 6,
      padding: "5px 12px",
      display: "inline-block",
    },
    tableRow: {
      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: "purple",
        "& > .MuiTableCell-root": {
          color: "yellow"
        }
      }
    }
  }));