import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
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
          <App />
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
