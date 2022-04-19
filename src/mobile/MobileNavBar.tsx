import LogoutIcon from '@mui/icons-material/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClearContext } from '../actions/ClearContextAction';
import OrganisationPicker from '../components/OrganisationPicker/OrganisationPicker';
import useAuthHook from '../service-actions/LoginActions';
import '../styles/topbar.css';

export default function MobileNavBar() {
    const dispatch = useDispatch();

    const { SignOut } = useAuthHook();

    function switchTabs() {
        dispatch(ClearContext());
    }

    return (
        <Navbar bg="topBarBlue" fixed="top" expand="sm">
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
                    src={'/assets/NDLogo.png'}
                />
                <span className="logo">NAMBA DOCTOR</span>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav
                    className="ms-auto"
                    style={{ marginRight: 20, alignItems: 'center' }}
                >
                    <OrganisationPicker />
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
                        <LogoutIcon style={{ color: 'white' }} />
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
