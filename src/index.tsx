import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./Auth/Provider/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux"
import store from './store'
import { NativeBaseProvider } from 'native-base'; //extendTheme

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <NativeBaseProvider>
        <AuthProvider>
          <Routes>
            <Route path="/Appointments" element={<div>Appointments</div>} />
            <Route path="/" element={<div>All</div>} />
            <Route path="/Patients" element={<div>Patients</div>} />
            <Route path="/Consultation/:id" element={<div>Consultation</div>} />
          </Routes>
        </AuthProvider>
      </NativeBaseProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
