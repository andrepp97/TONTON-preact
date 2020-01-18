/* eslint-disable no-mixed-spaces-and-tabs */
import { h, Component } from 'preact';
import { route } from 'preact-router';
import style from './style.css';
import { connect } from 'unistore/preact';
import { actions } from '../../actions-store';

class Login extends Component {
    state = {
    	username: '',
    	password: '',
    	nameError: '',
    	passError: ''
    }

    // LOGIN CHECKER //
    validateInput = () => {
    	let nameError = '';
    	let passError = '';

    	if (this.state.username === '') {
    		nameError = `Username can't be empty`;
    	}

    	if (this.state.password === '') {
    		passError = 'Please fill the password';
    	}

    	if (nameError || passError) {
    		this.setState({
    			nameError,
    			passError
    		});
    		return false;
    	}

    	return true;
    }

    submitValid = () => {
    	const isValid = this.validateInput();
    	let username = this.state.username;
    	let password = this.state.password;

    	// Jika input nya valid maka melakukan Login
    	if (isValid && username === 'admin' && password === 'admin') {
    		this.props.userLogin(username);
            
    		route('/');

    		// Clear Form Input
    		this.setState({
    			nameError: '',
    			passError: '',
    			username: '',
    			password: ''
    		});
    	}
    }

    onLogin = () => {
    	this.validateInput();
    	this.submitValid();
    }

    onEnter = (event) => {
    	if (event.key === 'Enter') {
    		this.onLogin();
    	}
    }
    // LOGIN CHECKER //

    // LIFECYCLE //
    componentWillMount() {
    	if (this.props.username) {
    		route('/');
    	}
    }
    // LIFECYCLE //

    render({}, { username, password, nameError, passError }) {
    	return (
    		<div className={style.pageContainer}>
    			<div className="row">
    				<div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
    					<div className="card shadow p-4 p-md-5">
    						<h2 className="text-center">LOGIN</h2>
    						<div className="form-group my-3">
    							<input
    								type="text"
    								placeholder="Username"
    								className="form-control"
    								value={username}
    								onChange={(e) => this.setState({ username: e.target.value })}
    							/>
    							<p className="text-danger">{nameError}</p>
    							<input
    								type="password"
    								placeholder="Password"
    								className="form-control"
    								value={password}
    								onKeyUp={this.onEnter}
    								onChange={(e) => this.setState({ password: e.target.value })}
    							/>
    							<p className="text-danger">{passError}</p>
    						</div>
    						<input
    							type="button"
    							value="LOGIN"
    							className="btn btn-primary"
    							onClick={this.onLogin}
    						/>

    						<div className="alert alert-dark mt-5">
								Username: admin
    							<br />
								Password: admin
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	);
    }
}

export default connect('username', actions)(Login);