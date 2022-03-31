import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './auth/Provider/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import { NativeBaseProvider } from 'native-base'; //extendTheme

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <NativeBaseProvider>
                <AuthProvider>
                    <App></App>
                </AuthProvider>
            </NativeBaseProvider>
        </Provider>
    </HashRouter>,
    document.getElementById('root'),
);
