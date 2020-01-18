import createStore from 'unistore';

const store = createStore({ username: '' });

const actions = (theStore) => ({
	userLogin({ user }) {
		store.setState({ username: 'admin' });
		localStorage.setItem('user', 'admin');
	},

	userKeepLogin() {
		let user = localStorage.getItem('user');
		store.setState({ username: user });
	},

	userLogout() {
		localStorage.removeItem('user');
		location.reload();
	}
});

export { store, actions };