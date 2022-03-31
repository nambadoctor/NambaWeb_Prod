import 'bootstrap/dist/css/bootstrap.min.css';
import { NativeBaseProvider } from 'native-base'; //extendTheme
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './auth/Provider/AuthProvider';
import './index.css';
import store from './store';
import './styles/globals.css';

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
