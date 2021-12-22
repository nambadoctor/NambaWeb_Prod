import { Component, ChangeEvent, useContext, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SignInWithPhoneNumberHelper } from "../../Actions/Common/LoginActions"

type Props = {}

type State = {
    phoneNumber: string
    otp: string
}

export default class LoginPage extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);

        this.state = {
            phoneNumber: "",
            otp: ""
        };
    }

    componentDidMount() {
    }

    verifyPhoneNumber = async () => {
        await SignInWithPhoneNumberHelper(this.state.phoneNumber);
    }

    onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            phoneNumber: event.currentTarget.value
        })
    };

    render() {
        return (
            <Container style={{ maxWidth: "500px" }} fluid>
                <Form className="mt-4">
                    <Form.Group controlId="formEmail">
                        <Form.Label>PhoneNumber</Form.Label>
                        <Form.Control onChange={this.onPhoneNumberChange} type="email" placeholder="phonenumber" />
                    </Form.Group>
                    <Button id='sign-in-button' onClick={this.verifyPhoneNumber}> Verify Number </Button>
                </Form>
            </Container>
        );
    }
}