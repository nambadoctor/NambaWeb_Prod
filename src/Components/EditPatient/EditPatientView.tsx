import { CircularProgress, TextField } from "@mui/material";
import { Button, ButtonGroup, Col, Row, ToggleButton } from "react-bootstrap";
import usePatientInputHook from "../../CustomHooks/usePatientInputHook";
import CustomButton from "../CustomButton";

export default function EditPatientView() {
  const { addPatientState, genderOptions, gender, formik, setGender } =
    usePatientInputHook();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          label="Phone Number"
          placeholder="Phone Number"
          margin="normal"
          size="small"
          {...formik.getFieldProps("phonenumber")}
          inputProps={{ maxLength: 10 }}
          helperText={formik.touched.phonenumber && formik.errors.phonenumber}
          error={formik.touched.phonenumber && !!formik.errors.phonenumber}
        />

        {addPatientState.isCheckingNumber ? (
          <CircularProgress style={{ width: 30, height: 30, marginLeft: 5 }} />
        ) : (
          <div />
        )}

        {/* Indicator to display once customer exists check is complete
                {addPatientState.isCustomerExists ? <CheckCircleIcon style={{width: 30, height: 30, marginLeft: 5, color: '#149c4a'}}/> : <div />} */}
      </div>

      {addPatientState.isCustomerExists ? (
        <div style={{ fontSize: 12, color: "#1672f9", fontWeight: "bold" }}>
          this patient exists
        </div>
      ) : (
        <div />
      )}

      {addPatientState.isInvalidNumber ? (
        <div style={{ fontSize: 12, color: "#ff6c6c", fontWeight: "bold" }}>
          sorry, you cannot add this number
        </div>
      ) : (
        <div />
      )}

      {/* TODO: SHOW LOADER WHEN CHECKING FOR EXISTING PATIENT */}

      <TextField
        fullWidth
        label="Name"
        placeholder="Name"
        margin="normal"
        size="small"
        {...formik.getFieldProps("name")}
        helperText={formik.touched.name && formik.errors.name}
        error={formik.touched.name && !!formik.errors.name}
      />

      <Row className="align-items-center">
        <Col>
          <TextField
            fullWidth
            label="Age"
            placeholder="Age"
            margin="normal"
            size="small"
            {...formik.getFieldProps("age")}
            helperText={formik.touched.age && formik.errors.age}
            error={formik.touched.age && !!formik.errors.age}
          />
        </Col>
        <Col>
          <ButtonGroup style={{ marginTop: 3 }}>
            {genderOptions.map((genderOption, idx) => (
              <ToggleButton
                key={idx}
                id={`gender-${idx}`}
                type="radio"
                variant="outline-primary"
                name="gender"
                value={gender}
                checked={gender === genderOption}
                onChange={(e) => setGender(genderOption)}
              >
                {genderOption}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <CustomButton
            type="submit"
            onClick={formik.handleSubmit}
            isPurple={false}
            title="Save"
            small={false}
          />
        </div>
      </Row>
    </div>
  );
}
