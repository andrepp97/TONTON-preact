import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { actions } from '../actions-store';
import { connect } from 'unistore/preact';

import Header from './header';

// ROUTES //
import Login from '../routes/login';
import Home from '../routes/home';
import Profile from '../routes/profile';
import MovieDetails from '../routes/movie-details';
import Results from '../routes/results';
import Artist from '../routes/movie-by-artist';
import GenreList from '../routes/genre';
import ArtistList from '../routes/artist';
import MovieByGenre from '../routes/movie-by-genre';
// ROUTES //

class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentDidMount() {
		this.props.userKeepLogin();
	}
	

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Login path="/login" />
					<ArtistList path="/artist" />
					<Artist path="/artist/:idArtist" />
					<GenreList path="/genre" />
					<MovieByGenre path="/genre/:idGenre" />
					<MovieDetails path="/movie-details/:idMov" />
					<Profile path="/profile/" user="me" />
					<Results path="/results" />
				</Router>
			</div>
		);
	}
}

export default connect('username', actions)(App);