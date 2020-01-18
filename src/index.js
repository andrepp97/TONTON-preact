import App from './components/app';

// STYLES //
import './style';
import 'bootstrap/dist/css/bootstrap.min.css';
// STYLES //

// UNISTORE //
import { Provider } from 'unistore/preact';
import { store } from './actions-store';
// UNISTORE //

const ProviderApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default ProviderApp;
