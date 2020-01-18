import { h, Component } from 'preact';
import style from '../movie-details/style.css';
import Axios from 'axios';
import { urlAPI } from '../../lib/database';

// COMPONENTS //
import MovCard from '../../components/movie-card';
import Loadings from '../../components/loading-screen';
import NoResult from '../../components/no-result';
// COMPONENTS //

class Artist extends Component {
    idArtist = location.pathname.split('/')[2];

    state = {
    	moviesByArtist: [],
    	artistName: '',
    	isLoading: false
    }

    getMovieByArtist = () => {
    	this.setState({ isLoading: true })
    	Axios.get(urlAPI + '/moviesByArtist', {
    		params: {
    			idArtist: this.idArtist
    		}
    	}).then(res => {
    		this.setState({
    			moviesByArtist: res.data,
    			artistName: res.data[0].castName,
    			isLoading: false
    		});
    	}).catch(err => {
    		console.log(err);
    	})
    }

    // LIFECYCLE //
    componentDidMount() {
    	this.getMovieByArtist();
    }
    // LIFECYCLE //

    // RENDERS //
	renderMoviesByArtist = () => this.state.moviesByArtist.map(val => <MovCard movData={val} />)
	// RENDERS //
    

	render({}, { artistName, moviesByArtist, isLoading }) {
		return (
			<div className={style.pageContainer}>
				<h2 className="mb-4">Movies of {artistName}</h2>
				<div className="row justify-content-around">
					{
						isLoading
							?
							<Loadings />
							:
							moviesByArtist.length
								?
								this.renderMoviesByArtist()
								:
								<NoResult />
					}
				</div>
			</div>
		);
	}
}

export default Artist;