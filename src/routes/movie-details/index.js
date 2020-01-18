import { h, Component } from 'preact';
import style from './style.css';
import Axios from 'axios';
import { urlAPI } from '../../lib/database';
import { connect } from 'unistore/preact';

// COMPONENTS //
import MovieEmbed from '../../components/movie-embed';
import MovTitle from '../../components/movie-title';
import MovInfo from '../../components/movie-info';
import NotLogin from '../../components/not-login';
import Loadings from '../../components/loading-screen';
// COMPONENTS //

class MovieDetails extends Component {
	idMov = location.pathname.split('/')[2];
	
	state = {
		movieData: {},
		movieGenres: [],
		movieArtists: [],
		isLoading: true
	}

	// GET DATA //
	getMovieData = () => {
		Axios.get(urlAPI + '/movieById', {
			params: {
				idMov: this.idMov
			}
		}).then(res => {
			// console.log(res.data);
			this.setState({ movieData: res.data, isLoading: false });
		}).catch(err => {
			console.log(err);
		});
	}

	getMovieGenres = () => {
		Axios.get(urlAPI + '/movieGenres', {
			params: {
				idMov: this.idMov
			}
		}).then(res => {
			// console.log(res.data);
			this.setState({ movieGenres: res.data });
		}).catch(err => {
			console.log(err);
		});
	}

	getMovieArtists = () => {
		Axios.get(urlAPI + '/movieArtists', {
			params: {
				idMov: this.idMov
			}
		}).then(res => {
			// console.log(res.data);
			this.setState({ movieArtists: res.data });
		}).catch(err => {
			console.log(err);
		});
	}
	// GET DATA //

	// LIFECYCLE //
	componentDidMount() {
		this.getMovieData();
		this.getMovieGenres();
		this.getMovieArtists();

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
	// LIFECYCLE //

	// RENDERS //
	renderMovieDetails = (movieData) => {
		return (
			<div>
				{
					this.props.username
					?
					<MovieEmbed movieData={movieData} />
					:
					<NotLogin />
				}
				<MovTitle movieData={movieData} />
				<MovInfo movieData={movieData} genreData={this.state.movieGenres} artistData={this.state.movieArtists} />
			</div>
		)
	}
	// RENDERS //

	render({}, { movieData, isLoading }) {
		return (
			<div className={style.pageContainer}>
				{
					isLoading
						?
						<Loadings />
						:
						this.renderMovieDetails(movieData)
				}
			</div>
		);
	}
}

export default connect('username')(MovieDetails);