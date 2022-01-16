import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SignInWithPhoneNumberHelper } from "../../Actions/Common/LoginActions";
import "../../Styles/login.css";
import InputAdornment from '@mui/material/InputAdornment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function LoginPage() {

  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");

  const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  };

  const verifyPhoneNumber = () => {
    dispatch(SignInWithPhoneNumberHelper(phoneNumber));
  };

  return (
    <Row style={{ marginRight: 5 }}>
      <Col md="4"></Col>
      <Col>
        <TextField
          fullWidth
          label="Phone Number"
          placeholder="Phone Number"
          margin="normal"
          size="small"
          required
          value={phoneNumber}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneIcon style={{ width: 22, height: 22 }}></LocalPhoneIcon>
              </InputAdornment>
            ),
          }}
          inputProps={{ maxLength: 10 }}
          variant="outlined"
          onChange={onPhoneNumberChange}
        />

        <Button
          style={{ padding: 10, width: '100%' }}
          type="submit"
          color="primary"
          onClick={() => verifyPhoneNumber()}>
          Verify Number
        </Button>
      </Col>
      <Col md="4"></Col>
    </Row>
  );
}
