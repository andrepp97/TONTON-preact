import { h, Component } from 'preact';
import style from '../movie-details/style.css';
import Axios from 'axios';
import { urlAPI } from '../../lib/database';

// COMPONENTS //
import MovCard from '../../components/movie-card';
import Loadings from '../../components/loading-screen';
import NoResult from '../../components/no-result';
// COMPONENTS //

class MovieByGenre extends Component {
    idGenre = location.pathname.split('/')[2];

    state = {
    	moviesByGenre: [],
    	genreName: '',
    	isLoading: false
    }

    getMovieByGenre = () => {
    	this.setState({ isLoading: true })
    	Axios.get(urlAPI + '/moviesByGenre', {
    		params: {
    			idGenre: this.idGenre
    		}
    	}).then(res => {
    		// console.log(res.data);
    		this.setState({
    			moviesByGenre: res.data,
    			genreName: res.data[0].genreName,
    			isLoading: false
    		})
    	}).catch(err => {
    		console.log(err)
    	});
    }

    // LIFECYCLE //
    componentDidMount() {
    	this.getMovieByGenre()
    }
    // LIFECYCLE //

    // RENDERS //
	renderMoviesByGenre = () => this.state.moviesByGenre.map(val => <MovCard movData={val} />)
	// RENDERS //

	render({}, { moviesByGenre, genreName, isLoading }) {
		return (
			<div className={style.pageContainer}>
				<h2 className="mb-4">{genreName} Movies</h2>
				<div className="row justify-content-around">
					{
						isLoading
							?
							<Loadings />
							:
							moviesByGenre.length
								?
								this.renderMoviesByGenre()
								:
								<NoResult/>
					}
				</div>
			</div>
		);
	}
}

export default MovieByGenre;