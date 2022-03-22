import '../../Styles/topbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrganisationPicker from '../OrganisationPicker/OrganisationPicker';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { ClearContext } from '../../Actions/ClearContextAction';
import useAuthHook from '../../ServiceActions/LoginActions';

export default function Topbar() {
    const logo = require('../../Assets/NDLogo.png');
    const dispatch = useDispatch();

    const { SignOut } = useAuthHook();

    function switchTabs() {
        dispatch(ClearContext());
    }

    return (
        <Navbar bg="topBarBlue" fixed="top" expand="sm">
            <Link to={'/'} onClick={() => dispatch(ClearContext())}>
                <Navbar.Brand>
                    <img
                        alt="logo"
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 15,
                            marginRight: 10,
                            marginLeft: 10,
                        }}
                        src={String(logo)}
                    />
                    <span className="logo">NAMBA DOCTOR</span>
                </Navbar.Brand>
            </Link>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav
                    className="ms-auto"
                    style={{ marginRight: 20, alignItems: 'center' }}
                >
                    <OrganisationPicker></OrganisationPicker>
                    <Link
                        to="/Appointments"
                        onClick={() => {
                            switchTabs();
                        }}
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: '600',
                            marginLeft: 20,
                            marginRight: 40,
                            textDecoration: 'none',
                        }}
                    >
                        Appointments
                    </Link>
                    <Link
                        to="/Patients"
                        onClick={() => {
                            switchTabs();
                        }}
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: '600',
                            marginLeft: 20,
                            marginRight: 40,
                            textDecoration: 'none',
                        }}
                    >
                        Patients
                    </Link>
                    <div
                        onClick={SignOut}
                        style={{
                            background: '#1054c4',
                            padding: 10,
                            borderRadius: 30,
                            marginLeft: 10,
                            marginRight: 20,
                        }}
                    >
                        <LogoutIcon style={{ color: 'white' }}> </LogoutIcon>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
